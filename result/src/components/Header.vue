<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <div class="header__logo">
            <router-link :to="{ name: 'Home', params: {} }">e-Shop</router-link>
          </div>
        </div>
        <div class="col-4">
          <div class="header__search">
            <form action="">
              <button class="header__search-icon">
                <img src="@/images/search.svg" alt="" />
              </button>

              <div class="header__search-input">
                <input type="text" placeholder="Пошук" />
              </div>
              <button class="header__search-button">Шукати</button>
            </form>
          </div>
        </div>
        <div class="col-6">
          <div>
            <ul>
              <li>
                <router-link :to="{ name: 'Catalog', params: {} }"
                  >Каталог</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Payments', params: {} }"
                  >Оплата</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Delivery', params: {} }"
                  >Доставка</router-link
                >
              </li>
              <li style="position: relative;">
                <router-link :to="{name: 'Cart', params: {}}">
                <img class="cart-img" src="@/images/cart.svg" alt="" /> </router-link>
                <span><CartCounter/></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCounter from "@/components/CartCounter.vue"
export default {
  components:{
    CartCounter,
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row {
  justify-content: space-between;
  display: flex;
  align-items: center;
  // background: yellow;
}

.col-4 {
  // background: tan;
}
.col-6 {
  // background: teal;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: end;
  //  background: chartreuse;
  margin: 0;
  margin-left: auto;
  padding: 0;
}
ul > li {
  padding: 0px 30px;
  // background: tomato;
}
.header {
  height: 60px;
}
.header__logo {
  font-family: Roboto;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}

a {
  text-decoration: none;
  color: white;
}
.cart-img {
  height: 31px;
  padding-left: 30px;
}
.header__search {
  //  background: olivedrab;
  width: 372px;
  height: 31px;
  form {
    display: flex;
  }
}
.header__search-icon {
  border: none;
  border-radius: 4px 0px 0px 4px;
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  // background: rgb(133, 133, 143);
  position: relative;
}

.header__search-input {
  display: inline;
  background: crimson;
  input {
    outline: none;
    border: none;
    height: 31px;
  }
}
.header__search-button {
  border: none;
  height: 31px;
  background: #ff842c;
  border-radius: 0px 4px 4px 0px;
}
</style>
