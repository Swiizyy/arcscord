import type { ArcClient, CommandRunContext, CommandRunResult } from "../../src";
import { Command, SlashCmdBuilder } from "../../src";
import type { FullCommandDefinition } from "../../src/base/command/command_definition.type";

const definer = {
  slash: {
    name: "test",
    description: "test command",
    options: {
      name: {
        type: "string",
        description: "name",
        required: true,
      },
    },
  },
} satisfies FullCommandDefinition;


export class TestCommand extends Command<typeof definer> {

  name = "test";

  slashBuilder = new SlashCmdBuilder()
    .setName("test")
    .setDescription("ouioui")
    .setDefaultMemberPermissions(6)
    .addSubcommandGroup((subcommandGroup) => subcommandGroup
      .setName("test1")
      .setDescription("ouioui")
      .addSubcommand((subCommand) => subCommand
        .setName("test2")
        .setDescription("test"))) as SlashCmdBuilder;


  constructor(client: ArcClient) {
    super(client, definer);
  }

  run(ctx: CommandRunContext<typeof definer>): Promise<CommandRunResult> {
    ctx.options.name.split("");
    return ctx.ok(true);
  }

}