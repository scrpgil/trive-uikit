import { Component, Host, Prop, h } from "@stencil/core";
@Component({
  tag: "td-form",
  styleUrl: "td-form.scss",
  shadow: true
})
export class Form {
  @Prop() color: string = "main";
  @Prop() size: string = "";
  @Prop() fill: string = "";
  @Prop({ reflectToAttr: true }) disabled = false;

  setColor() {
    if (this.fill == "outline") {
      return {
        backgroundColor: `transparent`,
        color: `var(--td-color-${this.color})`,
        border: `1px solid var(--td-color-${this.color})`
      };
    } else if (this.fill == "clear") {
      return {
        backgroundColor: `transparent`,
        color: `var(--td-color-${this.color})`,
        border: `none`
      };
    } else {
      return {
        backgroundColor: `var(--td-color-${this.color})`,
        color: `var(--td-color-${this.color}-contrast)`
      };
    }
  }

  render() {
    return (
      <Host>
        <button
          class={`${this.disabled ? "button-disabled" : ""} ${this.size} ${
            this.color
          }`}
          style={this.setColor()}
          disabled={this.disabled}
        >
          <slot />
        </button>
      </Host>
    );
  }
}
