import { ChatWrapper } from "@/components/chat/ChatWrapper";

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-background text-foreground items-center justify-center">
      <ChatWrapper />
    </div>
  );
}