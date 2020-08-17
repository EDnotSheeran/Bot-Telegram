process.env.NTBA_FIX_319 = '1';
import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'
dotenv.config()

const bot = new TelegramBot(process.env.TOKEN as string, {polling: true})

// bot.on('message',(msg) => {
//     bot.sendMessage(msg.chat.id,msg.text as string)
// })

bot.onText(/\/echo (.+)/, (msg, match) => {
    bot.sendMessage(msg.chat.id, match![1]);
})

bot.onText(/\/time/, (msg, match) => {
    const data = new Date()
    bot.sendMessage(msg.chat.id, data.toTimeString());
})

bot.on('new_chat_members',(msg) => {
    bot.sendMessage(msg.chat.id,`Olá ${msg.new_chat_members![0].first_name}! Bem vindo(a)`);
})

console.log('\x1b[36mEDnotSheeran_bot\x1b[0m \x1b[33m[started]\x1b[0m')