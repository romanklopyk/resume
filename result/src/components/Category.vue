<template>
  <div>
    {{ Cat }}
  </div>
</template>

<script>
export default {

  data() {
    return {
      Cat: [],
    };
  },
  methods: {
    getCat() {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => console.log(json));
    },


    },

  mounted() {
    this.getCat();

  },
}
</script>

<style lang="scss" scoped></style>
