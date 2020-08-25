 
import bot from "../core/bot";
import { Message } from 'node-telegram-bot-api'

export default (msg: Message, match: RegExpExecArray | null) => {
  try {
    const chatId = msg.chat.id
    const resp = match![1]
  
    bot.sendMessage(chatId, "🤖 " + resp)
  } catch (error) {
    bot.sendMessage(msg.chat.id, '🤖 Ocorreu algum erro...')
  }
}