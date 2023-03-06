<script lang="ts">
import { defineComponent } from 'vue'
import UrlListContainer from './UrlListContainer.vue'

export default defineComponent({
  components: { UrlListContainer }
})
</script>

<template>
  <section class="hero-section">
    <article class="info-text">
      <h1>Create Short Links!</h1>
      <p>
        Shorten is a custom short link personalisation tool that enables you shorten your links at
        no cost. Get started for free.
      </p>
    </article>
    <UrlListContainer />
  </section>
</template>

<style lang="scss">
@import '@/assets/colors';
@import '@/assets/fonts';
@import '@/assets/mixins';
.hero-section {
  @include flex(column nowrap);
  gap: 4rem;
  width: 100vw;
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
  .info-text {
    @include flex(column nowrap);
    gap: 1rem;
    h1 {
      @include font(bold);
      color: $primaryColor;
      font-size: $size3;
      text-align: center;
      margin: 0;
    }
    p {
      @include font($fontSecondary);
      margin: 0;
      text-align: center;
    }
  }
}

@media (min-width: 600px) {
  .hero-section {
    .info-text {
      h1 {
        font-size: $size5;
      }
      p {
        font-size: $size1;
      }
    }
  }
}
</style>
