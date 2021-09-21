<template>
  <div>
    <p class="category-title">Товари за категоріями</p>
    <div>
      <p>Всі товари</p>
      <p v-for="i in caT" :key="i">
        <router-link :to="{ name: 'Catalog', params: { i } }">{{
          i
        }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caT: [],
    };
  },
  computed: {},
  methods: {
    getCat() {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => (this.caT = json));
      // console.log("spysok katehorij - ", this.caT);
    },
  },

  mounted() {
    this.getCat();
  },
};
</script>

<style lang="scss" scoped>
.category-title {
  border-bottom: 1px solid black;
  width: 80%;
}
</style>
