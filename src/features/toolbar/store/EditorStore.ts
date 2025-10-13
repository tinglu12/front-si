import { create } from "zustand";
import { Tool } from "../types/toolTypes";

export interface EditorStore {
  tool: Tool;
  setTool: (tool: Tool) => void;
}

export const useEditorStore = create<EditorStore>((set) => ({
  tool: Tool.Pencil,
  setTool: (tool) => set({ tool }),
}));
