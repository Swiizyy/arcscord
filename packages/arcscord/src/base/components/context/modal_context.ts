import type { ArcClient } from "#/base";
import type { DmContextDocs, GuildContextDocs } from "#/base/utils";
import type { Guild, GuildBasedChannel, GuildMember, ModalSubmitInteraction } from "discord.js";
import { ComponentContext, type GuildComponentContextOptions } from "#/base/components/context/base_context";

/**
 * `DmModalContext` is a class representing the context of a modal interaction within a direct message (DM).
 */
export class DmModalContext extends ComponentContext implements DmContextDocs {
  guildId = null;

  guild = null;

  channelId = null;

  channel = null;

  member = null;

  readonly inGuild = false;

  readonly inDM = true;

  interaction: ModalSubmitInteraction;

  /**
   * Map of field custom IDs to their values.
   */
  values: Map<string, string>;

  /**
   * Constructs a DM modal context.
   * @param client - The ArcClient instance.
   * @param interaction - The modal submit interaction.
   */
  constructor(client: ArcClient, interaction: ModalSubmitInteraction) {
    super(client, interaction);

    this.interaction = interaction;

    this.values = new Map<string, string>(
      interaction.fields.fields.map(field => [field.customId, field.value]),
    );
  }
}

/**
 * Represents the context for a guild modal interaction.
 */
export class GuildModalContext extends ComponentContext implements GuildContextDocs {
  guildId: string;

  guild: Guild;

  channelId: string;

  channel: GuildBasedChannel;

  member: GuildMember;

  readonly inGuild = true;

  readonly inDM = false;

  interaction: ModalSubmitInteraction;

  /**
   * Map of field custom IDs to their values.
   */
  values: Map<string, string>;

  /**
   * Constructs a guild modal context.
   * @param client - The ArcClient instance.
   * @param interaction - The modal submit interaction.
   * @param options - The guild component context options.
   */
  constructor(
    client: ArcClient,
    interaction: ModalSubmitInteraction,
    options: GuildComponentContextOptions,
  ) {
    super(client, interaction);

    this.guildId = options.guild.id;
    this.guild = options.guild;
    this.channelId = options.channel.id;
    this.channel = options.channel;
    this.member = options.member;

    this.interaction = interaction;

    this.values = new Map<string, string>(
      interaction.fields.fields.map(field => [field.customId, field.value]),
    );
  }
}

/**
 * Type alias representing either a DM or guild modal context.
 */
export type ModalContext = DmModalContext | GuildModalContext;
