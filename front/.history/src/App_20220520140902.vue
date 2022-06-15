<template>
  <div id="app">
    <Nav id="nav" />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/common/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style>
@import "@/assets/main.css";
#nav {
  padding: 10px;
  margin-bottom: 20px;
}
</style>
