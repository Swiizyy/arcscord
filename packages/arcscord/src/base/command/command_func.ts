import type { CommandProps, FullCommandDefinition, SubCommandDefinition } from "#/base";
import type { CommandMiddleware } from "#/base/command/command_middleware";

export function createCommand<
  Definer extends FullCommandDefinition | SubCommandDefinition,
  Middlewares extends CommandMiddleware[] = [],
>(
  options: CommandProps<Definer, Middlewares>,
): CommandProps<Definer, Middlewares> {
  return options;
}
