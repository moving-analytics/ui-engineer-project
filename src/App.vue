<template>
  <div id="app">
    <div>
      <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-2 py-8">
        <div class="flex flex-wrap -mx-4">
          <div
            class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/2"
            v-bind:key="indicator.type"
            v-for="indicator in indicators"
          >
            <Gauge :data="indicator" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gauge from './components/Gauge';
const axios = require('axios');

export default {
  name: 'app',
  components: {
    Gauge
  },
  data() {
    return {
      indicators: null
    };
  },
  mounted() {
    // In real world API host is defined in axios config & error checking on request
    // using cors-anywhere to get around CORS browser limitation.
    axios
      .get('https://cors-anywhere.herokuapp.com/https://sandbox.movinganalytics.com/test/indicators')
      .then(response => (this.indicators = response.data));
  }
};
</script>

<style>
#app {
  font-family: 'Nunito', sans-serif;
}
</style>
