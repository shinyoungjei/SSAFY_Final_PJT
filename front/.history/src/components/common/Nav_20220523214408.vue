<template>
  <b-navbar toggleable="lg" class="nav" type="dark" variant="primary">
    <!-- <b-navbar-brand to="/">HappyHouse</b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav> </b-collapse>
    <b-navbar-nav>
      <b-row>
        <b-col>
          <b-nav-item to="/notice">공지사항</b-nav-item>
        </b-col>
        <b-col>
          <b-nav-item to="/aptDeal">매매정보</b-nav-item>
        </b-col>
        <b-col>
          <b-nav-item to="/area">관심지역</b-nav-item>
        </b-col>
      </b-row>
    </b-navbar-nav>

    <b-navbar-nav>
      <b-navbar-brand to="/">HappyHouse</b-navbar-brand>
    </b-navbar-nav>
    <b-navbar-nav>
      <b-row class="mr-2">
        <b-col>
          <b-nav-item to="/question">질문하기</b-nav-item>
        </b-col>
      </b-row>
      <b-row v-if="loginUserInfo.id">
        <b-nav-item @click="logout"> 로그아웃 </b-nav-item>
        <b-nav-item :to="{ name: `testmypage` }"> 마이페이지 </b-nav-item>
      </b-row>
      <b-row v-else>
        <b-nav-item :to="{ name: 'regist' }">회원가입</b-nav-item>
        <b-nav-item :to="{ name: 'login' }">로그인</b-nav-item>
      </b-row>
    </b-navbar-nav>
  </b-navbar>
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
