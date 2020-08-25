import { Message } from 'node-telegram-bot-api'
import fs from 'fs'
import path from 'path'

const LOG_FILE = path.resolve(__dirname, 'log.json')

export default (msg: Message) => {
    const date = new Date()

    const user_message = {
        id : msg.chat.id,
        name : msg.chat?.first_name || '' + msg.chat?.last_name || '',
        username: msg.chat.username,
        message: msg.text,
        date: date.toLocaleString()
    }
  console.table(user_message)

  let string_data = fs.readFileSync(LOG_FILE,'utf-8')
  let json_data = JSON.parse(string_data)
  json_data.push({...user_message})
  let data = JSON.stringify(json_data)
  fs.writeFileSync(LOG_FILE, data,{encoding: 'utf-8'})
}

