import React from "react";
import { Tool } from "../types/toolTypes";
import { TOOL_CONFIG } from "../config/toolConfig";
import ToolbarItem from "./ToolbarItem";
import { useEditorStore } from "../store/EditorStore";

const EraserItem = () => {
  const setTool = useEditorStore((state) => state.setTool);
  const tool = useEditorStore((state) => state.tool);

  const config = TOOL_CONFIG[Tool.Eraser];

  const handleClick = () => {
    setTool(Tool.Eraser);
  };

  return (
    <ToolbarItem
      label={config.label}
      icon={config.icon}
      onClick={handleClick}
      isSelected={tool === Tool.Eraser}
    />
  );
};

export default EraserItem;
