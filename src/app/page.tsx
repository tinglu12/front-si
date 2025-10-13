"use client";
import { useEffect, useState, useRef } from "react";
import { Layer, Stage, Text, Line } from "react-konva";
import { Button } from "@/components/ui/button";
import WhiteboardComponent from "@/features/canvas/components/Whiteboard";
import dynamic from "next/dynamic";
import Toolbar from "@/features/toolbar/components/Toolbar";

const Whiteboard = dynamic(
  () => import("@/features/canvas/components/Whiteboard"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div>
      <Toolbar />

      <Whiteboard />
    </div>
  );
}
