<template>
  <div class="potentiometer">
    <div class="potentiometer--container" :title="dataTitle">
      <ul class="potentiometer--surround">
          <li class="potentiometer--surround--mark" v-for="v in marks" :key="v" :title="v" :style="getMarkStyle(v)"></li>
      </ul>
      <div class="potentiometer--button" @mousedown="drag"></div>
    </div>
    <input type="number" :class="{
        'potentiometer--input': true,
        'potentiometer--input-hidden': !displayInput
    }" v-model="dataValue" v-on="$listeners" />
  </div>
</template>

<script>
export default {
  name: 'potentiometer',
  data() {
    return {
      button: undefined,
      dataValue: 0,
      dataTitle: undefined,
      dragged: false,
      dragY: 0,
      input: undefined,
      minDeg: 0,
      maxDeg: 359,
      marks: [],
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
    this.minDeg = this.lowValueGap * 360;
    this.maxDeg = 360 - this.lowValueGap * 360;
    this.input.min = this.min;
    this.input.max = this.max;
    this.dataValue = this.value;
    this.dataTitle = this.title;

    for (let i = this.min; i <= this.max; i += this.markStep) {
      this.marks.push(i);
    }

    this.refresh();
  },
  props: {
    displayInput: { type: Boolean, default: () => false },
    min: { type: Number, default: () => -100 },
    markStep: { type: Number, default: () => 20 },
    max: { type: Number, default: () => 100 },
    lowValueGap: { type: Number, default: () => 0.1 },
    value: { type: Number, default: () => 0 },
    title: undefined,
  },
  methods: {
    drag(e) {
      this.dragged = true;
      this.dragY = e.clientY;
    },
    getDegree(val) {
      return (val - this.min) * (this.maxDeg - this.minDeg) / (this.max - this.min) + this.minDeg;
    },
    getMarkStyle(val) {
      return `transform: rotate(${this.getDegree(val) - 90}deg)`;
    },
    handleDataChange() {
      this.$emit('input', this.dataValue);
    },
    leave() {
      if (this.dragged) {
        this.dragged = false;
      }
    },
    move(e) {
      if (this.dragged) {
        e.preventDefault();
        e.stopPropagation();
        let v = this.dragY - e.clientY;
        this.dataValue = v < this.min ? this.min : v > this.max ? this.max : v;
      }
    },
    refresh() {
      this.button.style.transform = `rotate(${this.getDegree(this.dataValue)}deg)`;

      if (this.title === undefined) {
          this.dataTitle = this.dataValue;
      }

      this.handleDataChange();
    }
  },
  watch: {
    dataValue() {
      this.refresh();
    },
    value() {
      this.dataValue = this.value;   
    }
  }
}
</script>

<style lang="scss">
.potentiometer--container {
  display: inline-block;
  padding: 7px;
  position: relative;
  text-align: left;
}
.potentiometer--button {
  border: 1px solid darkgray;
  border-radius: 100%;
  cursor: ns-resize;
  display: inline-block;
  min-height: 50px;
  min-width: 50px;
  padding: 0;
  position: relative;

  &:after {
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
}
.potentiometer--input {
  display: block;
}
.potentiometer--input-hidden {
  position: absolute;
  visibility: hidden;
}
.potentiometer--surround {
  margin: 0;
  padding: 0;
}
.potentiometer--surround--mark {
  font-size: 14px;
  line-height: 0;
  list-style: none;
  padding: 50% 0 0 0;
  position: absolute;
  height: 50%;
  left: 0;
  top: 0;
  width: 100%;

  &:before {
    color: darkgray;
    content: '_';
    position: absolute;
    margin-top: -5px;
  }
}
</style>
