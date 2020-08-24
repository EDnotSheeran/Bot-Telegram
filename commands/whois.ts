import bot from '../core/bot'
import { Message } from 'node-telegram-bot-api'
import request from 'request'

export default async (msg: Message, match: RegExpExecArray | null) => {
  const chatId = msg.chat.id;
  const host = match![1]
  const user = "@" + msg.from?.username || msg.from?.first_name;

  let options = {
    method: "POST",
    url: "https://nettools.club/_whois_ajax",
    form: { host: host },
  };

  request(options, (error, response, body) => {
    if (error || response.statusCode !== 200)
      return bot.sendMessage(chatId, `${user}, ${host} não localizado!`)

    bot.sendMessage(chatId, `${user}, resultado whois: \n\n${body}`)
  })
};