const Discord = require("discord.js");
const db = require("croxydb");

module.exports = {
    name: "guard-aç",
    description: "Guard sistemini açar!",
    type: 1,
    run: async (client, interaction) => {
        const yetki = new Discord.EmbedBuilder()
            .setColor("Red")
            .setTitle("Yetersiz Yetki!")
            .setDescription("> Bu komutu kullanabilmek için `Bot Sahibi` olmalısın!");

        if ("1536458423833600007" !== interaction.user.id) {
            return interaction.reply({ embeds: [yetki], ephemeral: true });
        }

        db.set(`guard_${interaction.guild.id}`, true);

        const basarili = new Discord.EmbedBuilder()
            .setColor("Green")
            .setTitle("Guard Sistemi Açıldı!")
            .setDescription("Guard sistemi başarıyla açıldı!");

        interaction.reply({ embeds: [basarili] });
    }
}
