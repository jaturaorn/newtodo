"use client";

import Image from "next/image";
import Todo from "./Components/Todo";

export default function Home() {
  return (
    <div className=" w-full min-h-[100vh] font-[family-name:var(--font-geist-sans)] bg-[#242424]">
      <Todo />
    </div>
  );
}
