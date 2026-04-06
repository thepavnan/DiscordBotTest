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
    UserSelectMenuBuilder,
    ContainerBuilder,
    SelectMenuBuilder,
    User,

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


        // СТВОРЕННЯ SEPARATOR
        // const exampleTextDisplay = new TextDisplayBuilder().setContent('Hello my fr');

        // const exampleSeparator = new SeparatorBuilder()
        //     .setDivider(true)
        //     .setSpacing(SeparatorSpacingSize.Large);

        // await message.channel.send({
        //     components: [exampleTextDisplay, exampleSeparator, exampleTextDisplay],
        //     flags: MessageFlags.IsComponentsV2,
        // });


        // СТВОРЕННЯ CONTAINER
        // const exampleContainer = new ContainerBuilder()
        //     .setAccentColor(0x0099ff)
        //     .addTextDisplayComponents((textDisplay) => 
        //         textDisplay.setContent(
        //             'Hello my friend'
        //         ),
        //     )
        //     .addActionRowComponents((actionRow) => 
        //         actionRow.setComponents(
        //             new UserSelectMenuBuilder().setCustomId('exampleSelect').setPlaceholder('Select users')
        //         ),
        //     )
        //     .addSeparatorComponents((separator) => separator)
        //     .addSectionComponents((section) =>
        //         section
        //             .addTextDisplayComponents(
        //                 (textDisplay) =>
        //                     textDisplay.setContent(
        //                         'This text is inside a Text Display component! You can use **any __markdown__** available inside this component too.',
        //                     ),
        //                 (textDisplay) => textDisplay.setContent('And you can place one button or one thumbnail component next to it!'),
        //             )
        //             .setButtonAccessory((button) =>
        //                 button.setCustomId('exampleButton').setLabel('Button inside a Section').setStyle(ButtonStyle.Primary),
        //             ),
        //     );

        // await message.channel.send({
        //     components: [exampleContainer],
        //     flags: MessageFlags.IsComponentsV2,
        // });

    }
});


client.login(process.env.TOKEN);

