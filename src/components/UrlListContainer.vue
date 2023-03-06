<script lang="ts">
import { defineComponent } from 'vue'
import InputForm from './InputForm.vue'
import LinkList from './LinkList.vue'

type DataState = {
  showList: boolean
}
export default defineComponent({
  data: (): DataState => ({
    showList: false
  }),
  components: { InputForm, LinkList },
  methods: {
    showLinkList(e?: boolean | MouseEvent): void {
      if (typeof e === 'boolean') {
        this.showList = e
      } else {
        this.showList = !this.showList
      }
    }
  }
})
</script>

<template>
  <div class="container">
    <div class="url-list-container">
      <InputForm @showHiddenLinkList="showLinkList" />
      <div class="arrow">
        <button @click="showLinkList">
          Lists <i v-if="!showList" class="fa-solid fa-chevron-down"></i>
          <i v-else class="fa-solid fa-chevron-up"></i>
        </button>
      </div>
    </div>
    <LinkList v-if="showList" />
  </div>
</template>

<style lang="scss">
@import '@/assets/colors';
@import '@/assets/fonts';
@import '@/assets/mixins';
.container {
  @include flex(column nowrap, flex-start, center);
  gap: 4rem;
  width: 100%;
}
.url-list-container {
  @include borderShadow;
  @include flex(column nowrap, center, flex-start);
  gap: 2rem;
  width: 100%;
  height: auto;
  border-radius: 20px;
  padding: 1rem 0;
  border-radius: 10px;
  .arrow {
    width: 100%;
    @include flex();
    button {
      @include button(auto, auto);
      color: $black;
      font-size: $size2;
      cursor: pointer;
    }
  }
}
@media (min-width: 600px) {
  .url-list-container {
    width: 90%;
  }
}
</style>
