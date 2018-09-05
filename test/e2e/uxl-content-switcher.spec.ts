describe('uxl-content-switcher', ()=>{
    const chai = require("chai");
    const assert = chai.assert;
    const expect = chai.expect;

    describe('Given we want a content switcher', ()=>{
        describe('When we use component with a children divs', ()=>{
            before(()=>{
                browser.url('');
                browser.waitForExist('#test1', 4000);
            });
            describe('And when we set selected as a index, without attrForSelected', ()=>{
                it('Then the component should show de child according the selected attribute', ()=>{
                    let div = browser.isVisible('#test1 #div1');
                    expect(div).to.be.true;
                });
                it(`And the rest of childs shouldn't display`, ()=>{
                    let div2Visible = browser.isVisible('#test1 #div2');
                    let div3Visible = browser.isVisible('#test1 #div3');
                    expect(div2Visible).to.be.false;
                    expect(div3Visible).to.be.false;
                });
                it(`And selected children should have "selected" classifier`, ()=>{
                    let div = browser.getAttribute('#test1 #div1', 'class');
                    expect(div).to.be.equal('selected');
                });
                it(`And the rest of childs shouldn't have "selected" classifier`, ()=>{
                    let div1 = browser.getAttribute('#test1 #div2', 'class');
                    let div2 = browser.getAttribute('#test1 #div3', 'class');
                    expect(div1).to.be.equal('');
                    expect(div2).to.be.equal('');
                });

            });
            describe('And when we set selected as a index and attrForSelected', ()=>{
                before(()=>{
                    browser.url('');
                    browser.waitForExist('#test2', 4000);
                });
               it(`Then the component should display the child which have attribute name equal "attrForSelected" property value and value for this attribute equal "selected" property value`, ()=>{
                   let div = browser.isVisible('#test2 #div5');
                   expect(div).to.be.true;
               });
                it(`And the rest of childs shouldn't display`, ()=>{
                    let div4 = browser.isVisible('#test2 #div4');
                    let div6 = browser.isVisible('#test2 #div6');
                    expect(div4).to.be.false;
                    expect(div6).to.be.false;
                });
                it(`And selected children should have "selected" classifier`, ()=>{
                    let div = browser.getAttribute('#test2 #div5', 'class');
                    expect(div).to.be.equal('selected');
                });
                it(`And the rest of childs shouldn't have "selected" classifier`, ()=>{
                    let div4 = browser.getAttribute('#test2 #div4', 'class');
                    let div6 = browser.getAttribute('#test2 #div6', 'class');
                    expect(div4).to.be.equal('');
                    expect(div6).to.be.equal('');
                });
            });
        });
    });
});