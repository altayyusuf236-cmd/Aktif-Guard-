const Discord = require("discord.js");
const db = require("croxydb");

module.exports = {
    name: "guard-kapat",
    description: "Guard sistemini kapatır!",
    type: 1,
    run: async (client, interaction) => {
        const yetki = new Discord.EmbedBuilder()
            .setColor("Red")
            .setTitle("Yetersiz Yetki!")
            .setDescription("> Bu komutu kullanabilmek için `Bot Sahibi` olmalısın!");

        if ("1536458423833600007" !== interaction.user.id) {
            return interaction.reply({ embeds: [yetki], ephemeral: true });
        }

        db.delete(`guard_${interaction.guild.id}`);

        const basarili = new Discord.EmbedBuilder()
            .setColor("Green")
            .setTitle("Guard Sistemi Kapandı!")
            .setDescription("Guard sistemi başarıyla kapatıldı!");

        interaction.reply({ embeds: [basarili] });
    }
}
