// menu fitur bot
const help = (prefix, Instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `
	

 🏅━━⊱ *RULES SIMPLE BOT* ⊰━━🏅
\`\`\`SUBSCRIBE YT OWNER🤗\`\`\`
${yt}
\`\`\`WHATSAPP OWNER😇\`\`\`
https://wa.me/6285282996146
\`\`\`GROUP PATRICK🗿\`\`\`
https://chat.whatsapp.com/Jy5fkgp4bfB7nHD965Ue3v
\`\`\`INSTAGRAM DEV\`\`\`
${instagram}
\`\`\`DAFTAR OWNER/PREMIUM?\`\`\`
\`\`\`CHAT\`\`\` https://wa.me/6285282996146
┏━━⊱ *REGULATION ${name}* ⊰━━━━┓
┣⊱  \`\`\`NAMA\`\`\` : *${pushname2}*
┣⊱  \`\`\`PREMIUM\`\`\` : Bukan🚫
┣⊱  \`\`\`LIMIT\`\`\` : *${limitt} Harian*
┣⊱  \`\`\`AKTIF:\`\`\` ${kyun(uptime)}
┣⊱  \`\`\`JAM:\`\`\` *${jam} WIB*
┣⊱  \`\`\`TANGGAL:\`\`\` *${tanggal}*
┣⊱  \`\`\`VERSION:\`\`\` *50.SUBS*
┣⊱  \`\`\`USER TERDAFTAR:\`\`\` *${user.length} User*
┣⊱ *NOSPAM🚫*
┣⊱ *NO CALL & VC*🚫
┣⊱  \`\`\`Melanggar??\`\`\` *Bann*
┗━━━━━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *ABOUT ${name}* ⊰━━┓
┣⊱❥ *${prefix}report lapor bug*
┣⊱❥ *${prefix}info*
┣⊱❥ *${prefix}donasi*
┣⊱❥ *${prefix}owner*
┣⊱❥ *${prefix}speed*
┣⊱❥ *${prefix}daftar*
┣⊱❥ *${prefix}limit*
┣⊱❥ *${prefix}totaluser*
┣⊱❥ *${prefix}blocklist*
┣⊱❥ *${prefix}banlist*
┣⊱❥ *${prefix}premiumlist*
┣⊱❥ *${prefix}bahasa*
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *DOWNLOAD MENU* ⊰━━┓
┣⊱❥ *${prefix}tiktokstalk username*
┣⊱❥ *${prefix}igstalk <namaig>*
┣⊱❥ *${prefix}instavid link valid*
┣⊱❥ *${prefix}instaimg link valid*
┣⊱❥ *${prefix}instastory username*
┣⊱❥ *${prefix}ssweb url*
┣⊱❥ *${prefix}url2img Url*
┣⊱❥ *${prefix}tiktok*
┣⊱❥ *${prefix}fototiktok*
┣⊱❥ *${prefix}kbbi*
┣⊱❥ *${prefix}wait*
┣⊱❥ *${prefix}trendtwit*
┣⊱❥ *${prefix}google berita terkini*
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *CREATOR MENU* ⊰━━┓
┣⊱❥ *${prefix}quotemaker*
┣⊱❥ *${prefix}nulis nama/kels/tex*
┣⊱❥ *${prefix}croman ** dan Friend*
┣⊱❥ *${prefix}slide PATRICK BOTWA*
┣⊱❥ *${prefix}tp 1 - 162*
┣⊱❥ *${prefix}ep 1 - 216*
┣⊱❥ *${prefix}tahta <text>*
┣⊱❥ *${prefix}cglass <text>*
┣⊱❥ *${prefix}cstyle <text>*
┣⊱❥ *${prefix}cgame <text>*
┣⊱❥ *${prefix}clove <text>*
┣⊱❥ *${prefix}cparty <text>*
┣⊱❥ *${prefix}csky <text>*
┣⊱❥ *${prefix}ttsid*
┣⊱❥ *${prefix}ttp <text>*
┣⊱❥ *${prefix}cpaper <text>*
┣⊱❥ *${prefix}stiker*
┣⊱❥ *${prefix}gifstiker*
┣⊱❥ *${prefix}toimg*
┣⊱❥ *${prefix}img2url*
┣⊱❥ *${prefix}tomp3*
┣⊱❥ *${prefix}ocr*
┣⊱❥ *${prefix}tahta* <teks>
┣⊱❥ *${prefix}blood* <teks>
┣⊱❥ *${prefix}blood2* <teks>
┣⊱❥ *${prefix}ice* <teks>
┣⊱❥ *${prefix}2021* <teks>
┣⊱❥ *${prefix}holographic* <teks>
┣⊱❥ *${prefix}racun* <teks>
┣⊱❥ *${prefix}metaldark* <teks>
┣⊱❥ *${prefix}serem* <teks>
┣⊱❥ *${prefix}strawberry* <teks>
┣⊱❥ *${prefix}bunga* <teks>
┣⊱❥ *${prefix}jokerlogo* <teks>
┣⊱❥ *${prefix}bokeh* <teks>
┣⊱❥ *${prefix}lawas* <teks>
┣⊱❥ *${prefix}holiday* <teks>
┣⊱❥ *${prefix}steel3d* <teks|teks>
┣⊱❥ *${prefix}prome* <teks-teks>
┣⊱❥ *${prefix}pronlogo* <teks|teks>
┣⊱❥ *${prefix}love* <teks>
┣⊱❥ *${prefix}paper* <teks>
┣⊱❥ *${prefix}slide* <teks>
┣⊱❥ *${prefix}party* <teks>
┣⊱❥ *${prefix}roman* <teks>
┣⊱❥ *${prefix}glitch* <teks|teks>
┣⊱❥ *${prefix}apiteks* <teks>
┗━━━━━━━━━━━━━━━━━━━━
┏━━⊱ *GROUP MENU* ⊰━━━━━━┓
┣⊱❥ *${prefix}modeanime On/Off*
┣⊱❥ *${prefix}neonime naruto*
┣⊱❥ *${prefix}naruto*
┣⊱❥ *${prefix}minato*
┣⊱❥ *${prefix}boruto*
┣⊱❥ *${prefix}hinata*
┣⊱❥*${prefix}sakura*
┣⊱❥ *${prefix}sasuke*
┣⊱❥ *${prefix}toukachan*
┣⊱❥ *${prefix}rize*
┣⊱❥ *${prefix}akira*
┣⊱❥ *${prefix}itori*
┣⊱❥ *${prefix}kurumi*
┣⊱❥ *${prefix}miku*
┣⊱❥ *${prefix}anime*
┣⊱❥ *${prefix}animecry*
┣⊱❥ *${prefix}animekiss*
┣⊱❥ *${prefix}antilink On/Off*
┣⊱❥ *${prefix}welcome On/Off*
┣⊱❥ *${prefix}grup buka/tutup*
┣⊱❥ *${prefix}ownergrup*
┣⊱❥ *${prefix}setpp*
┣⊱❥ *${prefix}infogc*
┣⊱❥ *${prefix}add 628xxxxxxxxxx*
┣⊱❥ *${prefix}kick @mentioned*
┣⊱❥ *${prefix}kicktime @mentioned*
┣⊱❥ *${prefix}promote @mentioned*
┣⊱❥ *${prefix}demote @mentioned*
┣⊱❥ *${prefix}setname*
┣⊱❥ *${prefix}setdesc*
┣⊱❥ *${prefix}linkgrup*
┣⊱❥ *${prefix}tagme*
┣⊱❥ *${prefix}hidetag*
┣⊱❥ *${prefix}tagall*
┣⊱❥ *${prefix}mentionall*
┣⊱❥ *${prefix}fitnah isi/balasan*
┣⊱❥ *${prefix}listadmin*
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *ADMIN GC MENU* ⊰━━┓
┣⊱❥ *${prefix}nsfw On/Off*
┣⊱❥ *${prefix}nsfwloli*
┣⊱❥ *${prefix}nsfwblowjob*
┣⊱❥ *${prefix}nsfwneko*
┣⊱❥ *${prefix}nsfwtrap*
┣⊱❥ *${prefix}hentai*
┣⊱❥ *${prefix}simih On/Off*
┣⊱❥ *${prefix}bott on/off*
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *GABUT/FUN MENU* ⊰━┓
┣⊱❥ *${prefix}anjing*
┣⊱❥ *${prefix}kucing*
┣⊱❥ *${prefix}testime*
┣⊱❥ *${prefix}hilih*
┣⊱❥ *${prefix}apakah*
┣⊱❥ *${prefix}kapankah*
┣⊱❥ *${prefix}bisakah*
┣⊱❥ *${prefix}rate*
┣⊱❥ *${prefix}watak*
┣⊱❥ *${prefix}hobby*
┣⊱❥ *${prefix}infogempa*
┣⊱❥ *${prefix}infonomor*
┣⊱❥ *${prefix}quotes*
┣⊱❥ *${prefix}truth*
┣⊱❥ *${prefix}dare*
┣⊱❥ *${prefix}katabijak*
┣⊱❥ *${prefix}fakta*
┣⊱❥ *${prefix}darkjokes*
┣⊱❥ *${prefix}bucin*
┣⊱❥ *${prefix}pantun*
┣⊱❥ *${prefix}katacinta*
┣⊱❥ *${prefix}jadwaltvnow*
┣⊱❥ *${prefix}hekerbucin*
┣⊱❥ *${prefix}katailham*
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *OTHER & FUN MENU* ⊰━━┓
┣⊱❥ *${prefix}jarak <kota/kota>*
┣⊱❥ *${prefix}translate <apakabar?>*
┣⊱❥ *${prefix}pasangan <namalu&Ciwi>*
┣⊱❥ *${prefix}gantengcek*
┣⊱❥ *${prefix}cantikcek*
┣⊱❥ *${prefix}artinama*
┣⊱❥ *${prefix}persengay*
┣⊱❥ *${prefix}pbucin*
┣⊱❥ *${prefix}bpfont*
┣⊱❥ *${prefix}textstyle*
┣⊱❥ *${prefix}jadwaltv*
┣⊱❥ *${prefix}lirik melukis senja*
┣⊱❥ *${prefix}chord Melukis senja*
┣⊱❥ *${prefix}wiki Adolf Hitler*
┣⊱❥ *${prefix}brainly pertanyaan*
┣⊱❥ *${prefix}resepmasakan rawon*
┣⊱❥ *${prefix}map <kota>*
┣⊱❥ *${prefix}film Fast and Farious*
┣⊱❥ *${prefix}pinterest gambar kucing*
┣⊱❥ *${prefix}infocuaca <kota>*
┣⊱❥ *${prefix}jamdunia <kota>*
┣⊱❥ *${prefix}mimpi Ular*
┣⊱❥ *${prefix}infoalamat jalan <kota>*
┣⊱❥ *${prefix}playstore <namaapk>*
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *GAMEE MENU* ⊰━━┓
┣⊱❥ *${prefix}readmore*
┣⊱❥ *${prefix}puisiimg*
┣⊱❥ *${prefix}asupan*
┣⊱❥ *${prefix}tebakgambar*
┣⊱❥ *${prefix}caklontong*
┣⊱❥ *${prefix}family100*
┣⊱❥ *${prefix}memeindo*
┣⊱❥ *${prefix}kalkulator 13*12*
┣⊱❥ *${prefix}moddroid lightroom*
┣⊱❥ *${prefix}happymod lightroom*
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *RANDOM MENU* ⊰━━┓
┣⊱❥ *${prefix}randomkpop*
┣⊱❥ *${prefix}cersex*
┣⊱❥ *${prefix}randombokep*
┣⊱❥ *${prefix}pornhub stepMoms*
┣⊱❥ *${prefix}xvideos japan*
┣⊱❥ *${prefix}nekopoi oni chichi*
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *MENU PLUS* ⊰━━━━━━━━┓
┣⊱❥ *${prefix}jadwalsholat <kota>*
┣⊱❥ *${prefix}quran*
┣⊱❥ *${prefix}quranlist*
┣⊱❥ *${prefix}quransurah 1*
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *FIND ME SIR* ⊰━━┓
┣⊱❥ *${prefix}becrypt string*
┣⊱❥ *${prefix}encode64 string*
┣⊱❥ *${prefix}decode64 encrypt*
┣⊱❥ *${prefix}encode32 string*
┣⊱❥ *${prefix}decode32 encrypt*
┣⊱❥ *${prefix}encbinary string*
┣⊱❥ *${prefix}decbinary encrypt*
┣⊱❥ *${prefix}encoctal string*
┣⊱❥ *${prefix}decoctal encrypt*
┣⊱❥ *${prefix}hashidentifier*
┣⊱❥ *${prefix}dorking dork*
┣⊱❥ *${prefix}pastebin teks*
┣⊱❥ *${prefix}tinyurl link*
┣⊱❥ *${prefix}bitly link*
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *OTHER MENU* ⊰━━━━━━┓
┣⊱❥ *${prefix}spamcall 08***
┣⊱❥ *${prefix}spamgmail
┗━━━━━━━━━━━━━━━━━━━━

┏━━⊱ *OWNER MENU* ⊰━━┓
┣⊱❥ *${prefix}addprem 08***
┣⊱❥ *${prefix}removeprem 08
┣⊱❥ *${prefix}setmemlimit*
┣⊱❥ *${prefix}setlimit*
┣⊱❥ *${prefix}setreply*
┣⊱❥ *${prefix}setprefix*
┣⊱❥ *${prefix}setnamebot*
┣⊱❥ *${prefix}setppbot*
┣⊱❥ *${prefix}bc*
┣⊱❥ *${prefix}bcgc*
┣⊱❥ *${prefix}ban*
┣⊱❥ *${prefix}unban*
┣⊱❥ *${prefix}block*
┣⊱❥ *${prefix}unblock*
┣⊱❥ *${prefix}clearall*
┣⊱❥ *${prefix}delete*
┣⊱❥ *${prefix}clone*
┣⊱❥ *${prefix}getses*
┣⊱❥ *${prefix}leave*
┗━━━━━━━━━━━━━━━━━━

┏━━⊱ *PREMIUM MENU* ⊰━━┓
┣⊱❥ *${prefix}playmp3 menepi*
┣⊱❥ *${prefix}fb link video*
┣⊱❥ *${prefix}snack link snack video*
┣⊱❥ *${prefix}ytmp3 link yt*
┣⊱❥ *${prefix}ytmp4 link yt*
┣⊱❥ *${prefix}joox*
┣⊱❥ *${prefix}smule Link Video*
┗━━━━━━━━━━━━━━━━━━━━

`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// info bot 
const bottt = (prefix) => {
return `
\`\`\`Untuk Sekarang Bot Hanya Bisa Digunakan Di Group Karna\`\`\` *KUOTA MAHAL*\n\n *Mohon Pengertiannya*
Sekali Lagi Maaf

Jika Bot Ini Ada Di Grup Anda Admin Grup Suruh Aktifkan Bot Dengan Cara ${prefix}bott aktif
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
╭─────「 *DONASI SEIKHLASNYA* 」
┴
│√ *PULSA: 085282996146*
│√ *OVO : 08311800241*
│
│\`\`\`DONASINOMER\`\`\`
│ *Jadi Owner Bot Saya Selamanya*
│ *Hanya Menngunakan 1nomer = 2wa*
│ *Donasi Nomer = 0 Orang😖*
│ 
┬
╰──────「 *BY ${name}* 」

Untuk Kelangsungan Hidup Bot Karna Kuota Mahal:'
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount