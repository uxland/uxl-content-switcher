import {property, customElement} from "lit-element/lib/decorators";
import {html, LitElement} from 'lit-element/lit-element';
import * as animations from './animations';

const isSelected = (item: HTMLElement, attrForSelected: string, selection: string) => item[attrForSelected] === selection ||
    Array.from(item.attributes).some(attr => attr.name === attrForSelected && attr.value === selection);

/**
 * `uxl-content-switcher`
 * A content switcher with animations component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

@customElement('uxl-content-switcher')
export class UxlContentSwitcher extends LitElement {

    @property()
    selected: string;

    @property()
    attrForSelected: string;

    @property()
    duration: string = "1000";

    render(){
        return html`
            <style>
                :host{
                    display: flex;
                    flex: 1;
                }
                :host > ::slotted(:not(slot):not(.selected)) {
                    display: none !important;
                }         
            </style> 
            <slot></slot>
        `;
    }

    updated(props) : any{
        this.select();
    }

    get items(): HTMLCollection {
        return this.children;
    }

    selectIndex(){
        return this.selected
            ? this.attrForSelected
                ? Array.from(this.items).findIndex(item => isSelected(item, this.attrForSelected, this.selected))
                : parseInt(this.selected)
            : -1;
    }

    select(){
        if(this.items.length > 0){
            let index = this.selectIndex();
            if(index != -1){
                let items = Array.from(this.items);
                items.forEach(i=>i.classList.remove('selected'));
                items[index].classList.add('selected');
                animations.fadeInAnimation(items[index], parseInt(this.duration));
                // animations.slideDownAnimation(items[index], 1000);
                // animations.slideLeftAnimation(items[index], 1000);
                // animations.stretchLeftAnimation(items[index], 1500);
            }
        }
    }
}
