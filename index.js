const Discord = require("discord.js");
const { ActivityType } = require("discord.js");
const client = new Discord.Client();
//const client = new Discord.Client({ intents: [ "Guilds", "GuildsMembers", "MessageContent", "GuildMessages"] })
const config = require("./config.json")

// Yes I want the console to tell what is going on.
client.once('ready', () => {
    console.log('Ready!');
})

client.on('message', message => {
    // Avoids parsing it's own messages.
    //if (message.author.id === client.user.id) return;
    console.log(message.content);
})

    //Show the bot status
client.on('ready', () => {
    console.log(`Estou online em ${client.user.username}`)

    client.user.setActivity({
        name: 'tutorial youtube'
        //type: ActivityType.Listening -> doesn't work
    });
});

client.login(config.token)


