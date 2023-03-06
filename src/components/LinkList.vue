<script lang="ts">
import { defineComponent } from 'vue'
import { useShortenStore } from '@/stores/shortenStore'

export default defineComponent({
  setup() {
    const shortenStore = useShortenStore()
    return {
      shortenStore
    }
  },
  data: () => ({}),
  methods: {
    copyLink(e: MouseEvent) {
      const copyBtnEvent = e.target as HTMLButtonElement

      const getShortLink = copyBtnEvent.parentElement?.childNodes[0] as HTMLElement

      const shortLink = getShortLink.innerText

      //copy text to clipboard
      navigator.clipboard.writeText(shortLink)
      copyBtnEvent.style.backgroundColor = 'black'

      //update pinia store
      if (copyBtnEvent.dataset.id) {
        const copyId: string = copyBtnEvent.dataset.id
        this.shortenStore.updateCopiedLinks(copyId)
      }
    }
  },
  mounted() {
    const List = this.$refs.list as HTMLElement
    const copyBtn = this.$refs.copyBtn as HTMLButtonElement[]

    setTimeout(() => {
      List.style.height = '250px'
      //Darken each button that has been copied
      if (copyBtn) {
        copyBtn.forEach((button) => {
          if (button.dataset.copied === 'true') {
            button.style.backgroundColor = 'black'
          }
        })
      }
    }, 5)
  }
})
</script>

<template>
  <article class="link-list" ref="list">
    <div class="link" v-for="links in shortenStore.LinkList" :key="links.id">
      <div class="link-full">{{ links.originalLink }}</div>
      <div class="link-short">
        <a :href="links.fullShortLink">{{ links.shortLink }}</a>
        <button ref="copyBtn" :data-copied="links.copied" :data-id="links.id" @click="copyLink">
          {{ !links.copied ? 'Copy' : 'Copied!' }}
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/fonts';
@import '@/assets/mixins';
.link-list {
  @include flex(column nowrap, flex-start);
  padding: 0.5rem;
  width: 100%;
  height: 0px;
  gap: 1rem;
  background: $white;
  overflow-y: auto;
  //Transition
  transition: height 0.5s;
  .link {
    @include borderShadow2();
    @include flex(column nowrap, space-between, flex-start);
    width: 100%;
    border-radius: 10px;
    padding: 0.5rem;
    font-family: font(normal, $fontSecondary);
    font-size: $size1;
    &-full {
      color: $black;
      border-bottom: 1px solid $black;
      width: 100%;
      padding: 0.5rem 0;
    }
    &-short {
      @include flex(column nowrap, space-between, flex-start);
      padding: 0.5rem 0;
      gap: 0.5rem;
      width: 100%;
      a {
        text-decoration: none;
        font-weight: bold;
      }
      button {
        @include button(100%, auto, $primaryColor);
        @include font();
        color: $white;
        padding: 0.5rem;
        font-size: $size2;
        transition: background-color 1s;
      }
    }
  }
}

@media (min-width: 600px) {
  .link-list {
    .link {
      @include borderShadow2();
      @include flex(row nowrap, space-between, center);
      &-full {
        border-bottom: none;
        width: 60%;
      }
      &-short {
        @include flex(row nowrap, space-between, center);
        width: 40%;
        a {
          width: 40%;
          text-align: center;
        }
        button {
          @include button(60%, auto, $primaryColor);
        }
      }
    }
  }
}
</style>
