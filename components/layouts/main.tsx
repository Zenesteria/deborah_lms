import React from "react";
import { Nav, SideNav } from "@/components";

interface compProps {
  children: React.ReactNode;
}

export default function main({ children }: compProps) {
  return (
    <div className="bg-white text-black">
      <Nav />
      <div className="flex w-[90%] min-w-[300px] mx-auto mt-10">
        <SideNav />
        {children}
      </div>
    </div>
  );
}
