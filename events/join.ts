import bot from "../core/bot";
import { Message } from 'node-telegram-bot-api'

export default (msg: Message) => {
    bot.sendMessage(msg.chat.id,`Olá ${msg.new_chat_members![0].first_name}! Bem vindo(a)`)
};