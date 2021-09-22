<template>
  <div class="product-item">
    <div class="product-image">
      <img v-bind:src="product.image" alt="" />
    </div>
    <div class="product-text">
      <h2 class="product-title">
       <router-link :to="{ name: 'Product', params: {id: product.id}}">
         {{ product.title }} </router-link> 
          
      
      </h2>
      <div class="product-price">{{ product.price }} USD</div>
      <button class="product-to-cart" @click="addToCart(product.id)">
        До кошика
      </button>
      <Modal/>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
  props: ["product"],
  components: {
    Modal
  },
  methods: {
    addToCart(product_id) {
      var item = {
        count: 1,
        id: product_id,
      };
      this.$bvModal.show('item-added');
      window.localStorage.setItem("cart", JSON.stringify(item));
      // alert("Товар додано " + product_id);
    },
  },
};
</script>

}
<style lang="scss" scoped>
.product-item {
  width: 300px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  //  background: chartreuse;
  margin-right: 2px;
}

.product-image {
  display: flex;
  justify-content: center;
  //  background: chocolate;
  img {
    max-width: 200px;
    max-height: 150px;
  }
}
.product-text {
  // background: cornflowerblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}
.product-title {
  font-size: 18px;
  width: 75%;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}
.product-price {
  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #009d35;
}
.product-to-cart {
  //   width: 191px;
  height: 65px;
  display: block;
  box-sizing: border-box;
  padding: 15px 40px;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  background-color: #ff842c;
  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  border: none;
}
a{
  text-decoration: none;
  color: #000;
}
</style>
