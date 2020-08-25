import bot from "../core/bot";
import { Message } from 'node-telegram-bot-api'

export default (msg: Message) => {
  try {
    const data = new Date()
    bot.sendMessage(msg.chat.id, data.toTimeString())
  } catch (error) {
    bot.sendMessage(msg.chat.id, '🤖 Ocorreu algum erro...')
  }
  
}