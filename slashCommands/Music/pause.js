const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "pause",
    aliases: ["pa"],
    description: "Pauses the current song.",
    category: "music",
    queue: true,

    run: async (client, interaction) => {
        const queue = client.distube.getQueue(interaction);
        const { channel } = interaction.member.voice;
        if (!channel || interaction.member.voice.channel !== interaction.guild.me.voice.channel) return
        msg.edit({
            embeds: [new MessageEmbed()
                .setDescription("You need to be in a same/voice channel.")
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })]
        })

        if (queue.paused) {
            const embed = new MessageEmbed()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`Song has been Paused`);

            msg.edit({ embeds: [embed] });
        } else {
            queue.pause();
            const embed = new MessageEmbed()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`Song has been Paused`);

            msg.edit({ embeds: [embed] });
        }
    }
}