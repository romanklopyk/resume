<template>
  <div>
    <p class="category-title">Товари за категоріями</p>
    <div>
      <p>
        <router-link :to="{ name: 'Catalog', params: { category: 'all' } }"
          >Всі товари
        </router-link>
      </p>
      <p v-for="i in caT" :key="i">
        <router-link :to="{ name: 'Catalog', params: { category: i } }">{{
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
a {
  text-decoration: none;
  color: black;
}
</style>
