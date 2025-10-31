import React from "react";
import ColorPicker from "./ColorPicker";

const Sidebar = () => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 z-50 pointer-events-auto p-4 max-h-[48rem] w-72">
      <div className="flex flex-col align-center gap-2 border-2 border-gray-300 rounded-md h-full p-4">
        <div className="flex flex-col gap-2">
          <h1>Sidebar</h1>
        </div>

        <ColorPicker />
      </div>
    </div>
  );
};

export default Sidebar;
