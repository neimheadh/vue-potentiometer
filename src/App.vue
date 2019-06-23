<template>
  <div id="app">
    <div class="app--potentiometers">
      <div class="app--potentiometer">
        <div class="app--potentiometer--title">
          Volume
        </div>
        <Potentiometer v-model.number="volume" name="volume" :min="0" :max="200" />
      </div>
      <div class="app--potentiometer">
        <div class="app--potentiometer--title">
          Room
        </div>
        <Potentiometer v-model.number="room" name="room" display-input />
      </div>
    </div>

    <form class="app--form">
      <label>
        Volume: 
        <input v-model.number="volume" type="number" />
      </label>
      <label>
        Room:
        <input v-model.number="room" type="number" />
      </label>
    </form>
  </div>
</template>

<script>
import Potentiometer from './components/Potentiometer.vue';

export default {
  components: { Potentiometer },
  data() {
    return {
      room: 0,
      volume: 100,
    }
  }
}
</script>

<style>
#app {
  padding-top: 200px;
}
.app--potentiometer {
  padding: 0 10px;
  text-align: center;
}
.app--potentiometers {
  display: flex;
}
.app--form label {
  display: block;
  margin: 10px 0;
}
</style>
