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
      json:[]
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
};
</script>

<style lang="scss" scoped></style>
