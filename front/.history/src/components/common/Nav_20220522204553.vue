<template>
  <b-container fluid id="navi">
    <div id="top">
      <router-link to="/intro" class="link">소개</router-link>
      <router-link to="/board" class="link">공지사항</router-link>
      <router-link to="/deal" class="link">거래정보</router-link>

      <router-link to="/qna" class="link2">Q&A</router-link>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
const userStore = "userStore";

export default {
  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
  },

  methods: {
    logout() {
      this.$store.commit("userStore/LOGOUT");
    },
  },
};
</script>

<style></style>
