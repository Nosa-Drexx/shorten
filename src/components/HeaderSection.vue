<script lang="ts">
import { defineComponent } from 'vue'
import AnimatedButton from './AnimatedButton.vue'
import NavSection from './NavSection.vue'
import NavSectionBiggerScreens from './NavSectionBiggerScreens.vue'

type DataState = {
  showNav: boolean
}

export default defineComponent({
  components: { NavSection, AnimatedButton, NavSectionBiggerScreens },
  data: (): DataState => ({
    showNav: false
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
    <div>Hello i am a header</div>
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
  .nav-bigger-screen {
    display: none;
  }
}
@media (min-width: 800px) {
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
