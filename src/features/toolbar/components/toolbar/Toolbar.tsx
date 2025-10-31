import React from "react";
import { Tool } from "../../types/toolTypes";
import { useEditorStore } from "../../store/EditorStore";
import ToolbarItems from "./item/ToolbarItem";
import PenItem from "./item/PenItem";
import EraserItem from "./item/EraserItem";
import EmptyItem from "./item/EmptyItem";

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
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4">
      <div className="flex flex-row gap-2 justify-center border-2 border-gray-300 rounded-md">
        {toolBarItemsData.map((item) => (
          <item.component key={item.value} />
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
