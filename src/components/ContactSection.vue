<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <section id="Contact" class="contact">
    <div class="contact-info">
      <a href="https://github.com/Nosa-Drexx" target="_blank"
        ><i class="fa-brands fa-github socials"></i
      ></a>
      <a href="https://www.linkedin.com/in/nosa-egharevba/" target="_blank"
        ><i class="fa-brands fa-linkedin-in socials"></i
      ></a>
      <a href="https://twitter.com/NosaDrexx" target="_blank"
        ><i class="fa-brands fa-twitter socials"></i
      ></a>
      <a href="mailto:nosaegharevba01@gmail.com" target="_blank"
        ><i class="fa-solid fa-envelope socials"></i
      ></a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/colors';
@import '@/assets/fonts';
@import '@/assets/mixins';
.contact {
  @include flex();
  width: 100vw;
  height: 400px;
  background: $white url('@/assets/images/contact.svg');
  background-repeat: no-repeat;
  background-size: cover;
  .contact-info {
    @include flex(row nowrap, space-between);
    margin-top: 100px;
    width: 90%;
    max-width: 1000px;
    a {
      .socials {
        font-size: $size7;
        color: $white;
        cursor: pointer;
      }
    }
  }
}
@media (min-width: 600px) {
  .contact {
    height: 900px;
    .contact-info {
      margin-top: 300px;
    }
  }
}
</style>
