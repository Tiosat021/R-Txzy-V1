let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 𝐋𝐈𝐒𝐓 𝐁𝐄𝐑𝐋𝐀𝐍𝐆𝐆𝐀𝐍𝐀𝐍 〕 ════
├⬡ 2 Minggu
├⬡ 3 Minggu
├⬡ 1 Bulan
├⬡ 2 Bulan
├⬡ 4 Bulan
├⬡ 5 Bulan
├⬡ 6 Bulan
├⬡ 11 Bulan
├⬡ 12 Bulan
└═══════════════
𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 〕 ❉──────
║│➸ *Dana* : 0895622816517
║│➸ *Gopay*: 085762224918
║│➸ *Pulsa*: 085762224918/0895622816517
║╰─────────
╰═══════════════════════
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '2 Minggu', description: "Rp5.000\nSewa bot/premium.", rowId:".owner"},
        {title: '3 Minggu', description: "Rp8.000\nSewa premium+undangbot.", rowId:".owner"},
        {title: '1 bulan', description: "Rp15.000\nSewa(premium) bot+undang bot.", rowId:".owner"},
        {title: '2 Bulan', description: "Rp25.000\n(Premium+undangbot).", rowId:".owner"},
        {title: '4 Bulan', description: "Rp35.000\n(Premium+undangbot).", rowId:".owner"},
        {title: '5 bulan', description: "Rp45.000\n(Premium+undangbot).", rowId:".owner"},
        {title: '6 Bulan', description: "Rp55.000\n(Premium+undangbot).", rowId:".owner"},
        {title: '11 Bulan', description: "Rp85.000\n(Premium+undangbot).", rowId:".owner"},
        {title: '12 bulan', description: "Rp100.000\n1tahun : 1000.00(premium+unbot).", rowId:".owner"},
        {title: 'Owner', description: "Chat owner nya jika ingin sewa bot.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
