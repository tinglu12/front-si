"use client";
import React, { useState, useRef, useEffect } from "react";
import { Layer, Line, Stage, Text } from "react-konva";
import { useWhiteboardStore } from "@/features/toolbar/store/WhiteboardStore";
import { useEditorStore } from "@/features/toolbar/store/EditorStore";

const Whiteboard = () => {
  const tool = useEditorStore((state) => state.tool);
  const color = useEditorStore((state) => state.color);
  const [currentLine, setCurrentLine] = useState<number[] | null>(null);
  const lines = useWhiteboardStore((state) => state.lines);
  const addLine = useWhiteboardStore((state) => state.addLine);
  const clearLines = useWhiteboardStore((state) => state.clearLines);
  const isDrawing = useRef(false);

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    if (!pos) return;
    setCurrentLine([pos.x, pos.y]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current || !currentLine) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    if (!point) return;
    setCurrentLine([...currentLine, point.x, point.y]);
  };

  const handleMouseUp = () => {
    if (currentLine) {
      addLine({ tool, points: currentLine, color });
      setCurrentLine(null);
    }
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
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={line.color}
                strokeWidth={5}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
                globalCompositeOperation={
                  line.tool === "eraser" ? "destination-out" : "source-over"
                }
              />
            ))}
            {currentLine && (
              <Line
                points={currentLine}
                stroke={color}
                strokeWidth={5}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
                globalCompositeOperation={
                  tool === "eraser" ? "destination-out" : "source-over"
                }
              />
            )}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default Whiteboard;
