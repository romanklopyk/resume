<template>
  <div class="container">
    <div class="row">
      <div class="col" style="height:60px"></div>
    </div>

    <div class="row">
      <div class="col-3">
        <Category />
      </div>
      <div class="col-9">
        <h1>Всі товари</h1>
        <div class="product-list" >
          <div v-for="i in products" :key="i.id"  >
          <productCard  :product="i"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productCard from "@/components/ProductListItem.vue";
import Category from "@/components/Category.vue";

export default {
  data() {
    return {
      products: [],
      loadingError: false,
    };
  },
  components: {
    productCard,
    Category,
  },
  methods: {
    getProducts() {
      fetch("https://fakestoreapi.com/products")
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

<style lang="scss" scoped>
.product-list {
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
}
h2 {
}
</style>
