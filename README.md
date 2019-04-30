# \<uxl-content-switcher\>

A switcher content with animations

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Properties

`attrForSelected` : the attribute that will check to select desired child

`selected` : the value that will select desired child. It can be a number (will select the index), or can be the value of "attrForSelected" property

`duration` : the animation duration in ms.

`animation`: the animation type. You can choose under "slide", "fade" or "stretch";

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

### Generate test reports

```
npx allure generate
npx allure open
```
