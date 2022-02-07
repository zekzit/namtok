import i18n from "../../config";
import { BaseCommand } from "../../structures/BaseCommand";
import { CommandContext } from "../../structures/CommandContext";

export class StopServerCommand extends BaseCommand {
    public constructor(client: BaseCommand["client"]) {
        super(client, {
            aliases: ["imed.stop"],
            description: i18n.__("commands.imed.stop.description"),
            name: "imed.stop",
            slash: {
                options: []
            },
            usage: "{prefix}imed.stop {server_ip}"
        });
    }

    public execute(ctx: CommandContext): void {
        ctx.reply(`Server on ${ctx.args[0]} has been started.`)
            .catch(e => this.client.logger.error("ABOUT_CMD_ERR:", e));
    }
}
