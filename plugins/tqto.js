let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO
╭═══════════════════════
║╭──❉ 〔 TERIMAKASIH 〕 ❉──────
║│• Nurutomo
║│• Ariffb
║│• BochilGaming
║│• AlyaaXzy
║│• BOTCAHX
║│• RFK Team
║│• Mursid S
║│• Syahrul
║│• Rozi/Zifabot
║│• Rasel Comel
║│• Hardianto
║│• Fatur
║│• Vania
║│• Fauzan
║│• Arya
║│• All Creator Bot
  •BASE NURUTOMO•
═════════════
`.trim(), watermark, '© SATTbotss', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh
