<script lang="ts">
import { defineComponent } from 'vue'
import AboutCard from './AboutCard.vue'

export default defineComponent({ components: { AboutCard } })
</script>

<template>
  <section id="About" class="about-section">
    <article class="about-article">
      <h2>A short link, infinite possiblities</h2>
      <p>
        With the advanced intelligent link shortening service, you can have shorter links and share
        them easily.
      </p>
    </article>
    <div class="about-card">
      <AboutCard />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/fonts';
@import '@/assets/mixins';
.about-section {
  @include flex(column nowrap, flex-start);
  gap: 6rem;
  width: 100%;
  max-width: 1000px;
  padding: 1rem;

  margin: 3rem auto;
  .about-article {
    @include flex(column nowrap);
    gap: 1rem;
    h2 {
      @include font(bold);
      color: $primaryColor;
      font-size: $size2;
      text-align: center;
      margin: 0;
    }
    p {
      @include font($fontSecondary);
      margin: 0;
      text-align: center;
    }
  }

  .about-card {
    width: 100%;
  }
}

@media (min-width: 600px) {
  .about-section {
    .about-article {
      h2 {
        font-size: $size3;
      }
      p {
        font-size: $size1;
      }
    }
  }
}
</style>
