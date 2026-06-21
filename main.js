import fs from "fs";

const DISCORD_ID = process.env.DISCORD_ID;

async function api(method, path, body) {
  const opts = { 
    method, 
    headers: { 
      'Content-Type': 'application/json',
      "Referer": "https://oogiri-bot-cfy1.onrender.com/",
      "Origin": "https://oogiri-bot-cfy1.onrender.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0",
    }
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(path, opts);
  console.log("Status" + res.status)
  return res.json();
}

const d = await api('POST', 'https://oogiri-bot-cfy1.onrender.com/api/auth/send-code', { discordId: DISCORD_ID });
fs.writeFileSync("data/log.txt", JSON.stringify(d) + "\n")
