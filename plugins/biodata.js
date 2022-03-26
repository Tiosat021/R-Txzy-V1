let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ───❉
║│• *Nama* : SATRIYO
║│• *Umur* : 19
║│• *Kelas* :  16/KULIAH
║│• *Status* : LUPAKAN MASSA LALU FOKUSKAN MASA DEPAN☺️
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ───❉
║│• *Nomer Owner* : https://wa.me/qr/RNLUQYEWAHTGC1
║│• *Nomee Bot* : https://wa.me/qr/RDRVXJR5FRSLF1
║│• *Chanel Youtube* : Tayo06 WOE 
║│• *Gmail* : Satriyosawal@gmail.com017
║╰────────────────
╰═════════════════
_Jangan lupa donasi ya kak >_<_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Raditya')).buffer(), ext, 'zifabotz', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
