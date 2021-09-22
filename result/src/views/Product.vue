<template>
  <div class="product">
    <div class="container product-one">
      <div class="row">
        <div class="col-4">
          <img class="x" v-bind:src="product.image" alt="" />
        </div>
        <div class="col-6">
          <h3 class="product-title" v-text="product.title"></h3>
          <h2 class="product-price">{{ product.price }} USD</h2>
        </div>
      </div>
    </div>
    <div class="container product-more">
      <div class="row">
        <div class="col-12">
          <div class="more-header">
            Ще товари цієї ж категорії: <!-- {{ product_cat }} -->
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div>
              <productCard v-for="i in products" :key="i.id" :product="i" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productCard from "@/components/ProductListItem.vue";
export default {
  data() {
    return {
      product_id: null,
      product: {},
      product_cat: null,
      products: {},
    };
  },
  components: {
    productCard,
  },

  methods: {
    getProductId() {
      this.product_id = this.$route.params.id;
      this.getProduct();
    },

    getProduct() {
      fetch("https://fakestoreapi.com/products/" + this.product_id)
        .then((res) => res.json())
        .then((json) => {
          this.product = json;
          console.log("product.id", this.product.id);
          this.getCategory();
        });
    },

    getCategory() {
      this.product_cat = this.product.category;
      console.log("product.cat", this.product_cat);
      this.getProductsInCategory();
    },

    getProductsInCategory() {
      fetch("https://fakestoreapi.com/products/category/" + this.product_cat)
        .then((res) => res.json())
        .then((json) => {
          this.products = json;
          console.log("getProductsInCategory", this.products);
        });
    },
  },
  mounted() {
    this.getProductId();
  },
};
</script>

<style>
.product {
  min-height: calc(50vh - 60px);
  /* background: palegreen; */
  /* display: flex; */
  /* align-items: center; */
}
.x {
  max-width: 250px;
}
.product-price {
  font-family: Roboto;
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #009d35;
  padding-top: 20px;
}
.product-title {
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}
.product-more .more-header {
  font-family: Roboto;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  /* background: #009d35; */
  text-align: left;
  padding: 30px;
}
.product-more .col>div{
  display: flex;
}
.product-one{
  padding: 40px;
}
</style>
