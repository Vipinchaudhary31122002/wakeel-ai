import { create } from "zustand";

type Message = {
  id: number;
  sender: string;
  text: string;
};

type ChatStore = {
  selectedChatId: number | null;
  messages: Message[];
  setSelectedChat: (id: number, messages: Message[]) => void;
  resetChat: () => void;
  addMessage: (text: string) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  selectedChatId: null,
  messages: [],
  setSelectedChat: (id, messages) => set({ selectedChatId: id, messages }),
  resetChat: () => set({ selectedChatId: null, messages: [] }),
  addMessage: (text) =>
    set((state) => ({
      messages: [...state.messages, { id: Date.now(), sender: "user", text }],
    })),
}));
