const dotenv = require('dotenv');
const {Client, Events, GatewayIntentBits, Guild, User, Collection, REST, Routes} = require('discord.js');

//nodes native file system moduel used to read commoands
const fs = require('node:fs');
//path uiltiy moduel to constust path to access files and directories
const path = require('node:path');
dotenv.config();
//used to get a instance of the client
const client = new Client({intents: [GatewayIntentBits.Guilds]});
client.commands = new Collection();
//connects the directory to the commands folder directory
const commandsPath = path.join(__dirname, 'commands');
//this will join the commands path with anything ending in js as an array the filter prevents anything not javascript
const CommandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('js'));
client.once(Events.ClientReady, c => {
    console.log(`logged in as ${c.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN)




/*
//this only works for files if there are sub folders you have to make another outter loop that will contain the folders same way we did the files
for(const file of CommandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    //checks for the string data and execute in the command file
    if('data' in command && 'execute' in command) {
        client.command.set(command.data.name,command);
    } else {
        console.log('missing file path');
    }
}


//below is the listener for the commands

client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;
    console.log(interaction);

    const command = interaction.client.command.get(interaction.commandName);
    if(!command) {
        console.error(`nothing found ${interaction.commandName} with that name`)
        return;
    }
    try {
        await command.execute(interaction);
    } catch(e) {
        console.error(e)
    }


});
*/
