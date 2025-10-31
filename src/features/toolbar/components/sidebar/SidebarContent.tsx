import React from "react";

type SidebarContentProps = {
  children: React.ReactNode;
};

const SidebarContent = ({ children }: SidebarContentProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default SidebarContent;
