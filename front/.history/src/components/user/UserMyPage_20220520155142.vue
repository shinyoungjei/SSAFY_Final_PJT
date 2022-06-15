<template>
  <b-container class="mt-4" v-if="loginUserInfo">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>내정보</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <template #header>My Page</template>

        <div>내 정보 확인페이지입니다.</div>

        <hr class="my-4" />

        <b-container class="mt-4">
          <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="2" align-self="end">아이디</b-col
            ><b-col cols="4" align-self="start">{{ loginUserInfo.id }}</b-col>
            <b-col cols="2"></b-col>
          </b-row>
          <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="2" align-self="end">이름</b-col
            ><b-col cols="4" align-self="start">{{ loginUserInfo.name }}</b-col>
            <b-col cols="2"></b-col>
          </b-row>
          <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="2">비밀번호</b-col
            ><b-col cols="2">{{ loginUserInfo.pass }}</b-col>
            <b-col cols="2"></b-col>
          </b-row>
        </b-container>
        <hr class="my-4" />

        <b-button variant="primary" href="#" class="mr-1">정보수정</b-button>
        <b-button variant="danger" href="#">회원탈퇴</b-button>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

const userStore = "userStore";

export default {
  components: {},
  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
  },
};
</script>

<style></style>
