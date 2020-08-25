import bot from "../core/bot";
import { Message } from 'node-telegram-bot-api'

export default (msg: Message) => {
  try {
    bot.sendMessage(
      msg.chat.id,
      `comandos bot:\n\n` +
        `/echo Hello World\n` +
        `/whois 123.123.123.123\n` +
        `/lyrics imagine_dragons natural\n` +
        `/time\n` +
        `/help\n`
    )
  } catch (error) {
    bot.sendMessage(msg.chat.id, '🤖 Ocorreu algum erro...')
  }
}

