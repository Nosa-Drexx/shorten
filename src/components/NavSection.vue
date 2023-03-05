<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
type DataState = {
  navList: readonly ['About', 'Contact']
}

export default defineComponent({
  props: {
    status: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
  data: (): DataState => ({
    navList: ['About', 'Contact']
  }),
  mounted() {
    const navDiv = this.$refs.nav as HTMLElement
    //animate nav
    setTimeout(() => {
      navDiv.style.height = '100px'
    }, 100)
  }
})
</script>

<template>
  <nav class="animated-nav" ref="nav">
    <ul class="ul">
      <li class="li" v-for="list in navList" :key="list">
        <a :href="`#${list}`">{{ list }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/mixins';
@import '@/assets/fonts';
.animated-nav {
  width: 100%;
  height: 0px;
  overflow: hidden;
  z-index: 100;
  transition: height 1s;
  .ul {
    @include flex(column nowrap, space-between, flex-start);
    margin: 0;
    padding: 0;
    .li {
      display: flex;
      margin: 0;
      padding: 0;
      list-style-type: none;
      width: 100%;
      a {
        width: 100%;
        padding: 0.7rem;
        text-decoration: none;
        color: black;
        font-size: 1.2rem;
        font-family: $fontPrimary;
      }
      a:hover {
        background: $secondaryColor;
      }
    }
  }
}
</style>
