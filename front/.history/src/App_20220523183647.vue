<template>
  <div id="app">
    <Nav id="nav" />
    <b-row>
      <router-view />
    </b-row>
    <div style="height: 600px"></div>
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
