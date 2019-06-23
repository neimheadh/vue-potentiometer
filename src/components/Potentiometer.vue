<template>
  <div class="potentiometer--container">
    <div class="potentiometer--button" v-on:mousedown="drag"></div>
    <input type="number" v-bind:class="{
      'potentiometer--input': true,
      'potentiometer--input-hidden': !displayInput
    }" v-model="dataValue" />
  </div>
</template>

<script>
export default {
  name: 'potentiometer',
  data() {
    return {
      button: undefined,
      dataValue: 0,
      dragged: false,
      dragY: 0,
      input: undefined,
      minimalDeg: 0,
      maximalDeg: 359,
    }
  },
  created() {
    window.addEventListener('mousemove', this.move);
    window.addEventListener('mouseup', this.leave);
  },
  destroyed() {
    window.removeEventListener('mousemove', this.move);
    window.removeEventListener('mouseup', this.leave);
  },
  mounted() {
    this.button = this.$el.getElementsByClassName('potentiometer--button')[0];
    this.input = this.$el.getElementsByClassName('potentiometer--input')[0];
    this.minimalDeg = this.lowValueGap * 360;
    this.maximalDeg = 360 - this.lowValueGap * 360 - this.minimalDeg;
    this.input.min = this.minimal;
    this.input.max = this.maximal;
    this.dataValue = this.value;
    this.refresh();
  },
  props: {
    displayInput: { type: Boolean, default: () => false },
    minimal: { type: Number, default: () => 0 },
    maximal: { type: Number, default: () => 254 },
    lowValueGap: { type: Number, default: () => 0.1 },
    value: { type: Number, default: () => 0 },
  },
  methods: {
    drag(e) {
      this.dragged = true;
      this.dragY = e.clientY;
    },
    leave() {
      if (this.dragged) {
        this.dragged = false;
      }
    },
    move(e) {
      if (this.dragged) {
        let v = this.dragY - e.clientY;
        this.dataValue = v < this.minimal ? this.minimal : v > this.maximal ? this.maximal : v;
      }
    },
    refresh() {
      let d = this.minimalDeg + this.dataValue * (this.maximalDeg / this.maximal);
      this.button.style.transform = `rotate(${d}deg)`;
    }
  },
  watch: {
    dataValue() {
      this.refresh();
    }
  }
}
</script>

<style>
.potentiometer--container {
  display: inline-block;
}
.potentiometer--button {
  border: 1px solid darkgray;
  border-radius: 100%;
  cursor: ns-resize;
  display: inline-block;
  min-height: 50px;
  min-width: 50px;
  position: relative;
}
.potentiometer--button::after {
  background-color: lightgray;
  border: 1px solid darkgray;
  border-radius: 100%;
  content: ' ';
  display: inline-block;
  margin: 35px 0 0 20px;
  min-height: 8px;
  min-width: 8px;
  position: relative;
}
.potentiometer--input-hidden {
  position: absolute;
  visibility: hidden;
}
</style>
