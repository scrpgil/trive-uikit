import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "td-badge",
  styleUrl: "td-badge.scss",
  shadow: true
})
export class Badge {
  @Prop() color: string;

  setColor() {
    return {
      backgroundColor: `var(--td-color-${this.color})`,
      color: `var(--td-color-${this.color}-contrast)`
    };
  }

  render() {
    return (
      <span style={this.setColor()}>
        <slot />
      </span>
    );
  }
}
