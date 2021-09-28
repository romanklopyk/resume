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
          <button class="product-to-cart" @click="addToCart(product.id)">
            До кошика
          </button>
          <Modal />
        </div>
      </div>
    </div>
    <div class="container product-more">
      <div class="row">
        <div class="col-12">
          <div class="more-header">
            Ще товари цієї ж категорії:
            <!-- {{ product_cat }} -->
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
import Modal from "@/components/Modal.vue";

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
    Modal,
  },
  computed: {
    getProductId() {
      return this.$route.params.id;
    },
  },
  watch: {
    getProductId: {
      handler() {
        this.getProduct();
      },
    },
  },

  methods: {
    getProduct() {
      fetch("https://fakestoreapi.com/products/" + this.getProductId)
        .then((res) => res.json())
        .then((json) => {
          this.product = json;
          //console.log("product.id", this.getProductId);
          this.getCategory();
        });
    },

    getCategory() {
      this.product_cat = this.product.category;
      console.log("product.cat", this.product_cat);
      this.getProductsInCategory();
    },

    getProductsInCategory() {
      fetch(
        "https://fakestoreapi.com/products/category/" +
          this.product_cat +
          "?limit=4"
      )
        .then((res) => res.json())
        .then((json) => {
          this.products = json;
          console.log("getProductsInCategory", this.products);
        });
    },
    addToCart(product_id) {
      var item = {
        count: 1,
        id: product_id,
      };
      this.$bvModal.show("item-added");
      window.localStorage.setItem("cart", JSON.stringify(item));
      // alert("Товар додано " + product_id);
    },
  },
  mounted() {
    this.getProduct();
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
.product-more .col > div {
  display: flex;
}
.product-one {
  padding: 40px;
}
.product-to-cart {
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
</style>
