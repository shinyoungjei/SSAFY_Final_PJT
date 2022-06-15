<template>
  <b-container fluid="navi">
    <div>
      <router-link to="/notice">공지사항</router-link>
      <router-link to="/aptDeal">공지사항</router-link>
      <router-link to="/area">공지사항</router-link>
      <img
        src="@/assets/heartRed.png"
        @click="goHome"
        style="padding-right: 200px; height: 100px"
      />
      <router-link to="/question">공지사항</router-link>
    </div>
  </b-container>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
