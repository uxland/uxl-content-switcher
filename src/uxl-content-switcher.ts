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
            // this.fadeInAnimation(items[index], 2000);
            // this.slideDownAnimation(items[index], 1000);
            this.slideLeftAnimation(items[index], 1000);
            // this.stretchLeftAnimation(items[index], 1500);
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
            {transform: 'translateY(-100%)', offset: 0.0},
            {transform: 'translateY(40%)', offset: 0.5},
            {transform: 'translateY(7%)', offset: 0.65},
            {transform: 'translateY(4%)', offset: 0.8},
            {transform: 'translateY(2%)', offset: 0.95},
            {transform: 'translateY(0%)', offset: 1.0}],
            {duration: duration, fill: 'forwards', easing: 'ease'});
        return animation;
    }

    slideLeftAnimation(element, duration){
        let animation = element.animate([
                {transform: 'translateX(150%)', offset: 0.0},
                {transform: 'translateX(40%)', offset: 0.5},
                {transform: 'translateX(7%)', offset: 0.65},
                {transform: 'translateX(4%)', offset: 0.8},
                {transform: 'translateX(2%)', offset: 0.95},
                {transform: 'translateX(0%)', offset: 1.0}],
            {duration: duration, fill: 'forwards', easing: 'ease-in-out'});
        return animation;
    }

    stretchLeftAnimation(element, duration){
        let animation = element.animate([
                {transform: 'scaleX(0.3)', offset: 0.0},
                {transform: 'scaleX(1.02)', offset: 0.4},
                {transform: 'scaleX(0.98)', offset: 0.60},
                {transform: 'scaleX(1.01)', offset: 0.80},
                {transform: 'scaleX(0.98)', offset: 1},
                {transform: 'scaleX(1.01)', offset: 0.8},
                {transform: 'scaleX(1)', offset: 1}],
            {duration: duration, fill: 'forwards', easing: 'ease-out'});
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
