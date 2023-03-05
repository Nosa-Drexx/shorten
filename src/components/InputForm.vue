<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    value: ''
  })
})
</script>

<template>
  <form class="url-form">
    <label for="url" class="url-label-input">
      <input id="url" type="url" v-model="value" class="url-input" />
    </label>
    <label for="submit" class="url-submit-label">
      <input type="submit" value="Shorten" id="submit" class="url-submit-btn" />
    </label>
  </form>
</template>

<style lang="scss">
@import '@/assets/colors';
@import '@/assets/fonts';
@import '@/assets/mixins';
.url-form {
  @include flex(row nowrap, space-between);
  @include gradient;
  width: 100%;
  border-radius: 10px;
  //   border: 1px solid black;
  .url-label-input {
    width: 80%;
    border-radius: inherit;
    .url-input {
      @include font(normal, $fontSecondary);
      background: $shadowColor;
      font-size: $size2;
      padding: 1rem;
      width: 100%;
      border: none;
      border-radius: inherit;
    }
    .url-input:focus,
    .url-input:hover,
    .url-input:active {
      border: unset;
    }
  }
  .url-submit-label {
    padding-right: 5px;
    .url-submit-btn {
      font-size: $size1;
      font-family: $fontPrimary;
      color: $white;
      background: $primaryColor;
      border: none;
      border-radius: 5px;
      box-shadow: 3px 7px 15px $thirdColor;
      padding: 0.7rem 0.5rem;
      cursor: pointer;
    }
  }
}

@media (min-width: 800px) {
  .url-form {
    width: 90%;
    margin: auto;
    .url-submit-label {
      padding-right: 20px;
    }
  }
}
</style>
