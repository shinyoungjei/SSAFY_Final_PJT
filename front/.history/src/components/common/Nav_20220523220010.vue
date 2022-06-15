<template>
  <b-navbar toggleable="lg" class="nav" type="dark" variant="primary">
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

    <!--
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
    </b-navbar-nav> -->
    <!--TEST-->

    <b-navbar-nav class="ml-auto" v-if="loginUserInfo">
      <b-nav-item class="align-self-center"
        ><b-avatar
          variant="primary"
          v-text="loginUserInfo ? loginUserInfo.id.charAt(0).toUpperCase() : ''"
        ></b-avatar
        >{{ loginUserInfo.name }}({{ loginUserInfo.id }})님
        환영합니다.</b-nav-item
      >
      <b-nav-item class="align-self-center"
        ><router-link :to="{ name: 'mypage' }" class="link align-self-center"
          >내정보보기</router-link
        ></b-nav-item
      >
      <b-nav-item class="link align-self-center" @click.prevent="logout"
        >로그아웃</b-nav-item
      >
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto" v-else>
      <b-nav-item-dropdown right>
        <template #button-content>
          <b-icon icon="people" font-scale="2"></b-icon>
        </template>
        <b-dropdown-item href="#"
          ><router-link :to="{ name: 'signUp' }" class="link"
            ><b-icon icon="person-circle"></b-icon> 회원가입</router-link
          ></b-dropdown-item
        >
        <b-dropdown-item href="#"
          ><router-link :to="{ name: 'signIn' }" class="link"
            ><b-icon icon="key"></b-icon> 로그인</router-link
          ></b-dropdown-item
        >
      </b-nav-item-dropdown>
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
