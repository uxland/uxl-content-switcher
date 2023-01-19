import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './styles.scss';
import {template} from './template';
/**
 * `uxl-tile-view`
 * A tile view component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
@customElement('demo-component')
export class DemoComponent extends LitElement {
  render() {
    return html` ${template(this)} `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  view1Demo1() {
    (this as any).shadowRoot.querySelector('#pages1').selected = 0;
  }

  view2Demo1() {
    (this as any).shadowRoot.querySelector('#pages1').selected = 1;
  }

  view3Demo1() {
    (this as any).shadowRoot.querySelector('#pages1').selected = 2;
  }

  view1Demo2() {
    (this as any).shadowRoot.querySelector('#pages2').selected = 'view1';
  }

  view2Demo2() {
    (this as any).shadowRoot.querySelector('#pages2').selected = 'view2';
  }

  view3Demo2() {
    (this as any).shadowRoot.querySelector('#pages2').selected = 'view3';
  }
}
