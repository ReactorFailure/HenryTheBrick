const { getGeminiModel } = require("../utils/gemini.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.mentions.has(message.client.user)) {
            const question = message.content
                .replace(`<@${message.client.user.id}>`, "")
                .replace(`<@!${message.client.user.id}>`, "")
                .trim();

            if (!question) {
                await message.reply("# Hey dingus, you mentioned me but didn't ask a question smfh");
                return;
            }

            try {
                const model = getGeminiModel();
                const result = await model.generateContent(question);
                const response = result.response.text();

                await message.reply(response);
            } catch (error) {
                console.error(error);
                await message.reply("❌ Looks like Henry shat itself");
            }
        }
    }
};