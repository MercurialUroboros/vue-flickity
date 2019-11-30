# Vue Flickity 2

A vue flickity version more in line with Vue patterns. 

This project is a work in progress.

## Installation

First install 

```bash
npm install vue-flickity-2
```

## Usage

```vue
<template>
  <div key="flickity">
    <flickity
      :options="flickityOptions"
      ref="flickity"
      @dragMove="dragMove"
      @init="api=$event.flickityApi"
    >
      <div class="carousel-cell">1</div>
      <div class="carousel-cell">2</div>
      <div class="carousel-cell">3</div>
      <div class="carousel-cell">4</div>
      <div class="carousel-cell">5</div>
    </flickity>
    <button @click="previous()">Previous Button</button>
    <button @click="next()">Next Button</button>
  </div>
</template>

<script>
import Flickity from 'vue-flickity-2';
import 'vue-flickity-2/dist/vue-flickity-2.css';

export default {
  components: {
    Flickity,
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
      },
      api: {},
    };
  },
  methods: {
    dragMove(event, pointer, moveVector) {
      console.log(event, pointer, moveVector);
    },
    next() {
      this.api.next();
    },
    previous() {
      this.api.previous();
    },
  },
};
</script>

<style>
.carousel-cell {
  width: 400px;
  height: 160px;
  margin-right: 10px;
  background: red;
}
</style>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)