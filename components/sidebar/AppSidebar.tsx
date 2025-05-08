"use client";

import { Plus, Scale, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useChatStore } from "@/store/ChatStore";

const initialChatHistory = [
  { id: 1, title: "Next.js Project Setup", date: "2 days ago" },
  { id: 2, title: "React Hooks Explained", date: "1 week ago" },
  { id: 3, title: "Tailwind CSS Tips", date: "2 weeks ago" },
];

const dummyMessages = {
  1: [
    { id: 101, sender: "user", text: "How to set up Next.js?" },
    { id: 102, sender: "bot", text: "You can use create-next-app!" },
  ],
  2: [
    { id: 201, sender: "user", text: "Explain useEffect?" },
    { id: 202, sender: "bot", text: "Sure! It's used for side effects." },
  ],
  3: [
    { id: 301, sender: "user", text: "Tailwind tips?" },
    { id: 302, sender: "bot", text: "Use @apply for utilities." },
  ],
};

export function AppSidebar() {
  const { setSelectedChat, resetChat } = useChatStore();

  return (
    <div className="flex h-screen">
      <Sidebar>
        {/* Header */}
        <SidebarHeader>
          <div className="p-4 border-b border-border">
            <Button
              variant="default"
              className="w-full justify-start gap-2"
              onClick={resetChat}
            >
              <Plus size={16} />
              New chat
            </Button>
          </div>
        </SidebarHeader>

        {/* Chat List */}
        <SidebarContent>
          {initialChatHistory.map((chat) => (
            <div
              key={chat.id}
              className="p-4 hover:bg-muted flex justify-between items-start cursor-pointer"
              onClick={() => setSelectedChat(chat.id, dummyMessages[chat.id])}
            >
              <div className="flex flex-col gap-1">
                <span className="font-medium">{chat.title}</span>
                <span className="text-xs text-muted-foreground">{chat.date}</span>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    onClick={(e) => e.stopPropagation()} // Prevent chat selection when clicking menu
                    className="p-1 rounded hover:bg-accent"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start">
                  <DropdownMenuItem>Rename</DropdownMenuItem>
                  <DropdownMenuItem>Delete Chat</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter>
          <div className="p-4 border-t border-border">
            <Button variant="default" className="w-full justify-start gap-2">
              <Scale size={16} />
              Consult or Hire a Lawyer
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
