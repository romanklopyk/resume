<template>
  <div>
    <!--  <h1>product</h1> -->
    <div class="container">
      <div class="row">
        <div class="col-3">
          <img class="x" v-bind:src="product.image" alt="" />
        </div>
        <div class="col-3">
          <h3 v-text="product.title"></h3>
          <h2>$ {{ product.price }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product_id: null,
      product: {},
    };
  },
  methods: {
    getproductid() {
      this.product_id = this.$route.params.id;
      this.getproduct();
    },
    getproduct() {
      fetch("https://fakestoreapi.com/products/" + this.product_id)
        .then((res) => res.json())
        .then((json) => (this.product = json));
      console.log(this.product);
    },
  },
  mounted() {
    this.getproductid();
  },
};
</script>

<style>
.x {
  width: 250px;
}
</style>
