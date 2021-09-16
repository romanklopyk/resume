<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mySlider">
            <carousel
              :per-page="1"
              :navigate-to="someLocalProperty"
              :mouse-drag="false"
            >
              <slide>
                <img src="@/images/Slide.png" alt="" />
              </slide>
              <slide>
                <img src="@/images/Slide.png" alt="" />
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss" scoped></style>
