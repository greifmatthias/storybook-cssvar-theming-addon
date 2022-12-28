import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { LitElement } from "lit";

import { style } from "./Button.styles";

/**
 * @summary Buttons represent actions that are available to the user.
 *
 * @event onClick - Emitted when the button is clicked.
 * @event onFocus - Emitted when the button gains focus.
 * @event onBlur - Emitted when the button loses focus.
 *
 * @since 0.0.1
 * @status stable
 *
 * @slot - The button's label.
 *
 * @csspart base - The component's base wrapper.
 * @csspart text - The button's label.
 */
@customElement("vrti-button")
export class Button extends LitElement {
  /** The button's size. */
  @property() size = "md";
  /** The button's theme variant. */
  @property() variant = "primary";

  static get styles() {
    return [style];
  }

  onClicked = () => {
    this.dispatchEvent(new CustomEvent("onClick"));
  };

  onFocus = () => {
    this.dispatchEvent(new CustomEvent("onFocus"));
  };

  onBlur = () => {
    this.dispatchEvent(new CustomEvent("onBlur"));
  };

  render() {
    const classes = {
      root: true,
      [`size-${this.size}`]: true,
      [`variant-${this.variant}`]: true,
    };

    const textClasses = {
      text: true,
      [`size-${this.size}`]: true,
    };

    return html`<button
      part="base"
      class=${classMap(classes)}
      @blur=${this.onBlur}
      @focus=${this.onFocus}
      @click=${this.onClicked}
    >
      <vrti-text part="text" class=${classMap(textClasses)}>
        <slot></slot>
      </vrti-text>
    </button>`;
  }
}
