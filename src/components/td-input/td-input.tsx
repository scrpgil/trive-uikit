import { Component, Prop, h } from "@stencil/core";
@Component({
  tag: "td-input",
  styleUrl: "td-input.scss",
  shadow: true
})
export class Input {
  @Prop() color: string = "";
  @Prop({ mutable: true }) value?: string | null = "";

  setColor() {
    if (this.color != "") {
      return {
        border: `1px solid var(--td-color-${this.color})`
      };
    }
  }

  render() {
    return <input style={this.setColor()} value={this.value} />;
  }
}
