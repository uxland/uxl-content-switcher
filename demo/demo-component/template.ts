import {html} from 'lit';
import 'src/uxl-content-switcher';
import {DemoComponent} from './demo-component';

export const template = (props: DemoComponent) => html`
  <div id="test1">
    <h3>uxl-content-switcher demo without attrForSelected</h3>
    <uxl-content-switcher id="pages1" selected="0" duration="500" animation="fade">
      <div id="div1">I'm a view 1</div>
      <div id="div2">I'm a view 2</div>
      <div id="div3">I'm a view 3</div>
    </uxl-content-switcher>

    <button @click="${props.view1Demo1}">view 1</button>
    <button @click="${props.view2Demo1}">view 2</button>
    <button @click="${props.view3Demo1}">view 3</button>
  </div>

  <div id="test2">
    <h3>uxl-content-switcher demo with attrForSelected</h3>
    <uxl-content-switcher
      id="pages2"
      attrForSelected="name"
      duration="1000"
      selected="view2"
      animation="slideLeft"
    >
      <div id="div4" name="view1">I'm a view 1</div>
      <div id="div5" name="view2">I'm a view 2</div>
      <div id="div6" name="view3">I'm a view 3</div>
    </uxl-content-switcher>

    <button @click="${props.view1Demo2}">view 1</button>
    <button @click="${props.view2Demo2}">view 2</button>
    <button @click="${props.view3Demo2}">view 3</button>
  </div>
`;
