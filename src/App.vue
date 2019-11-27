<template>
  <div id="app">
    <flickity
      :options="flickityOptions"
      ref="flickity"
      @dragMove="dragMove"
      @next="next"
      @init="api=$event.flickityApi"
    >
      <div
        class="carousel-cell"
        a="1"
      >1</div>
      <div class="carousel-cell">2</div>
      <div class="carousel-cell">3</div>
      <div class="carousel-cell">4</div>
      <div class="carousel-cell">5</div>
    </flickity>
    <button @click="previous()">Custom Previous Button</button>
    <button @click="next()">Custom Next Button</button>
  </div>
</template>

<script>
import Flickity from './components/Flickity.vue'

export default {
  name: 'app',
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
        // any options from Flickity can be used
      },
      api: {}
    }
  },
  methods: {
    dragMove (index) {
      console.log('yay', index)
    },
    next () {
      this.api.next()
    },

    previous () {
      this.$refs.flickity.previous()
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.carousel-cell {
  width: 400px; /* full width */
  height: 160px; /* height of carousel */
  margin-right: 10px;
  background: red;
}
</style>
