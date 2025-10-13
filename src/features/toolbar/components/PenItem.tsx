import React from "react";
import { Tool } from "../types/toolTypes";
import { useEditorStore } from "../store/EditorStore";
import { useWhiteboardStore } from "../store/WhiteboardStore";
import ToolbarItem from "./ToolbarItem";
import { TOOL_CONFIG } from "../config/toolConfig";

const LABEL = "Pen";

const PenItem = () => {
  const setTool = useEditorStore((state) => state.setTool);
  const tool = useEditorStore((state) => state.tool);

  const handleClick = () => {
    setTool(Tool.Pencil);
  };

  return (
    <ToolbarItem
      label={LABEL}
      icon={TOOL_CONFIG[Tool.Pencil].icon}
      onClick={handleClick}
      isSelected={tool === Tool.Pencil}
    />
  );
};

export default PenItem;
