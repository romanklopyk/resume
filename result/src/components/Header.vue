<template>
  <div class="header">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <div>
              <router-link :to="{ name: 'Home', params: {} }"
                >e-Shop</router-link
              >
            </div>
          </div>
          <div class="col-4">
            <div>
              Пошук
            </div>
          </div>
          <div class="col-6">
            <ul>
              <!--  <li><router-link :to="{ name: 'user', params: { userId: 123 }}">Каталог</router-link></li> -->
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-fluid {
  background: black;
}
.container {
  background: gold;
}
.col {
  color: white;
}
.row {
  align-items: center;
  background: coral;
}
ul {
  list-style: none;
  display: flex;
  align-items: center;
  background: chartreuse;
  margin: 0;
  padding: 0;
}
ul > li {
  padding: 5px;
}
.header {
  height: 60px;
}
</style>
