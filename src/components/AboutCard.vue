<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <div class="cardList">
    <div class="first-card card">
      <span>
        <i class="fa-solid fa-link logo"></i>
      </span>
      <h3>Custom Domain</h3>
      <p>
        Track audience individually for each brand, website or client by using your own domain or
        subdomain for link shortening
      </p>
    </div>
    <div class="second-card card">
      <span>
        <i class="fa-solid fa-chart-line logo"></i>
      </span>
      <h3>Track Clicks</h3>
      <p>
        Focus your clients efforts on the most presmsing campaigns by taking actions based on
        comprehensive statistics.
      </p>
    </div>
    <div class="third-card card">
      <span>
        <i class="fa-regular fa-message logo"></i>
      </span>
      <h3>Friendly Support</h3>
      <p>We readily come about your success in using short links so you always get answers.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/fonts';
@import '@/assets/mixins';
.cardList {
  @include flex(column nowrap);
  gap: 2rem;
  width: 100%;
  .card {
    @include flex(column nowrap);
    gap: 1rem;
    @include borderShadow2();
    padding: 1rem;
    width: 100%;
    border-radius: 10px;
    span {
      @include borderShadow();
      margin-bottom: 0.5rem;

      .logo {
        font-size: $size5;
        color: $primaryColor;
      }
    }
    h3 {
      @include font(bold);
      color: $primaryColor;
      font-size: $size2;
      text-align: center;
      margin: 0;
    }
    p {
      @include font($fontSecondary);
      font-size: 0.85rem;
      margin: 0;
      text-align: center;
    }
  }
}

@media (min-width: 600px) {
  .cardList {
    @include flex(row nowrap, space-between);

    .card {
      @include flex(column nowrap);
      gap: 1rem;
      //remore box shadow
      box-shadow: unset;
      width: 30%;
      border-radius: 15px;
    }
    .second-card {
      @include borderShadow;
    }
  }
}
</style>
