import type { AIMessage } from "@/types/ai";

interface Props {
  message: AIMessage;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[82%] rounded-2xl rounded-br-sm bg-brand-gold text-brand-black px-3.5 py-2 text-sm leading-relaxed shadow-gold whitespace-pre-wrap break-words">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2">
      <div className="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-br from-brand-gold to-brand-goldlight flex items-center justify-center text-brand-black font-extrabold text-[11px] shadow-gold">
        P
      </div>
      <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/10 text-white/90 px-3.5 py-2 text-sm leading-relaxed whitespace-pre-wrap break-words backdrop-blur-sm">
        {message.content}
      </div>
    </div>
  );
}
