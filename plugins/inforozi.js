let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ [ _*Info Owner*_ ] ───❉
║│• Nama : Satt
║│• Umur : 19 Tahun
║│• Asal : Jakarta
║│• Grup Bot : bit.ly/grupbotsat
║│• Instagram : instagram.com/satriyosawalll?r=nametag
║│• WhatsApp : https://wa.me/qr/RDRVXJR5FRSLF1
╰────────❉
`.trim(), m)
}

handler.help = ['infosatriyo']
handler.tags = ['main', 'utama']
handler.command = /^(infoary)$/i

handler.exp = 150

module.exports = handler
