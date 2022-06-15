<template>
  <b-navbar toggleable="lg" class="nav" type="dark" variant="panel-primary">
    <b-navbar-brand to="/">HappyHouse</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/notice">공지사항</b-nav-item>
        <b-nav-item to="/aptDeal">매매정보</b-nav-item>
        <b-nav-item to="/area">관심지역</b-nav-item>
        <b-nav-item to="/question">질문하기</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-icon icon="bell-fill" font-scale="3"></b-icon>
          </template>
          <template v-if="loginUserInfo.id">
            <b-dropdown-item @click="logout">로그아웃</b-dropdown-item>
            <b-dropdown-item :to="{ name: `mypage` }"
              >마이페이지</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: `testmypage` }"
              >TEST페이지</b-dropdown-item
            >
          </template>
          <template v-else>
            <b-dropdown-item :to="{ name: 'regist' }">회원가입</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'login' }">로그인</b-dropdown-item>
          </template>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
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
