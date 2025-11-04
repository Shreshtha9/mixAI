'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Sun, Moon} from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import React from "react"

export function AppSidebar() {
    const {theme,setTheme}=useTheme();
  return (
    <Sidebar>
      <SidebarHeader />
      <div className="p-3">
      <div className=" flex justify-between items-center">
     <div className="flex items-center gap-3"><Image src={'/logo.svg'} alt="logo" width={60} height={60}
      className="w-10 h-[40px}"/>
      <h2 className="font-bold text-xl">AI FUSION</h2>
      </div> 
      <div>
       {theme=='light'? <Button variant={'ghost'} onClick={()=>setTheme('dark')}><Sun/></Button>
       :<Button variant={'ghost'} onClick={()=>setTheme('light')} ><Moon/></Button>}
      </div>
      </div>
      <Button className='mt-7 w-full' size="lg">+ New Chat</Button>
      </div>
      <SidebarContent>
        <SidebarGroup >
            <div className={'p-3'}>
          <h2 className="font-bold text-lg">Chat</h2>
          <p className="text-sm text-grey-400">Sign in to start chatting with multiple model</p>
        </div>
        </SidebarGroup >
      </SidebarContent>
      <SidebarFooter >
        <div className="p-3 mb-10">
            <Button className={' w-full' } size={'lg'} >Sign in/Sign up</Button>
        </div>
        </SidebarFooter>
    </Sidebar>
  )
}