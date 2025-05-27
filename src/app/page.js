"use client";

import Image from "next/image";
import Todo from "./Components/Todo";

export default function Home() {
  return (
    <div className=" w-full h-screen font-[family-name:var(--font-geist-sans)] bg-[#242424]">
      <Todo />
    </div>
  );
}
