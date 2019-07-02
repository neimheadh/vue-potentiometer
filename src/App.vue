<template>
  <div id="app">
    <div class="app--potentiometers">
      <div class="app--potentiometer app--potentiometer-volume">
        <div class="app--potentiometer--title">
          Volume
        </div>
        <Potentiometer v-model.number="volume" :min="0" :max="200" />
      </div>
      <div class="app--potentiometer app--potentiometer-room">
        <div class="app--potentiometer--title">
          Room
        </div>
        <Potentiometer v-model.number="room" />
      </div>
      <div class="app--potentiometer app--potentiometer-chorus">
        <div class="app--potentiometer--title">
          Chorus
        </div>
        <Potentiometer v-model.number="chorus" :min="0" :max="200" :mark-step="2" :precision="0.1" />
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
      <label>
        Chorus:
        <input v-model.number="chorus" type="number" step="0.1" />
      </label>
    </form>
  </div>
</template>

<script>
import Potentiometer from './Potentiometer.vue';

export default {
  components: { Potentiometer },
  data() {
    return {
      room: 0,
      chorus: 100,
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
  width: 120px;
}
.app--potentiometer-room {
  width: 70px;
}
.app--potentiometer-chorus {
  width: 200px;
}
.app--potentiometers {
  display: flex;
}
.app--form label {
  display: block;
  margin: 10px 0;
}
</style>
