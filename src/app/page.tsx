"use client";
import { useEffect, useState, useRef } from "react";
import { Layer, Stage, Text, Line } from "react-konva";
import { Button } from "@/components/ui/button";
import Whiteboard from "@/features/canvas/components/Whiteboard";

export default function Home() {
  return (
    <div>
      <Whiteboard />
    </div>
  );
}
