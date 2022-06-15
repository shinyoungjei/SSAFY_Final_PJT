<template>
  <b-container fluid id="navi">
    <div id="top">
      <router-link to="/notice" class="link">공지사항</router-link>
      <router-link to="/aptDeal" class="link">매매정보</router-link>
      <router-link to="/area" class="link">관심목록</router-link>
      <img
        src="@/assets/heartRed.png"
        @click="goHome"
        style="padding-right: 200px; height: 100px"
      />
      <router-link to="/question" class="link2">질문하기</router-link>
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
