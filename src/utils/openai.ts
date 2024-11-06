import { ChatMessage } from "@/types/ChatMessage";
import OpenAI from "openai";
import { fetchCompanies } from "./clay";
import { generateCompanyScore } from "./companyScore";
import { scrapper } from "./scrapper";

// Configuração do cliente OpenAI
const config = new OpenAI({
  apiKey:
    "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",
  dangerouslyAllowBrowser: true, // Permite uso no navegador; use com cautela
});

export const openai = {
  generate: async (messages: ChatMessage[]) => {
    try {
      // Criação de um novo thread
      const thread = await config.beta.threads.create();

      // Adiciona mensagens ao thread
      for (const message of messages) {
        if (message.body) {
          await config.beta.threads.messages.create(thread.id, {
            role: message.author === "me" ? "user" : "assistant",
            content: message.body,
          });
        } else {
          console.warn("Mensagem ignorada devido ao conteúdo vazio:", message);
        }
      }

      // Executa o assistente no thread
      const run = await config.beta.threads.runs.create(thread.id, {
        assistant_id: "asst_AuntwEp6RJch0nFIRHLgVFSR",
      });

      // Polling para aguardar a conclusão do `run` ou `requires_action`
      let runStatus = run.status;
      let functionCallResponse = null;

      while (
        runStatus === "queued" ||
        runStatus === "in_progress" ||
        runStatus === "requires_action"
      ) {
        console.log("Aguardando o assistente processar a resposta...");
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Espera 2 segundos

        const updatedRun = await config.beta.threads.runs.retrieve(
          thread.id,
          run.id
        );
        runStatus = updatedRun.status;

        // Verifica se há uma chamada de função pendente
        if (
          runStatus === "requires_action" &&
          updatedRun?.required_action?.submit_tool_outputs
        ) {
          const toolCalls =
            updatedRun.required_action.submit_tool_outputs.tool_calls;

          // Processa cada chamada de função
          for (const toolCall of toolCalls) {
            const { function: toolFunction, id: toolCallId } = toolCall;
            const { name, arguments: args } = toolFunction;
            console.log("Chamada de função detectada:", toolFunction);

            // Mock da função `search_companies`
            if (name === "search_companies") {
              console.log("Executando mock da função `search_companies`...");
              functionCallResponse = {
                companies: fetchCompanies(),
              };

              await config.beta.threads.runs.submitToolOutputs(
                thread.id,
                run.id,
                {
                  tool_outputs: [
                    {
                      tool_call_id: toolCallId,
                      output: JSON.stringify(functionCallResponse),
                    },
                  ],
                }
              );
              console.log("Mock da função `search_companies` concluído.");
            }

            // Mock da função `generate_company_score`
            else if (name === "generate_company_score") {
              console.log(
                "Executando mock da função `generate_company_score`..."
              );
              functionCallResponse = generateCompanyScore();

              await config.beta.threads.runs.submitToolOutputs(
                thread.id,
                run.id,
                {
                  tool_outputs: [
                    {
                      tool_call_id: toolCallId,
                      output: JSON.stringify(functionCallResponse),
                    },
                  ],
                }
              );
              console.log("Mock da função `generate_company_score` concluído.");
            }

            // Mock da função `scrape_site_info`
            else if (name === "scrape_site_info") {
              console.log("Executando mock da função `scrape_site_info`...");
              functionCallResponse = scrapper();

              await config.beta.threads.runs.submitToolOutputs(
                thread.id,
                run.id,
                {
                  tool_outputs: [
                    {
                      tool_call_id: toolCallId,
                      output: JSON.stringify(functionCallResponse),
                    },
                  ],
                }
              );
              console.log("Mock da função `scrape_site_info` concluído.");
            }
          }
        }
      }

      // Recupera as mensagens atualizadas do thread
      const updatedMessages = await config.beta.threads.messages.list(
        thread.id
      );
      console.log("Mensagens atualizadas:", updatedMessages.data);

      // Extrai a última resposta do assistente ou da chamada de função
      const assistantMessage = updatedMessages.data.find(
        (msg) => msg.role === "assistant"
      )?.content;

      console.log("Resposta do assistente:", assistantMessage);

      return assistantMessage || "O assistente não forneceu uma resposta.";
    } catch (error) {
      console.error("Erro ao gerar resposta:", error);
      return undefined;
    }
  },

  translateMessages: (messages: ChatMessage[]) => {
    return messages.map((message) => ({
      role: message.author === "me" ? "user" : "assistant",
      content: message.body || "", // Define conteúdo vazio se body estiver ausente
    }));
  },
};
