import fs from "fs";

const DISCORD_ID = process.env.DISCORD_ID;

const d = await api('POST', '/api/auth/send-code', { discordId: DISCORD_ID });
fs.writeFileSync("data/log.txt", JSON.stringify(d) + "\n")
