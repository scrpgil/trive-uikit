import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "td-button",
  styleUrl: "td-button.scss",
  shadow: true
})
export class Button {
  @Prop() color: string;
 
  setColor() {
    return {
      backgroundColor: `var(--td-color-${this.color})`,
      color: `var(--td-color-${this.color}-contrast)`
    };
  }

  render() {
    return (
      <Host>
        <button style={this.setColor()}>
          <slot />
        </button>
      </Host>
    );
  }
}
