import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Mintz\nNICKNAME:👑 Owner MintzBotz\nORG:Mintz\nTITLE:soft\nitem1.TEL;waid=6281575491917:+62 815-7549-1917\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://chat.whatsapp.com/JytIVwVnOCIFQBA93eZEXu\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: Gaada 🗿\nitem3.X-ABLabel:💌 Mail Owner NexBotz\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 2009\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
