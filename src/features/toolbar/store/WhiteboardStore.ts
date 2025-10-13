import { create } from "zustand";
import { Tool } from "../types/toolTypes";

type Line = {
  tool: string;
  points: number[];
};

export interface WhiteboardStore {
  lines: Line[];
  addLine: (line: Line) => void;
  clearLines: () => void;
}

export const useWhiteboardStore = create<WhiteboardStore>((set) => ({
  lines: [],
  addLine: (line) => set((state) => ({ lines: [...state.lines, line] })),
  clearLines: () => set({ lines: [] }),
}));
