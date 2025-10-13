import { create } from "zustand";
import { Tool } from "../types/toolTypes";

export interface EditorStore {
  tool: Tool;
  color: string;
  setTool: (tool: Tool) => void;
  setColor: (color: string) => void;
}

export const useEditorStore = create<EditorStore>((set) => ({
  tool: Tool.Pencil,
  color: "#000000",
  setTool: (tool) => set({ tool }),
  setColor: (color) => set({ color }),
}));
