import bot from "../core/bot";
import { Message } from 'node-telegram-bot-api'

export default (msg: Message) => {
  const data = new Date()
  bot.sendMessage(msg.chat.id, data.toTimeString())
}