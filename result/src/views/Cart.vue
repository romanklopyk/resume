<template>
  <div>
    <div v-if="product_id" class="container cart">
      <div class="row row-cart">
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
      <div class="container">
        <div class="row">
          <div class="col-12 y">
            Оформити замовлення
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 x">
            Вас також можуть зацікавити
          </div>
        </div>
      </div>
      <!-- ще товари цієї ж категорії -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex">
              <productCard v-for="i in products" :key="i.id" :product="i" />
            </div>
          </div>
        </div>
      </div>
      <!-- end  ще товари цієї ж категорії -->
    </div>
    <div class="v-else" v-else>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Кошик замовлень</h1>
            <h2>На жаль, Ви ще нічого не додали до кошика</h2>
            <p>
              <router-link
                :to="{ name: 'Catalog', params: { category: 'all' } }"
                >До каталогу</router-link
              >
            </p>
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
    checkCartItems() {
      var item = window.localStorage.getItem("cart");
      if (item) {
        item = JSON.parse(item);
        this.product_id = item.id;
        this.getProduct();
      }
    },
    getProduct() {
      fetch("https://fakestoreapi.com/products/" + this.product_id)
        .then((res) => res.json())
        .then((json) => {
          this.product = json;
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
          console.log(json);
        });
    },
  },
  mounted() {
    this.checkCartItems();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
.row-cart {
  padding: 20px;
  align-items: center;
  background: #f5f5f5;
}
.product-image {
  max-width: 160px;
  padding: 20px;
  background: white;
}
.product-title {
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
.product-price {
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #009d35;
}
.clear {
  button {
    margin-left: auto;
    display: block;
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
}
.v-else {
  .col-12 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-align: center;
    font-family: Roboto;
    font-size: 36px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
    margin: 20px 0;
  }
  h2 {
    font-family: Roboto;
    font-size: 22px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ff842c;
    padding: 12px 0 16px;
    border-radius: 6px;
    background-color: rgba(255, 168, 0, 0.21);
    width: 542px;
  }
  p {
    margin: 20px 0;
    font-family: Roboto;
    font-size: 22px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    padding: 15px 0;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
    background-color: #ff842c;
    width: 178px;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: white;
  }
}
.x {
  font-family: Roboto;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  padding: 30px;
  text-align: left;
}
.y {
  width: 372px;
  height: 56px;
 
  margin: 0 auto;
  padding: 15px 63px 15px 67px;
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
}
</style>
