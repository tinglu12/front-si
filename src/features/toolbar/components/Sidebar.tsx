import { Github } from "@uiw/react-color";
import { useEditorStore } from "../store/EditorStore";
import React from "react";
import Toolbar from "./Toolbar";

const Sidebar = () => {
  const color = useEditorStore((state) => state.color);
  const setColor = useEditorStore((state) => state.setColor);
  return (
    <div className="absolute z-50 pointer-events-auto ">
      <div>
        <div className="flex flex-col gap-2">
          <h1>Sidebar</h1>
        </div>
        <Toolbar />

        <div className="flex flex-col gap-2">
          <Github
            color={color}
            onChange={(color) => setColor(color.hex)}
            showTriangle={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
