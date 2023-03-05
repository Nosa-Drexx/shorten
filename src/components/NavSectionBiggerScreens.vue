<script lang="ts">
import { defineComponent } from 'vue'
type DataState = {
  navList: readonly ['About', 'Contact']
}

export default defineComponent({
  data: (): DataState => ({
    navList: ['About', 'Contact']
  })
})
</script>

<template>
  <nav class="animated-nav" ref="nav">
    <ul class="ul">
      <li class="li" v-for="list in navList" :key="list">
        <span class="bottom-border"></span>
        <a :href="`#${list}`">{{ list }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/fonts';
@import '@/assets/mixins';
.animated-nav {
  @include flex();
  width: 40%;
  ul {
    @include flex(row nowrap, space-evenly);
    width: 100%;
    padding: 0;
    margin: 0;
    li {
      position: relative;
      padding: 0;
      margin: 0;
      list-style-type: none;
      .bottom-border {
        display: flex;
        position: absolute;
        bottom: -3px;
        width: 0px;
        transition: width 0.5s;
      }
      a {
        @include font(500);
        text-decoration: none;
        font-size: $size1;
        color: black;
      }
    }
    li:hover {
      .bottom-border {
        width: 30px;
        border-bottom: 3px solid $primaryColor;
      }
    }
  }
}
</style>
