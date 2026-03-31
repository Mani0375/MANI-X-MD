const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0R3Nk95NjZVdzZIYkpTWU0zL0xEcHd2Vm11M3h0VHl0RWFEMCtNeHdHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicy9zclY1aWpUakxvMU41VDZibVkwK3dXRmY5WUtNZVVoZEp1NTJ3UGZrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ1lIYTlTdDVxajRxWFlWTnRuQ1RqTFZZK05NRlM0YzdNVklQYTN4YVVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDYlp2WTNRclpmMjVhU0ZUeVRVcjR0YzJSbmFDL296YUV1Z0xJdHplTVZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPVmV0SmRRenI3T291Ny9SblpYMUMxd1IyK3JiSG5rYmNxT3NleEs5WHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtkL2pOVDZRK2RHdkQvaFViWjZUUnFvN05aT1IxeHNZYVprUWRtckRXZ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZOdTVtZ3lDMWpSYVpHZ1ZNY0wzRlZlRDBRZGtlblV4eGQ5Tkt0TkcyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXpMWXVXQnJiWmZFVkwzV0t6UXhKdmE1TE0yay9xVUg3ejJyUXpUb3dUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQvRk5Pb1J4T0NMTDlxeE1nNUY0L25OVnlSTVBpbDE5eDNqbkhJYW5ZbFlSUThmUlhwR2R3TUxqY2pLS3J0ZU1xaXlVMGFPeDdvREJvcUxRN1dSaEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6ImdRRkhkMS9aQXltcys1Z0U1a3RESnZZUnBPUWI1ZFh3WXRMVi9nWGJIcjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDU4MTkwMjM0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTU1N0Y3QTREMjNDM0Y4OUFBMkNBOTE0RTE4NjMzNiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc0MTkxMDY3fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjhXV0RETTFDIiwibWUiOnsiaWQiOiI5MjMwNTgxOTAyMzQ6NTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQkxBQ0stV09STEQiLCJsaWQiOiIxMDQ2NDMxODcyMzI4MDI6NTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOVEVxVDRRejRPQXpnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3dFBCWk5DWE45b0hUQnlnQjh0ZHRCdXovNjVmVmJlV2xQVldlenJnZWkwPSIsImFjY291bnRTaWduYXR1cmUiOiJ5QTVyS2RHdVNPNnMyUU5uZVo0bWZaeGthTVkyQ21TZTRxUzVpZmsxYjRQUjU3OVpnU043N2pQdTRCZm1mY2tFRWJaQ3lpOXRBVEJJOUJzLzZYZ3hBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRnhzdDhXeHVHaVpDRmdYSWVBTUxYemxsd0ZvZXc3cjVjWTF4VldrLy9Yc3ArMldDSE5iUkF1YVFxb01mYjBaS25veU5GQldHTmk1RFR3S2ttV2ZiQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMDQ2NDMxODcyMzI4MDI6NTBAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNMVHdXVFFsemZhQjB3Y29BZkxYYlFicy8rdVgxVzNscFQxVm5zNjRIb3QifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZ2dOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3NDE5MTA2MSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLNHUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝑩𝑳𝑨𝑪𝑲𝑾𝑶𝑹𝑳𝑫-𝑴𝑫*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/wfzwlu.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝑩𝑳𝑨𝑪𝑲𝑾𝑶𝑹𝑳𝑫-𝑴𝑫",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𝑩𝑳𝑨𝑪𝑲𝑾𝑶𝑹𝑳𝑫-𝑴𝑫",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923058190234",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝑩𝑳𝑨𝑪𝑲𝑾𝑶𝑹𝑳𝑫-𝑴𝑫",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑩𝑳𝑨𝑪𝑲𝑾𝑶𝑹𝑳𝑫-𝑴𝑫*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3dkswi.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive 𝑩𝑳𝑨𝑪𝑲𝑾𝑶𝑹𝑳𝑫-𝑴𝑫",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923058190234",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
