<template>
  <div class="home">
    <b-alert show>home </b-alert>
    <Carousel />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Vue-carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>
