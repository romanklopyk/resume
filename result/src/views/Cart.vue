<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <img class="product-image" :src="product.image" alt="" />
      </div>
      <div class="col-7">
        <p class="product-title">{{ product.title }}</p>
      </div>
      <div class="col-3">
        <p class="product-price">{{ product.price }} USD</p>
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
    checkCartItems() {
      var item = window.localStorage.getItem("cart");
      if (item) {
        item = JSON.parse(item);
        this.product_id = item.id;
        this.getProduct();
        console.log(item.id);
      }
    },
    getProduct() {
      fetch("https://fakestoreapi.com/products/" + this.product_id)
        .then((res) => res.json())
        .then((json) => (this.product = json));
    },
  },
  mounted() {
    this.checkCartItems();
  },
};
</script>

<style lang="scss" scoped>
.container{
  padding: 20px;
}
.row {
 padding: 20px;
  align-items: center;
  background: #f5f5f5;
}
.product-image {
  max-width: 160px;
  padding: 20px;
  background: white;
}
.product-title{
   font-family: Roboto;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}
.product-price{
   font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #009d35;
}

</style>
