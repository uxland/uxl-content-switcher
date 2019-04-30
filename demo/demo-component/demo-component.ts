import { html, LitElement, property, customElement } from "lit-element/lit-element";
import * as styles from "./styles.scss";
import { template } from "./template";
/**
 * `uxl-tile-view`
 * A tile view component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
@customElement("demo-component")
export class DemoComponent extends LitElement {
  render() {
    return html`
      <custom-style
        ><style>
          ${styles}
        </style></custom-style
      >
      ${template(this)}
    `;
  }

  view1Demo1() {
    (this as any).shadowRoot.querySelector("#pages1").selected = 0;
  }

  view2Demo1() {
    (this as any).shadowRoot.querySelector("#pages1").selected = 1;
  }

  view3Demo1() {
    (this as any).shadowRoot.querySelector("#pages1").selected = 2;
  }

  view1Demo2() {
    (this as any).shadowRoot.querySelector("#pages2").selected = "view1";
  }

  view2Demo2() {
    (this as any).shadowRoot.querySelector("#pages2").selected = "view2";
  }

  view3Demo2() {
    (this as any).shadowRoot.querySelector("#pages2").selected = "view3";
  }
}