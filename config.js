const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_58_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDc0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDksXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTYyLFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1LFxuICAgICAgICA2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk1LFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI3LFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkc2UlNLblYzaEFBWlF1NVNnbDNmdmd3OExibFMvQTVEVDZhbllPR2cweDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2MTgwOTI4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDg3QjJEQTk5MDI3MUQ0QkE1MjUzQkY3RjM0RjQwNjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyODUyNjg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJEc0NzU0RlUi1DRElnQlc2ajdLdHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjBmYTUzZWEtYjU1OC00ZmYyLTkwYWYtYmE0OGQxMzYxM2Y1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDI2LFxuICAgICAgMjIwLFxuICAgICAgMjM5LFxuICAgICAgMjE3LFxuICAgICAgMjIsXG4gICAgICAxNDIsXG4gICAgICA2OSxcbiAgICAgIDE2MCxcbiAgICAgIDE2OSxcbiAgICAgIDE5NixcbiAgICAgIDIyNyxcbiAgICAgIDE5NixcbiAgICAgIDIxNixcbiAgICAgIDg4LFxuICAgICAgNDUsXG4gICAgICAyMTYsXG4gICAgICA2NCxcbiAgICAgIDE4NixcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDMyLFxuICAgICAgMjA4LFxuICAgICAgMTc2LFxuICAgICAgMTM0LFxuICAgICAgMjI5LFxuICAgICAgMjM1LFxuICAgICAgMTczLFxuICAgICAgMTM1LFxuICAgICAgMTQ1LFxuICAgICAgMjEwLFxuICAgICAgMTM5LFxuICAgICAgMTY4LFxuICAgICAgMTgzLFxuICAgICAgNjQsXG4gICAgICA1NSxcbiAgICAgIDIxNCxcbiAgICAgIDIzMCxcbiAgICAgIDM0LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4Q0VDQzQ3NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MTgwOTI4Mjo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRoZXN1cHJlbWV2aWJlelwiLFxuICAgIFwibGlkXCI6IFwiMTQ0NzYyMjQxODQ3NDMyOjYzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XOXlTTVF3dmVrdWdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieHFYK0xxS1Vvb204U21uSHFZZlo4V0tyc044NWxIRDBaRy9xMEQya0hHST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxcmw3OThlREV4b1ZCVXB4c2xjK1I3WnduVmZaNUhxdDZiSlV1SFB3VFordjdGeVAzT1h6UWFVeGVxUjFTeU4wanZieUdOLytjU1BvR2NVZ3JmS2VDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBcTBSU0lpSjFIYVd6VTNSMUlySEhUQjNWNXAybCtqZmx1WFQxZEZaaGdkVThzMWs5bHNFTUVqYnVrOFl2UHhPMkNqY2NjM2tpTHNsUko2N2t3TUdEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYxODA5MjgyOjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI4NTI2Nzdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
