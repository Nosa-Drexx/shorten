<script lang="ts">
import { defineComponent } from 'vue'
import AnimatedButton from './AnimatedButton.vue'
import NavSection from './NavSection.vue'
import NavSectionBiggerScreens from './NavSectionBiggerScreens.vue'
import ShortenLogo from '@/assets/images/shorten.svg'

type DataState = {
  showNav: boolean
  ShortenLogo: string //Image buffer as string
}

export default defineComponent({
  components: { NavSection, AnimatedButton, NavSectionBiggerScreens },
  data: (): DataState => ({
    showNav: false,
    ShortenLogo: ShortenLogo
  }),
  methods: {
    showOrHideNav(event: boolean): void {
      this.showNav = event
    }
  }
})
</script>

<template>
  <header class="header">
    <div class="header-img">
      <a href="#"><img :src="ShortenLogo" /></a>
    </div>
    <div class="animated-button-container">
      <AnimatedButton @button-status="showOrHideNav" />
    </div>
    <NavSectionBiggerScreens class="nav-bigger-screen" />
  </header>
  <NavSection v-if="showNav" :status="showNav" />
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/fonts';
@import '@/assets/mixins';
.header {
  @include flex(row nowrap, space-between);
  color: $primaryColor;
  padding: 1rem;
  position: sticky;
  background: $white;
  top: 0;
  .header-img {
    width: 30%;
    a {
      display: block;
      width: 100%;
      img {
        width: 100%;
        height: 50px;
        object-fit: contain;
      }
    }
  }
  .nav-bigger-screen {
    display: none;
  }
}
@media (min-width: 600px) {
  .header {
    .animated-button-container {
      display: none;
    }
    .nav-bigger-screen {
      display: flex;
    }
  }
}
</style>
