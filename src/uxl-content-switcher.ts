import {property} from "@uxland/uxl-polymer2-ts";
import {html, LitElement} from '@polymer/lit-element/lit-element';
import '@polymer/iron-flex-layout/iron-flex-layout'
import {style as styleTemplate} from './uxl-content-switcher-styles.js';
import {template as htmlTemplate} from './uxl-content-switcher-template.js';

/**
 * `uxl-content-switcher`
 * A content switcher with animations component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class UxlContentSwitcher extends LitElement {

    @property()
    selected: string;

    @property({notify: true})
    attrForSelected: string;

    _render(props: UxlContentSwitcher) : any{
        return html`${styleTemplate} ${htmlTemplate(props)}`;
    }

    _didRender(props: UxlContentSwitcher) : any{
        this.select();
    }

    get items(): HTMLCollection {
        return this.children;
    }

    selectIndex(){
        return this.selected
            ? this.attrForSelected
                ? Array.from(this.items).findIndex(i => Array.from(i.attributes).findIndex(attr=>attr.name == this.attrForSelected && attr.value == this.selected) != -1)
                : this.selected
            : 0;
    }

    select(){
        if(this.items){
            let index = this.selectIndex();
            let items = Array.from(this.items);
            items.forEach(i=>i.classList.remove('selected'));
            items[index].classList.add('selected');
            this.fadeInAnimation(items[index], 2000);
            // this.slideDownAnimation(items[index], 1000);
        }
    }

    fadeOutAnimation(element, duration){
        let animation = element.animate([
                {opacity: 1, easing: 'ease-out'},
                {opacity: 0.5},
                {opacity: 0}],
            {duration: duration, fill: 'forwards'});
        return animation;
    }

    fadeInAnimation(element, duration) {
        let animation = element.animate([
                {opacity: 0, easing: 'ease-in-out'},
                {opacity: 0.5},
                {opacity: 1}],
            {duration: duration, fill: 'forwards'});
        return animation;
    }

    slideDownAnimation(element, duration){
        let animation = element.animate([
            {transform: 'translateY(-100%)'},
            {transform: 'translateY(4%)'},
            {transform: 'translateY(-4%)'},
            {transform: 'translateY(0%)'}],
            {duration: duration, fill: 'forwards', easing: 'ease-in'});
        return animation;
    }

/*selectNext(){
    if(!this.attrforselected)
        return this.selected = (parseInt(this.selected) + 1).toString();
    else
        return this.selected = (Array.from(this.items).findIndex(i => i.attributes[0].name == this.attrforselected && i.attributes[0].value == this.selected) + 1).toString();
}

selectPrevious(){
    if(!this.attrforselected)
        return this.selected = (parseInt(this.selected) + -1).toString();
    else
        return this.selected = (Array.from(this.items).findIndex(i => i.attributes[0].name == this.attrforselected && i.attributes[0].value == this.selected) + -1).toString();
}*/
}

window.customElements.define('uxl-content-switcher', UxlContentSwitcher);
