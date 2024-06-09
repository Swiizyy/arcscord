import { InteractionBase } from "#/base/interaction/interaction.class";
import type { ComponentBuilderField, ComponentType } from "#/base/message_component/base/base_component.type";

export abstract class BaseComponent extends InteractionBase {

  isEnableInDev = true;

  abstract customId: string;

  abstract type: ComponentType;

  /*
   Only here for type check, make builder accessible without the class
   */
  abstract builder: ComponentBuilderField;

}