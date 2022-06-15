<template>
  <div id="app">
    <Nav id="nav" />
    <top-header></top-header>
    <router-view />
    <!-- <bottom /> -->
  </div>
</template>

<script>
import Nav from "@/components/common/Nav.vue";
// import Bottom from "@/components/common/Bottom.vue";
//import TopHeader from "@/components/common/Header.vue";

export default {
  components: {
    Nav,
    //   TopHeader,
    // Bottom,
  },
};
</script>

<style>
@import "@/assets/main.css";
#nav {
  padding: 20px;
  margin-bottom: 30px;
}
</style>
