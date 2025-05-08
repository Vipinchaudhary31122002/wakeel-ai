import { ChatMessage } from "./ChatMessage";

interface Props {
  messages: { id: number; sender: string; text: string }[];
}

export const ChatContainer = ({ messages }: Props) => {
  return (
    <div className="relative flex absolute top-5 right-0 flex-col m-0 text-center overflow-y-auto ">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};
