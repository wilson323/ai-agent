"use client";

import { CopilotChat } from "@copilotkit/react-ui";
import { useAgent } from "@/context/agent-context";

export function ChatContainer() {
  const { selectedAgent } = useAgent();

  // If no agent is selected, or if the agent is not a 'fastgpt' type, show a message.
  // This maintains the original logic of requiring a specific agent type to chat.
  if (!selectedAgent || selectedAgent.type !== 'fastgpt') {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="text-lg text-muted-foreground mt-32">
          请先选择 FastGPT 智能体后再进行对话
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col h-full w-full mx-auto max-w-3xl px-2 sm:px-6">
      <CopilotChat
        className="copilot-chat-container" // Add a class for custom styling
        instructions={selectedAgent.systemPrompt || "Please act as a helpful assistant."}
        // All other props like `messages`, `onSend`, etc., are handled internally by the CopilotChat component
        // when it's used within a CopilotKitProvider.
      />
    </div>
  );
}
