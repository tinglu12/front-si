import React from "react";
import { Tool } from "../../../types/toolTypes";
import { useEditorStore } from "../../../store/EditorStore";
import { Button } from "@/components/ui/button";

type ToolbarItemsProps = {
  label: string;
  icon: string;
  onClick: () => void;
  isSelected: boolean;
};

const ToolbarItems = ({
  label,
  icon,
  onClick,
  isSelected,
}: ToolbarItemsProps) => {
  return (
    <Button variant={isSelected ? "default" : "outline"} onClick={onClick}>
      {icon}
    </Button>
  );
};

export default ToolbarItems;
