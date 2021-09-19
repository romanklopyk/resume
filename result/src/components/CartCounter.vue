<template>
  <div >{{ count }}</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    checkItems() {
      var items = window.localStorage.getItem("cart");
      if (items) {
        this.count = 1;
      }
      console.log(items);
    },
  },
  mounted() {
    setInterval(() => {
      this.checkItems();
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
div{
    color:white;
    position: absolute;
    top: -15%;
    right: 15%;
    background: red;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
