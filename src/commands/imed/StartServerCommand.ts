import i18n from "../../config";
import { BaseCommand } from "../../structures/BaseCommand";
import { CommandContext } from "../../structures/CommandContext";

export class StartServerCommand extends BaseCommand {
    public constructor(client: BaseCommand["client"]) {
        super(client, {
            aliases: ["imed.start"],
            description: i18n.__("commands.imed.start.description"),
            name: "imed.start",
            slash: {
                options: []
            },
            usage: "{prefix}imed.start {server_ip}"
        });
    }

    public execute(ctx: CommandContext): void {
        ctx.reply(`[DUMMY] Server on ${ctx.args[0]} has been started.`)
            .catch(e => this.client.logger.error("ABOUT_CMD_ERR:", e));
    }
}
