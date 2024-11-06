import { ChatMessage } from "@/types/ChatMessage";
import IconUser from "./icons/IconUser";
import IconOpenai from "./icons/IconOpenai";
import MarkdownPreview from "@uiw/react-markdown-preview";

type Props = {
  item: ChatMessage;
};

export const ChatMessageItem = ({ item }: Props) => {
  return (
    <div className={`py-5 ${item.author === "ai" && "bg-[#E9EDF8]"}`}>
      <div className="m-auto flex max-w-4xl">
        <div
          className={`mx-4 flex h-10 w-10 items-center justify-center rounded md:ml-0 ${
            item.author === "ai" ? "bg-gpt-ai-color" : "bg-[#036AA3]"
          }`}
        >
          {item.author === "me" && <IconUser width={24} height={24} />}
          {item.author === "ai" && <IconOpenai width={24} height={24} />}
        </div>
        <div className="flex-1">
          <MarkdownPreview
            source={item.body}
            style={{
              backgroundColor: "transparent",
              color: "#4B4B4B",
            }}
          />
        </div>
      </div>
    </div>
  );
};
