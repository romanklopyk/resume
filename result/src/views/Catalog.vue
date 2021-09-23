<template>
  <div class="container">
    <div class="row">
      <div class="col" style="height:60px"></div>
    </div>

    <div v-show="!isLoadData" class="row">
      <div class="col-3">
        <Category />
        <p></p>
      </div>
      <div class="col-9">
        <h1>{{ currentCategory }}</h1>
        <div class="product-list">
          <div v-for="i in products" :key="i.id">
            <productCard :product="i" />
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center mb-3">
      <b-spinner v-show="isLoadData" variant="primary" label=""></b-spinner>
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
      // category: null,
      isLoadData: false,
    };
  },

  components: {
    productCard,
    Category,
  },
  computed: {
    currentCategory() {
      return this.$route.params.category;
    },
  },
  watch: {
    currentCategory: {
      handler() {
        if (this.currentCategory == "all") {
          this.getProducts();
        } else {
          this.getProductsInCategory();
        }
      },
    },
  },

  methods: {
    /*  getCategoryId() {
      this.currentCategory = this.$route.params.category;
      // this.getProductsInCategory();
      this.choise();
    }, */

    choise() {
      if (this.currentCategory == "all") {
        this.getProducts();
      } else {
        this.getProductsInCategory();
      }
    },

    getProducts() {
      this.isLoadData = true;
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          this.products = json;
          this.isLoadData = false;
          //   console.log(json);
        })
        .catch((error) => {
          this.loadingError = true;
          //   console.log("Помилка");
          console.log(error);
        });
    },

    getProductsInCategory() {
      this.isLoadData = true;
      fetch(
        "https://fakestoreapi.com/products/category/" + this.currentCategory
      )
        .then((res) => res.json())
        .then((json) => {
          this.products = json;
          console.log(json);
          this.isLoadData = false;
        });
    },
  },
  mounted() {
    /* this.getCategoryId(); */
    this.choise();
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
}
</style>
