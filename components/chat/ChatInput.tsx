"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { Mic } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export default function ChatInput() {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const speechToText = () => {
    return 0;
  };
  return (
    <div className="p-4 w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex items-end gap-2 bg-background rounded-lg border border-input p-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="min-h-10 resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            rows={1}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim()}
            className="shrink-0"
          >
            <Send size={16} />
          </Button>
          <Button onClick={speechToText} size="icon">
            <Mic />{" "}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          AI Assistant can make mistakes. Consider checking important
          information.
        </p>
      </form>
    </div>
  );
}
