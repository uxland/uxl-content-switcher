import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';
const innerStyle = html`
    <style>
        :host > ::slotted(:not(slot):not(.selected)) {
            display: none !important;
        }         
    </style>`;
export const style: TemplateResult = innerStyle;