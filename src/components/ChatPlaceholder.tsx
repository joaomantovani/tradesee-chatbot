import IconSunTwentyFour from "./icons/IconSunTwentyFour";
import IconThunderbolt from "./icons/IconThunderbolt";
import IconWarning from "./icons/IconWarning";

export const ChatPlaceholder = () => {
  return (
    <div className="m-5">
      <h3 className="my-8 cursor-default text-center text-4xl font-bold">
        TradeSee - AI Chat
      </h3>
      <div className=" m-auto mb-8 flex flex-col gap-5 md:max-w-4xl md:flex-row">
        <div>
          <div className="mb-3 flex cursor-default items-center justify-center text-lg">
            <IconSunTwentyFour width={24} height={24} className="mr-3" />
            Exemplos
          </div>
          <div className="mb-3 cursor-pointer rounded bg-[#E9EDF8] p-3 text-center text-sm text-[#4B4B4B]">
            &quot;Quais os potenciais clientes para a Resfriar na
            Eslováquia?&quot;
          </div>
          <div className="mb-3 cursor-pointer rounded bg-[#E9EDF8] p-3 text-center text-sm text-[#4B4B4B]">
            &quot;Quais os possíveis fornecedores para a resfriar.com.br na
            Eslováquia?&quot;
          </div>
          <div className="mb-3 cursor-pointer rounded bg-[#E9EDF8] p-3 text-center text-sm text-[#4B4B4B]">
            &quot;Possiveis clientes para a resfriar.com.br na Eslováquia que
            tenham interesse em produtos de refrigeração&quot;
          </div>
        </div>
        <div>
          <div className="mb-3 flex cursor-default items-center justify-center text-lg">
            <IconThunderbolt width={24} height={24} className="mr-3" />
            Capacidades
          </div>
          <div className="mb-3 cursor-default rounded bg-[#E9EDF8] p-3 text-center text-sm text-[#4B4B4B]">
            Lembra o que o usuário disse anteriormente na conversa
          </div>
          <div className="mb-3 cursor-default rounded bg-[#E9EDF8] p-3 text-center text-sm text-[#4B4B4B]">
            Ser conversacional para responder dados
          </div>
          <div className="mb-3 cursor-default rounded bg-[#E9EDF8] p-3 text-center text-sm text-[#4B4B4B]">
            Treinado para recusar pedidos inapropriados
          </div>
        </div>
        <div>
          <div className="mb-3 flex cursor-default items-center justify-center text-lg">
            <IconWarning width={24} height={24} className="mr-3" />
            Limitações
          </div>
          <div className="mb-3 cursor-default rounded bg-[#E9EDF8] p-3 text-center text-sm text-[#4B4B4B]">
            Ocasionalmente pode gerar informações incorretas
          </div>
          <div className="mb-3 cursor-default rounded bg-[#E9EDF8] p-3 text-center text-sm text-[#4B4B4B]">
            Ocasionalmente, pode produzir instruções prejudiciais ou conteúdo
            tendencioso
          </div>
          <div className="mb-3 cursor-default rounded bg-[#E9EDF8] p-3 text-center text-sm text-[#4B4B4B]">
            Responde perguntas relacionadas a análises de dados
          </div>
        </div>
      </div>
    </div>
  );
};
