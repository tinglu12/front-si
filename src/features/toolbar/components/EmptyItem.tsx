import React from "react";
import { TOOL_CONFIG } from "../config/toolConfig";
import { Tool } from "../types/toolTypes";
import ToolbarItem from "./ToolbarItem";
import { useWhiteboardStore } from "../store/WhiteboardStore";

const EmptyItem = () => {
  const clearLines = useWhiteboardStore((state) => state.clearLines);
  const config = TOOL_CONFIG[Tool.Empty];

  const handleClick = () => {
    console.log("clearLines");
    clearLines();
  };

  return (
    <ToolbarItem
      label={config.label}
      icon={config.icon}
      onClick={handleClick}
      isSelected={false}
    />
  );
};

export default EmptyItem;
