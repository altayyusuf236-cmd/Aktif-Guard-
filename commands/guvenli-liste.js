const Discord = require("discord.js");
const db = require("croxydb");

module.exports = {
    name: "güvenli-liste",
    description: "Güvenli listeyi görüntüle!",
    type: 1,
    run: async (client, interaction) => {
        const yetki = new Discord.EmbedBuilder()
            .setColor("Red")
            .setTitle("Yetersiz Yetki!")
            .setDescription("> Bu komutu kullanabilmek için `Bot Sahibi` olmalısın!");

        if ("1536458423833600007" !== interaction.user.id) {
            return interaction.reply({ embeds: [yetki], ephemeral: true });
        }

        const güvenliRoller = db.get(`güvenli_roller_${interaction.guild.id}`) || [];
        const güvenliKullanıcılar = db.get(`güvenli_kullanıcılar_${interaction.guild.id}`) || [];

        const rollerListesi = güvenliRoller.map(rolId => `<@&${rolId}>`).join(", ") || "Yok";
        const kullanıcılarListesi = güvenliKullanıcılar.map(kullanıcıId => `<@${kullanıcıId}>`).join(", ") || "Yok";

        const listeEmbed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setTitle("Güvenli Liste")
            .addFields(
                { name: "Güvenli Roller", value: rollerListesi },
                { name: "Güvenli Kullanıcılar", value: kullanıcılarListesi }
            );

        interaction.reply({ embeds: [listeEmbed] });
    }
}
