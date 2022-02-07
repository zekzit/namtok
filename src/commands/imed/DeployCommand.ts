import i18n from "../../config";
import { BaseCommand } from "../../structures/BaseCommand";
import { CommandContext } from "../../structures/CommandContext";

export class DeployCommand extends BaseCommand {
    public constructor(client: BaseCommand["client"]) {
        super(client, {
            aliases: ["deploy"],
            description: i18n.__("commands.imed.deploy.description"),
            name: "deploy",
            slash: {
                options: []
            },
            usage: "{prefix}deploy {branch}"
        });
    }

    public execute(ctx: CommandContext): void {
        ctx.reply(`Deployed ${ctx.args[0]} at http://192.168.9.242/imed`)
            .catch(e => this.client.logger.error("ABOUT_CMD_ERR:", e));
    }
}
