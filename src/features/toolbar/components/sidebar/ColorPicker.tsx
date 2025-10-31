import React from "react";
import { Github } from "@uiw/react-color";
import { useEditorStore } from "../../store/EditorStore";
const ColorPicker = () => {
  const color = useEditorStore((state) => state.color);
  const setColor = useEditorStore((state) => state.setColor);
  return (
    <div>
      <Github
        color={color}
        onChange={(color) => setColor(color.hex)}
        showTriangle={false}
      />
    </div>
  );
};

export default ColorPicker;
