<template>
  <div id="app">
    <Potentiometer />
    <Potentiometer />
    <Potentiometer />
    <Potentiometer />
  </div>
</template>

<script>
import Potentiometer from './components/Potentiometer.vue';

export default {
  components: { Potentiometer }
}
</script>

<style>
#app {
  padding-top: 200px;
}
</style>
