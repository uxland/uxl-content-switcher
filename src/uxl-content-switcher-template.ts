import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';
const innerTemplate = () => html`<slot></slot>`;
export const template: () =>TemplateResult = innerTemplate;
