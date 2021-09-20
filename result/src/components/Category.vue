<template>
  <div>
    <div>
      <p>1</p>
      <!--  <router-link :to="{name: 'Catalog', params: {id:category}}">  -->
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
        .then((json) => this.caT = json);
      // console.log("spysok katehorij - ", this.caT);  
    },
  },

  mounted() {
    this.getCat();
    
    
  },
};
</script>

<style lang="scss" scoped></style>
