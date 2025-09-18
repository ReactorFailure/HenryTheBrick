const {SlashCommandBuilder, InteractionContextType} = require("discord.js");
const { getGeminiModel } = require("../../utils/gemini.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ask")
        .setDescription("ask brick")
        .setContexts([
            InteractionContextType.BotDM,
            InteractionContextType.Guild,
            InteractionContextType.PrivateChannel
        ])
        
        .addStringOption(option =>
            option.setName("question")
                .setDescription("What do you want to ask?")
                .setRequired(true)
        ),
    
    async execute(interaction) {
        await interaction.deferReply();
        const option = interaction.options.getString("question");
        
        try {
            const result = await getGeminiModel().generateContent(option);
            const response = result.response.text();
            
            await interaction.editReply(response);
            
        } catch(e) {
            console.error(e);
            await interaction.editReply("❌ Looks like Henry shat itself");
        }
    }
};