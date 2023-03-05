<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    status: false
  }),
  emits: {
    buttonStatus(value: boolean): boolean {
      return value
    }
  },
  methods: {
    emitStatus() {
      //Type cast refs
      const topDiv = this.$refs.top as HTMLDivElement
      const middleDiv = this.$refs.middle as HTMLDivElement
      const bottomDiv = this.$refs.bottom as HTMLDivElement
      //Animate button
      if (!this.status) {
        topDiv.style.transform = 'rotate(45deg)'
        topDiv.style.margin = '30%'
        bottomDiv.style.transform = 'rotate(-45deg)'
        bottomDiv.style.margin = '30%'
        middleDiv.style.opacity = '0'
      } else {
        topDiv.style.transform = 'rotate(0deg)'
        topDiv.style.margin = '0'
        bottomDiv.style.transform = 'rotate(0deg)'
        bottomDiv.style.margin = 'calc(100% - 42%)'
        middleDiv.style.opacity = '1'
      }
      this.status = !this.status
      this.$emit('buttonStatus', this.status)
    }
  }
})
</script>

<template>
  <button class="animated-btn" @click="emitStatus">
    <div class="top" ref="top"></div>
    <div class="middle" ref="middle"></div>
    <div class="bottom" ref="bottom"></div>
  </button>
</template>

<style lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
.animated-btn {
  @include flex(column nowrap, space-between);
  @include button(50px, 45px);
  cursor: pointer;
  position: relative;
  div {
    height: 18%;
    width: 100%;
    background: $thirdColor;
    transition: transform 0.5s, opacity 0.5s, margin 0.5s;
    position: absolute;
  }
  .middle {
    margin-top: calc((100% - 18%) / 3);
  }

  .bottom {
    margin-top: calc(100% - 42%);
  }
}
</style>
