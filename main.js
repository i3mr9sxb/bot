import fs from "fs";

const DISCORD_ID = process.env.DISCORD_ID;

async function api(method, path, body) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(path, opts);
  return res.json();
}

const d = await api('POST', 'https://oogiri-bot-cfy1.onrender.com/api/auth/send-code', { discordId: DISCORD_ID });
fs.writeFileSync("data/log.txt", JSON.stringify(d) + "\n")
