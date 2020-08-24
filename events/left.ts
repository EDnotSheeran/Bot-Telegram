import bot from '../core/bot' 
import { Message } from 'node-telegram-bot-api'

export default (msg: Message) => {
  const chatId = msg.chat.id

  bot.sendMessage(chatId, `@${msg.left_chat_member?.first_name}, saiu!`)
}