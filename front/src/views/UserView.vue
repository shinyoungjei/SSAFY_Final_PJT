<template>
  <b-container fluid>
    <navi-bar style="z-index: 100" />
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <div style="height: 80px"></div>
        <router-view></router-view
      ></b-col>
      <b-col></b-col>
    </b-row>
    <div style="height: 150px"></div>
  </b-container>
</template>

<script>
import NaviBar from "@/components/common/NaviBar.vue";
export default {
  components: {
    NaviBar,
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style></style>
