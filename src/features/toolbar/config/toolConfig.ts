import { Tool } from "../types/toolTypes";

export interface ToolConfig {
  toolType: Tool;
  label: string;
  icon: string;
}

export const TOOL_CONFIG: Record<Tool, ToolConfig> = {
  [Tool.Pencil]: {
    toolType: Tool.Pencil,
    label: "Pen",
    icon: "✏️",
  },
  [Tool.Eraser]: {
    toolType: Tool.Eraser,
    label: "Eraser",
    icon: "🧹",
  },
  [Tool.Empty]: {
    toolType: Tool.Empty,
    label: "Empty",
    icon: "⚪",
  },
};

export const TOOL_ITEMS: ToolConfig[] = Object.values(TOOL_CONFIG);
