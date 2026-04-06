require("dotenv").config();
const {
    Client,
    GatewayIntentBits,
    Events,
    TextDisplayBuilder,
    MessageFlags,
    SectionBuilder,
    ButtonStyle,
    AttachmentBuilder,
    MediaGalleryBuilder,
    FileBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,

} = require("discord.js");
const client = new Client(
    {
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildVoiceStates
        ]
    }
);

client.on("clientReady", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.MessageCreate, async (message) => {
    // dl = dimaloh
    if (message.content === 'dl') {

        // СТВОРЕННЯ TEXT
        // const exampleTextComponent = new TextDisplayBuilder()
        //     .setContent('## Hello my friend'

        // );

        // await message.channel.send({
        //     components: [textComponent],
        //     flags: MessageFlags.IsComponentsV2,
        // });


        // СТВОРЕННЯ SECTION З КНОПКОЮ
        // const exampleSection = new SectionBuilder()
        //     .addTextDisplayComponents(
        //         (textdisplay) => textdisplay.setContent('Hello my friend'),
        //         (textdisplay) => textdisplay.setContent('You NOT my FRIEND'),
        //         (textdisplay) => textdisplay.setContent('Nah, idk who are you')
        //     )
        //     .setButtonAccessory(
        //         (button) => button
        //             .setLabel('Read Full')
        //             .setStyle(ButtonStyle.Link)
        //             .setDisabled(true)
        //             .setURL('https://web.telegram.org/k/#@fuckimcensored')
        //     );

        // await message.channel.send({
        //     components: [exampleSection],
        //     flags: MessageFlags.IsComponentsV2,
        // });


        // СТВОРЕННЯ SECTION З ЗОБРАЖЕННЯМ
        // const file = new AttachmentBuilder('./assets/images/banner.jpg');

        // const exampleSection = new SectionBuilder()
        //     .addTextDisplayComponents(
        //         (textdisplay) => textdisplay.setContent('Hello my friend'),
        //         (textdisplay) => textdisplay.setContent('You NOT my FRIEND'),
        //         (textdisplay) => textdisplay.setContent('Nah, idk who are you')
        //     )
        //     .setThumbnailAccessory(
        //         (trumbnail) => trumbnail.setURL('attachment://banner.jpg').setSpoiler(true),
        //     );

        // await message.channel.send({
        //     components: [exampleSection],
        //     files: [file],
        //     flags: MessageFlags.IsComponentsV2,
        // })


        // СТВОРЕННЯ GALLERY
        // const file = new AttachmentBuilder('./assets/images/banner.jpg')

        // const exampleGallery = new MediaGalleryBuilder()
        //     .addItems(
        //         (mediaGalleryItem) => mediaGalleryItem
        //             .setURL('attachment://banner.jpg')
        //             .setDescription('My first img'),
        //         (mediaGalleryItem) => mediaGalleryItem
        //             .setURL('attachment://banner.jpg')
        //             .setSpoiler(true)
        //             .setDescription('My second img'),
        //     );
        
        // await message.channel.send({
        //     components: [exampleGallery],
        //     files: [file],
        //     flags: MessageFlags.IsComponentsV2,
        // })


        // СТВОРЕННЯ FILE
        // const file = new AttachmentBuilder('./assets/images/banner.jpg');

        // const exampleFile = new FileBuilder().setSpoiler(true).setURL('attachment://banner.jpg');

        // message.channel.send({
        //     components: [exampleFile],
        //     files: [file],
        //     flags: MessageFlags.IsComponentsV2,
        // });

        const exampleTextDisplay = new TextDisplayBuilder().setContent('Hello my fr');

        const exampleSeparator = new SeparatorBuilder()
            .setDivider(false)
            .setSpacing(SeparatorSpacingSize.Large

        );

        await message.channel.send({
            components: [exampleTextDisplay, exampleSeparator, exampleTextDisplay],
            flags: MessageFlags.IsComponentsV2,
        });
    }
});


client.login(process.env.TOKEN);

