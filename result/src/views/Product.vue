<template>
  <div class="product">
    <!--  <h1>product</h1> -->
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img class="x" v-bind:src="product.image" alt="" />
        </div>
        <div class="col-6">
        <h3 class="product-title" v-text="product.title"></h3> 
          <h2 class="product-price"> {{ product.price }} USD</h2>
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
.product{
  min-height: calc(50vh - 60px);
  /* background: palegreen; */
  display: flex;
  align-items: center;

}
.x {
  max-width: 250px;
}
.product-price{
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
.product-title{
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
</style>
