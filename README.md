JS Potentiometer written using Vue.js
=====================================

This project provide a responsive Javascript potentiometer input written in
Vue.js.

You can find a demo [here](https://neimheadh.github.io/vue-potentiometer/).

Getting started
---------------

Install the vue module :

```console
npm install vue-potentiometer
```

Add the module in your application :

```js
import Potentiometer from 'vue-potentiometer';

export default {
    components: { Potentiometer },
    // ...
}
```

And then add the potentiometer stylesheet :

```css
@import "~vue-potentiometer/dist/potentiometer.css";
```

Then you can use the component in your templates (all parameters are optional,
default values setted here, except for the false by default `display-input`) :

```html
<!-- ... -->
<Potentiometer
    <!-- Display potentiometer number input -->
    dislay-input
    <!-- Configure potentiometer min value -->
    :min="-100"
    <!-- Configure values the dash-marks will be placed on -->
    :mark-step="20"
    <!-- Configure potentiometer max value -->
    :max="100"
    <!-- Configure a percent on the bottom of the potentiometer which doesn't
      have value and marks and cannot be selected -->
    :low-value-gap="0.1"
    <!-- Configure value float precision (ex: 0.1 for values like 12.3) -->
    :precision="1"
    <!-- Potentiometer sensibility -->
    :sensibility="10"
/>
<!-- ... -->
```

Alternative
-----------

If you don't want to add the potentiometer stylesheet, you can also include
the Potentiometer vue object directly. But be careful, it uses scss language,
you should install `node-sass` and `sass-loader` npm packages :

```js
import Potentiometer from 'vue-potentiometer/Potentiometer';

// ...
```

Examples
--------

* [The demo](https://neimheadh.github.io/vue-potentiometer/) : [App.vue](https://github.com/neimheadh/vue-potentiometer/blob/master/src/App.vue)
