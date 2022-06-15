<template>
  <div id="app">
    <Nav id="nav" style="z-index: 100" />
    <router-view />
    <bottom />
  </div>
</template>

<script>
import Nav from "@/components/common/Nav.vue";
import Bottom from "@/components/common/Bottom.vue";

export default {
  components: {
    Nav,
    Bottom,
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
