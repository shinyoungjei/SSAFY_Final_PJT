<template>
  <div id="app">
    <!--<Nav id="nav" />-->
    <!--<top-header></top-header>-->
    <router-view />
    <bottom />
  </div>
</template>

<script>
//import Nav from "@/components/common/Nav.vue";
//import TopHeader from "@/components/common/Header.vue";
import Bottom from "@/components/common/Bottom.vue";

export default {
  components: {
    //Nav,
    //TopHeader,
    Bottom,
  },

  created() {
    const script = document.createElement("script");
    /* global kakao */
    script.onload = () => kakao.maps.load(this.initMap);
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=625ac9c5a9d45132efd4a2ff4f97473d";
    document.head.appendChild(script);
  },
};
</script>

<style scoped>
.container-fluid {
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
}
@import "@/assets/main.css";
#nav {
  padding: 5px;
}
</style>
