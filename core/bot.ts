process.env.NTBA_FIX_319 = '1'
import TelegramBot from "node-telegram-bot-api"
import dotenv from 'dotenv'
dotenv.config()

export default new TelegramBot(process.env.BOT_TOKEN as string, { polling: true })