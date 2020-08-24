 
import bot from "../core/bot";
import { Message } from 'node-telegram-bot-api'

export default (msg: Message, match: RegExpExecArray | null) => {
  const chatId = msg.chat.id
  const resp = match![1]

  bot.sendMessage(chatId, "🤖 " + resp)
}