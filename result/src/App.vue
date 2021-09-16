<template>
  <div id="app">
    <div>
      <Header />
    </div>

    <div class="main">
      <router-view />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
body {
  font-family: "Roboto", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  margin-bottom: auto;
}
</style>
