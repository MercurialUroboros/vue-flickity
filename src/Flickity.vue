<template>
  <div>
    <slot />
  </div>
</template>

<script>
import Flickity from 'flickity'

export default {
  props: {
    options: Object
  },
  data: () => ({
    flickity: null,
    api: {},
    flickityData: {}
  }),
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.flickity.destroy()
    this.flickity = null
  },
  methods: {
    init () {
      this.flickity = new Flickity(this.$el, {
        on: this.mountFlickityEvents(),
        ...this.options
      })
      this.initliazeFlickityApi()
      this.$emit('init', { flickityApi: this.api })
    },
    mountFlickityEvents () {
      const callBacks = {}
      Object.keys(this.$listeners).forEach(listener => {
        callBacks[listener] = (...args) => {
          this.$emit(listener, ...args)
        }
      })
      return callBacks
    },
    initliazeFlickityApi () {
      const prototype = Object.getPrototypeOf(this.flickity)
      for (const p in prototype) {
        if (p.includes('_')) continue
        this.api[p] = (...args) => {
          this.flickity[p](args)
        }
      }
      this.api.off = this.off
      this.api.once = this.once
    },
    off (listener) {
      this.flickity.off(listener)
    },
    once (listener, cb) {
      this.flickity.once(listener, cb)
    }
  }
}
</script>

<style src='flickity/dist/flickity.css'></style>
