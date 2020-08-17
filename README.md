# Bot-Telegram

echo - Repete sua mensagem
time - Retorna o horario
onibus - Retorna imagem com os horarios

`bot.onText(/\/echo (.+)/, (msg, match) => {
    bot.sendMessage(msg.chat.id, match![1]);
})`

`bot.on('new_chat_members',(msg) => {
    bot.sendMessage(msg.chat.id,`Olá ${msg.new_chat_members![0].first_name}! Bem vindo(a)`);
})`

`bot.on('message',(msg) => {
    bot.sendMessage(msg.chat.id,msg.text as string)
})`