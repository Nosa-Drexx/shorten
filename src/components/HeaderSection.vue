<script lang="ts">
import { defineComponent } from 'vue'
import AnimatedButton from './AnimatedButton.vue'
import NavSection from './NavSection.vue'

type DataState = {
  showNav: boolean
}

export default defineComponent({
  components: { NavSection, AnimatedButton },
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
}
@media (min-width: 800px) {
  .header {
    .animated-button-container {
      display: none;
    }
  }
}
</style>
