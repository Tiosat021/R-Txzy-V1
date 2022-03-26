let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
┌────〔 Donasi 〕
│• Gopay :
│  085762224918
│• Dana :
│  0895622816517
│• Pulsa :
│  085762224918
│  0895622816517
│• Saweria :
│  saweria.co/mursid25
│• Owner
│  wa.me/62895622816517
╰────────────
`.trim(), 'Donasi nya kak >_<', 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
