<template>
  <b-navbar toggleable="lg" class="nav" type="dark" variant="alert-primary">
    <b-navbar-brand href="#">
      <router-link to="/">
        <img
          src="@/assets/ssafy_logo.png"
          class="d-inline-block align-middle"
          width="100px"
          alt="ssafy"
        />
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">홈</b-nav-item>
        <b-nav-item to="/notice">공지사항</b-nav-item>
        <b-nav-item to="/aptDeal">매매정보</b-nav-item>
        <b-nav-item to="/area">관심지역</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav>
      <b-row class="mr-2">
        <b-col>
          <b-nav-item to="/question">질문하기</b-nav-item>
        </b-col>
      </b-row>
      <b-row v-if="loginUserInfo.id">
        <b-nav-item @click="logout"> 로그아웃 </b-nav-item>
        <b-nav-item :to="{ name: `testmypage` }" class="mr-4">
          마이페이지
        </b-nav-item>
      </b-row>
      <b-row v-else>
        <b-nav-item :to="{ name: 'regist' }">회원가입</b-nav-item>
        <b-nav-item :to="{ name: 'login' }" class="mr-4">로그인</b-nav-item>
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
