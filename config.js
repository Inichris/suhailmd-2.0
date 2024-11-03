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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_44_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDkwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA4OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDgyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIT1R4Vm8xakptQjE0ODlEeGsvOWVSM1NRK0pwbmwxTmNNcEJnUTUvTElFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3N1IxZGZiU1NlV3ZsNkZ3VXZDNGdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlhN2E5NWY3LThjMjYtNDQ5NC05YWQzLTc3NDc2OWQwOGU5Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDExOSxcbiAgICAgIDEyNCxcbiAgICAgIDEwOCxcbiAgICAgIDIxOSxcbiAgICAgIDIzMSxcbiAgICAgIDE2OSxcbiAgICAgIDE3MyxcbiAgICAgIDM1LFxuICAgICAgNCxcbiAgICAgIDIyMSxcbiAgICAgIDI1LFxuICAgICAgMTY3LFxuICAgICAgMTUwLFxuICAgICAgODYsXG4gICAgICAxNDQsXG4gICAgICAxODgsXG4gICAgICAxNTYsXG4gICAgICA5NyxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICA1NCxcbiAgICAgIDE1MixcbiAgICAgIDE1LFxuICAgICAgNjMsXG4gICAgICAyNDcsXG4gICAgICAxMTAsXG4gICAgICA1NyxcbiAgICAgIDE2NCxcbiAgICAgIDg0LFxuICAgICAgNzcsXG4gICAgICAxMjMsXG4gICAgICA1MixcbiAgICAgIDEzMixcbiAgICAgIDIzLFxuICAgICAgMjMxLFxuICAgICAgMTUzLFxuICAgICAgMjMyLFxuICAgICAgMTgsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTE2NlhRTEhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjE4MDkyODI6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUaGVzdXByZW1ldmliZXpcIixcbiAgICBcImxpZFwiOiBcIjE0NDc2MjI0MTg0NzQzMjo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRzl5U01RcU9PYnVRWVlCU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhxWCtMcUtVb29tOFNtbkhxWWZaOFdLcnNOODVsSEQwWkcvcTBEMmtIR0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNitoeVFTK3JFRk1mSEs5MEVSaFBnUTE0UlMveG5yRVo5K1JSUVgxK2lvaG5PM3pFM0RSa0JwakNGN2ZqVzBQNkZFNkxGbjhySjdHbmptUk45VzhZQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiclJqeXRSTVpmeThJbUo3dTQ1ZHQ3UVdZbUNjN2dnSUpWaUtGQTRXbVk3L2xjNWdTbHBiUkt4K0tQSzl6MWRvVkJsdHI3MlNnVVlWamdsbVkwWGlNanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MTgwOTI4Mjo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjA1NDg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRllBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGWUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3bTM2aU81SEVVaXU2UnFtY042WkJnU3JTZlRxekFocnF6Mk9Ya1FFbGx3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc0NjA0MjU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
