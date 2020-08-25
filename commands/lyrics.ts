import bot from "../core/bot";
import { Message } from 'node-telegram-bot-api'
import request from 'request'

export default (msg: Message, match: RegExpExecArray | null) => {
    try {
        let [band, song] = match![1].split(' ')
        
        let options = {
            method: "GET",
            url: `https://api.lyrics.ovh/v1/${band.replace(' ','_')}/${song.replace(' ','_')}`
        }
        
        request(options, (error, response, body) => {
            const data = JSON.parse(body)
            bot.sendMessage(msg.chat.id, data.lyrics || 'Desculpe, não encontramos a musica')
        })
    } catch (error) {
        bot.sendMessage(msg.chat.id, '🤖 Ocorreu algum erro...')
    }
}