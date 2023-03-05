<script lang="ts">
import { defineComponent } from 'vue'
import InputForm from './InputForm.vue'

export default defineComponent({
  data: () => ({
    value: []
  }),
  components: { InputForm }
})
</script>

<template>
  <div class="url-list-container"><InputForm /></div>
</template>

<style lang="scss">
@import '@/assets/colors';
@import '@/assets/fonts';
@import '@/assets/mixins';
.url-list-container {
  @include borderShadow;
  width: 100%;
  height: 100px;
  border-radius: 20px;
  padding: 1rem 0;
}
@media (min-width) {
  .url-list-container {
    width: 90%;
  }
}
</style>
