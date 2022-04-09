const qrcode = require('qrcode-terminal')

const {Client} = require('whatsapp-web.js')
const client = new Client()

// Aqui eu gero um qrcode para conectar ao servidor do whatsapp-web
client.on('qr', qr =>{
    qrcode.generate(qr, {small: true})
})
//Aqui eu configuro uma mensagem para aparecer no terminal apos conectado
client.on('ready', () => {
    console.log('conectado com sucesso!')

})

//Aqui o chatbot pega as mensagens que foram enviadas para nois e responde com uma certa mensagem configurada
client.on('message', message =>{
    if(message.body === 'Oi') {
        client.sendMessage(message.from, 'Olá tudo bem?')
    }
})
client.initialize()