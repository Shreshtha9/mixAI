"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChatInputBox from "@/app/_components/ChatInputBox";
import { useTheme } from "next-themes";
export default function Home() {
  const {setTheme}=useTheme()
  return (
    <div >
      <ChatInputBox />

    </div>
  );
}
