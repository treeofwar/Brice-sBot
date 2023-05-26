const {SlashCommandBuilder} = require('discord.js')
// this is how you export data kinda how react does it as well with components 
module.exports = {
    //gives the required name and such for discord to read the data
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('comes back with pong'),
        //setse the interaction and awaits a response from discord
    async execute(interaction) {
        await interaction.replay('pong!')
    },
};