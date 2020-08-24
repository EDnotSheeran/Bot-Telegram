import bot from "../core/bot";
import { Message } from 'node-telegram-bot-api'

export default (msg: Message) => {
  const chatId = msg.chat.id;
  const user = "@" + msg.from?.username || msg.from?.first_name;

  bot.sendMessage(
    chatId,
    `${user} comandos bot:\n\n` +
      `/echo _<mensagem> retorna sua menssagem_\n` +
      `/whois _<destino> consultar informações do destino via TCP_\n` +
      `/time _ retorna o horario atual_\n` +
      `/help _ exibe essa menssagem de ajuda_\n`,
    { parse_mode: "Markdown" }
  );
}

