import { chatPrompt } from "@/utils/chat";
import { useTranslation } from "react-i18next";
export default function ChatPromptSettings({ workspace, setHasChanges }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="name" className="block input-label">
          {t("chat.prompt.title")}
        </label>
        <p className="text-white text-opacity-60 text-xs font-medium py-1.5">
          {t("chat.prompt.description")}
        </p>
      </div>
      <textarea
        name="openAiPrompt"
        rows={5}
        defaultValue={chatPrompt(workspace)}
        className="bg-zinc-900 placeholder:text-white/20 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
        placeholder="Given the following conversation, relevant context, and a follow-up question, reply with an answer to the current question the user is asking. You must reply using only English and Arabic language. Do not use or output any words, characters, or symbols from other languages. Reject any inclusion of Chinese, Japanese, Hindi, Hebrew, or any other non-English, non-Arabic text. Return only your response to the question given the above information following the users instructions as needed. "
        required={true}
        wrap="soft"
        autoComplete="off"
        onChange={() => setHasChanges(true)}
      />
    </div>
  );
}
