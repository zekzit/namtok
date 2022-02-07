import i18n from "../../config";
import { BaseCommand } from "../../structures/BaseCommand";
import { CommandContext } from "../../structures/CommandContext";
import { createEmbed } from "../../utils/createEmbed";
import Parser from "rss-parser";

const leaveRssUrl = "https://leaves.intermedisoft.com/rss";
const parser = new Parser();

export class DailyLeaveCommand extends BaseCommand {
    public constructor(client: BaseCommand["client"]) {
        super(client, {
            aliases: ["absences"],
            description: i18n.__("commands.leaves.absences.description"),
            name: "absences",
            slash: {
                options: []
            },
            usage: "{prefix}absences"
        });
    }

    public execute(ctx: CommandContext): void {
        parser.parseURL(leaveRssUrl).then(feed => {
            const latestFeed = feed.items[0];
            console.log(JSON.stringify(latestFeed));
            ctx.reply({
                embeds: [
                    createEmbed("info", i18n.__mf("commands.leaves.absences.replyAbsences", { message: latestFeed.content }))
                ]
            }).catch(e => this.client.logger.error("ABOUT_CMD_ERR:", e));
        }).catch(e => this.client.logger.error("ABOUT_CMD_ERR:", e));
    }
}
