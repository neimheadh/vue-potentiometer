JS potentiometer written using Vue.js
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
import potentiometer from 'vue-potentiometer';

export default {
    components: { potentiometer },
    // ...
}
```

And then add the potentiometer stylesheet :

```css
@import "~vue-potentiometer/dist/potentiometer.css";
```

Parameters
----------

*  **disable-axis-x**: Disable mouse X axis value control.
*  **disable-axis-y**: Disable mouse Y axis value control.
*  **display-input**: Display potentiometer number input.
*  **min**: Configure potentiometer min value.
*  **mark-step**: Configure values the dash-marks will be placed on.
*  **max**: Configure potentiometer max value.
*  **low-value-gap**: Configure a percent on the bottom of the
     potentiometer which doesn't have value and marks and cannot be selected.
*  **precision**: Configure value float precision (ex: 0.1 for values like
    12.3).
*  **sensibility**: potentiometer sensibility.

All parameters are optional, default values setted here, except for the false
by default `display-input`, `disable-axis-x` and `disable-axis-y` :

```html
<!-- ... -->
<Potentiometer
    disable-axis-x
    disable-axis-y
    display-input
    :min="-100"
    :mark-step="20"
    :max="100"
    :low-value-gap="0.1"
    :precision="1"
    :sensibility="10" />
<!-- ... -->
```

Alternative
-----------

If you don't want to add the potentiometer stylesheet, you can also include
the potentiometer vue object directly. But be careful, it uses scss language,
you should install `node-sass` and `sass-loader` npm packages :

```js
import potentiometer from 'vue-potentiometer/potentiometer';

// ...
```

Examples
--------

*  [The demo](https://neimheadh.github.io/vue-potentiometer/) :
     [App.vue](https://github.com/neimheadh/vue-potentiometer/blob/master/src/App.vue)
