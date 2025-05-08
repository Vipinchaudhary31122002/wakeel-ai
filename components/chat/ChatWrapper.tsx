"use client";

import ChatInput from "./ChatInput";
import { ChatContainer } from "./ChatContainer";
import { useChatStore } from "@/store/ChatStore";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const ChatWrapper = () => {
  const { messages, addMessage } = useChatStore();
  const isEmpty = messages.length === 0;

  const [showCenteredInput, setShowCenteredInput] = useState(true);

  useEffect(() => {
    if (!isEmpty) {
      setTimeout(() => setShowCenteredInput(false), 50); 
    } else {
      setShowCenteredInput(true);
    }
  }, [isEmpty]);

  return (
    <div className="flex flex-col h-screen w-full items-center relative overflow-hidden">
      {/* Chat content (only if not empty) */}
      {!isEmpty && (
        <div className="flex-1 w-full max-w-3xl px-4 overflow-y-auto">
          <ChatContainer messages={messages} />
        </div>
      )}

      {/* Smooth transitioning ChatInput */}
      <div
        className={clsx(
          "transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] absolute w-full px-4 flex justify-center",
          showCenteredInput
            ? "top-1/2 transform -translate-y-1/2 opacity-100"
            : "bottom-4 top-auto translate-y-0 opacity-100"
        )}
      >
        <div className="w-full max-w-3xl">
          <ChatInput onSend={addMessage} />
        </div>
      </div>
    </div>
  );
};
