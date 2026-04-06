require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: "ping",
        description: "Створити ембед",
    },
];

// 1. Створюємо нашого "кур'єра" з перепусткою (твій рядок)
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// 2. Відправляємо дані
(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID,
            ),
            { body: commands }
        );

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
})();