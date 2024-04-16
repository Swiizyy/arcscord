import { BaseManager } from "#/base/manager/manager.class";
import { ButtonComponent } from "#/base/message_component/button/button.class";
import { ModalSubmitComponent } from "#/base/message_component/modal_submit/modal_submit.class";
import type { AnySelectMenu } from "#/base/message_component/select_menu/select_menu.type";
import type { Component } from "#/base/message_component/base/base_component.type";
import { SelectMenu } from "#/base/message_component/select_menu/select_menu.class";

export class ComponentManager extends BaseManager {

  name = "components";

  buttons: Map<string, ButtonComponent> = new Map();

  selectMenus: Map<string, AnySelectMenu> = new Map();

  modalSubmit: Map<string, ModalSubmitComponent> = new Map();

  loadComponent(component: Component): void {
    if (component.type === "button" && component instanceof ButtonComponent) {
      return this.loadButton(component);
    }

    if (component.type === "modalSubmit" && component instanceof ModalSubmitComponent) {
      return this.loadModalSubmit(component);
    }

    if (component.type === "selectMenu" && component instanceof SelectMenu) {
      return this.loadSelectMenu(component);
    }
  }

  loadButton(component: ButtonComponent): void {
    if (this.buttons.has(component.name)) {
      return this.logger.warning(`Button component ${component.name} already exists/registered`);
    }

    this.logger.trace(`loaded button component ${component.name}`);
    this.buttons.set(component.name, component);
  }

  loadModalSubmit(component: ModalSubmitComponent): void {
    if (this.modalSubmit.has(component.name)) {
      return this.logger.warning(`Modal submit component ${component.name} already exists/registered`);
    }

    this.logger.trace(`loaded modal submit component ${component.name}`);
    this.modalSubmit.set(component.name, component);
  }

  loadSelectMenu(component: AnySelectMenu): void {
    if (this.selectMenus.has(component.name)) {
      return this.logger.warning(`Select menu component ${component.name} already exists/registered`);
    }

    this.logger.trace(`loaded select menu component ${component.name}`);
    this.selectMenus.set(component.name, component);
  }

}