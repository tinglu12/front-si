import React from "react";
import { Tool } from "../types/toolTypes";
import { useEditorStore } from "../store/EditorStore";
import ToolbarItems from "./ToolbarItem";
import PenItem from "./PenItem";
import EraserItem from "./EraserItem";
import EmptyItem from "./EmptyItem";

const toolBarItemsData = [
  {
    value: Tool.Pencil,
    component: PenItem,
  },

  {
    value: Tool.Eraser,
    component: EraserItem,
  },
  {
    value: Tool.Empty,
    component: EmptyItem,
  },
];

const Toolbar = () => {
  return (
    <div className="absolute z-50 pointer-events-auto">
      <div className="flex flex-col gap-2">
        {toolBarItemsData.map((item) => (
          <item.component key={item.value} />
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
