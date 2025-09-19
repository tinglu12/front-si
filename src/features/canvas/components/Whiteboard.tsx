"use client";
import React, { useState, useRef, useEffect } from "react";
import { Layer, Line, Stage, Text } from "react-konva";
import { Button } from "@/components/ui/button";

const Whiteboard = () => {
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState<any[]>([]);
  const isDrawing = useRef(false);
  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    if (!pos) return;
    setLines((prev) => [...prev, { tool, points: [pos.x, pos.y] }]);
  };

  const handleTrash = () => {
    setLines([]);
  };

  const handleMouseMove = (e: any) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    if (!point) return;

    setLines((prev) => {
      if (prev.length === 0) return prev;
      const lastIndex = prev.length - 1;
      const last = prev[lastIndex];
      const updatedLast = {
        ...last,
        points: [...last.points, point.x, point.y],
      };
      const next = prev.slice();
      next[lastIndex] = updatedLast;
      return next;
    });
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  // Touch-specific wrappers to prevent default gestures and reuse logic
  const handleTouchStart = (e: any) => {
    if (e?.evt?.preventDefault) e.evt.preventDefault();
    handleMouseDown(e);
  };

  const handleTouchMove = (e: any) => {
    if (e?.evt?.preventDefault) e.evt.preventDefault();
    handleMouseMove(e);
  };

  const handleTouchEnd = (e: any) => {
    if (e?.evt?.preventDefault) e.evt.preventDefault();
    handleMouseUp();
  };
  return (
    <>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
      <Button onClick={handleTrash}>Trash</Button>

      <div className="w-full h-full">
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ touchAction: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Layer>
            <Text text="Hello" />
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke="#df4b26"
                strokeWidth={5}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
                globalCompositeOperation={
                  line.tool === "eraser" ? "destination-out" : "source-over"
                }
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default Whiteboard;
