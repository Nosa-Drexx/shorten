<script lang="ts">
import { defineComponent } from 'vue'
import { useShortenStore } from '@/stores/shortenStore'

type DataState = {
  url: string
  isLoading: boolean
}

export default defineComponent({
  data: (): DataState => ({
    url: '',
    isLoading: false
  }),
  setup() {
    const shortenStore = useShortenStore()

    return {
      shortenStore
    }
  },
  emits: {
    showHiddenLinkList(value: boolean): boolean {
      return value
    }
  },
  methods: {
    async submitURL(): Promise<void> {
      //Avoid double request
      if (!this.isLoading) {
        this.isLoading = true //intiate loading state before making fetch request

        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${this.url}`)
        const data = await response.json()

        this.isLoading = false //reslove loading state after response from api

        //update Store;
        if (data.ok) {
          const { result } = data
          // eslint-disable-next-line no-undef
          const apiResponse: ResposeFromAPI = result

          const { original_link, full_short_link, short_link } = apiResponse

          this.shortenStore.addLinkToList(original_link, full_short_link, short_link)

          //reset input field to blank
          this.url = ''

          //Emit event to open hidden list of lists
          this.$emit('showHiddenLinkList', true)
        }
      }
    }
  }
})
</script>

<template>
  <form class="url-form" @submit.prevent="submitURL">
    <label for="url" class="url-label-input">
      <input
        id="url"
        type="url"
        v-model="url"
        @keyup.enter="submitURL"
        class="url-input"
        placeholder="🔗 Paste a link to shorten it"
        required
      />
    </label>
    <label for="submit" class="url-submit-label">
      <button
        type="submit"
        value="Shorten"
        id="submit"
        class="url-submit-btn"
        :disabled="isLoading"
      >
        {{ !isLoading ? 'Shorten' : '' }}
        <i v-if="isLoading" class="fa-solid fa-spinner url-spinner"></i>
      </button>
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
  margin: 0 0.2rem;
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
      @include borderShadow2();
      @include flex();
      font-size: $size1;
      font-family: $fontPrimary;
      color: $white;
      background: $primaryColor;
      border: none;
      border-radius: 5px;
      padding: 0.7rem 0.5rem;
      cursor: pointer;
      .url-spinner {
        animation-name: spinner;
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
      }
      @keyframes spinner {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    .url-submit-btn:disabled {
      cursor: not-allowed;
    }
  }
}

@media (min-width: 600px) {
  .url-form {
    width: 90%;
    margin: auto;
    .url-submit-label {
      padding-right: 20px;
    }
  }
}
</style>
