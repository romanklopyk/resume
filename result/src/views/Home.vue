<template>
  <div class="home">
    <!-- <b-alert show>home </b-alert> -->
    <Carousel />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="product-list">
            <productCard v-for="i in products" :key="i.id" v-bind:product="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Vue-carousel.vue";
import productCard from "@/components/ProductListItem.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    productCard,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      fetch("https://fakestoreapi.com/products?limit=4")
        .then((res) => res.json())
        .then((json) => {
          this.products = json;
          //   console.log(json);
        })
        .catch((error) => {
          this.loadingError = true;
          //   console.log("Помилка");
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  justify-content: space-between;
}
</style>
