let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
┌────〔 Donasi 〕
│• Gopay :
│  08956 KALAU UDAH PUAS TINGGAL SV CARANYA GINI
│• Dana :
│  0895622816517
│  088233832771
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
