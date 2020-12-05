// Bot
import bot from './core/bot'

// Admin log
import admin from './admin/admin'
bot.on('message',admin)

// Commands
import echo from './commands/echo'
import time from './commands/time'
import whois from './commands/whois'
import help from './commands/help'
import lyrics from './commands/lyrics'

bot.onText(/\/echo (.+)/, echo)
bot.onText(/\/whois (.+)/, whois)
bot.onText(/\/lyrics (.+)/, lyrics)
bot.onText(/\/time/, time)
bot.onText(/\/help/, help)

// Events
import join from './events/join'
import left from './events/left'

bot.on('new_chat_members', join)
bot.on('left_chat_member', left)



// Initialization Message
console.log('\x1b[36mEDnotSheeran_bot\x1b[0m \x1b[33m[started]\x1b[0m')

import express from 'express'
const app = express()
app.get('/', (req,res) => res.send('Bot running...'))
app.listen(3333)