let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════❉
║│➸「 Grup Bot 1 」
║│• https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau
║│
║│➸「 Grup Bot 2 」
║│• https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN
║│
║│➸「 Grup Bot 3 」
║│• https://chat.whatsapp.com/HcGcIB09sIvKrGytO8yfFn
║│
║│➸「 Grup Bot 4 」
║│• https://chat.whatsapp.com/I2VmKa5oZ7o7wLa4bRTxQJ
╰─────────❉
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
