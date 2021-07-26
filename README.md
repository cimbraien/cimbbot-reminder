# How to setup for development:

## Create a discord bot

1. Go to discord [developer portal](https://discord.com/developers).
2. Click new application on top right of the page.
3. Go to Bot tab and create a new bot.
4. Reveal the secret token and save it for later.
5. Open OAuth2 tab and choose bot for scopes & choose permissions needed.
6. Open the link generated and invite the bot to your development server.

---

## Start the development bot

1. Clone this repo.
2. Install the necessary modules
   ```bash
   npm install
   ```
3. Paste the bot's secret token into .env, don't forget to rename the example file.
4. Run the bot
   ```bash
   npm start
   ```
