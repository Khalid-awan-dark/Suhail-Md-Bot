const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Far away",
  ownername:process.env.OWNER_NAME|| "It'x Haider",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_08_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc3LFxuICAgICAgICA2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICAyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEyLFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9BdzlpOEFkU1pkbnVNanB1UmdQeVNnOWFoYUw5czJWbjRMcitPOWNjMms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhLdEluRXVCU091N0lNWC1UTEFPd3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDY3ZWU5ZjEtZjMyNy00MDljLWEwNmEtNmQ0MDM2NmJiZDU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMTksXG4gICAgICAxMSxcbiAgICAgIDExNyxcbiAgICAgIDIxOCxcbiAgICAgIDEzMCxcbiAgICAgIDEzMCxcbiAgICAgIDEyMCxcbiAgICAgIDE1OCxcbiAgICAgIDE4MyxcbiAgICAgIDEzNixcbiAgICAgIDY3LFxuICAgICAgMTEsXG4gICAgICAxOTAsXG4gICAgICAxNzIsXG4gICAgICAxNzQsXG4gICAgICA1MSxcbiAgICAgIDIyOSxcbiAgICAgIDI0OCxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDc2LFxuICAgICAgODIsXG4gICAgICA3NixcbiAgICAgIDI5LFxuICAgICAgNjYsXG4gICAgICAxMzIsXG4gICAgICAxMCxcbiAgICAgIDE0NyxcbiAgICAgIDE2OCxcbiAgICAgIDMwLFxuICAgICAgMjMsXG4gICAgICA4OCxcbiAgICAgIDIzOCxcbiAgICAgIDI0MixcbiAgICAgIDMsXG4gICAgICA4MSxcbiAgICAgIDEwOSxcbiAgICAgIDEyMixcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLQUdGS0Q0UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjc5MDIxMjIwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVmFtcGlyZSBQcmluY2VcIixcbiAgICBcImxpZFwiOiBcIjIwODczNTc3OTY4NDQ0NDoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRFFtWndERUpIbXY3Z0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxFV3dlNHdlcTVnU0xxM05tTEN2d1hFS0xOODUzUGM3NE5sWHhueWpGU2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSW9Ud2wrc3NlR2I2R0ljcTNkWFp0VFRESWV6QTFCUkdsa3QvaXBmL0hoMWZZQmpWWVFRcm5xVFlUOFhxYzBUNmE1Nks4aVIwdjdJd0N1VEdUVjhoQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVDIzbURnb1dIYU5IMlBEMFZTVVdGdjN2WHFhUlYvUDBVSUFKYWk5L0JyT1IxSWl0YWNPTXdUNGYyNXZkbzNCNTBlc0tnbVYyTXd2OVRlNCtnN3d2Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjc5MDIxMjIwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTA5ODUxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBVK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFUrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUlI0U2tiZUxLR2NhRUVLMFF6bEp1S0FPaDJiYlNhdThXZVdJVGx4MlloVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjQ0NDY1NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTA5NzA2NjIxOVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
