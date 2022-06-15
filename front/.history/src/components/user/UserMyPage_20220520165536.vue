<template>
  <b-container class="mt-4" v-if="loginUserInfo">
    <!-- Header-->
    <b-row>
      <b-col>
        <b-alert variant="secondary" show class="text-center"
          ><h3>MyPage</h3></b-alert
        >
      </b-col>
    </b-row>
    <!-- Header-->
    <b-row>
      <b-col></b-col>
      <b-col cols="2">
        <div class="mt-3 mb-3">
          <b-button v-b-modal.modal-1 variant="outline-primary"
            >정보조회</b-button
          >
          <b-modal id="modal-1" title="회원 정보">
            <b-container class="mt-2 text-center">
              <b-row>
                <b-col></b-col>
                <b-col>아이디</b-col><b-col>{{ loginUserInfo.id }}</b-col>
                <b-col></b-col>
              </b-row>
              <b-row>
                <b-col></b-col>
                <b-col>이름</b-col><b-col>{{ loginUserInfo.name }}</b-col>
                <b-col></b-col>
              </b-row>
            </b-container>
          </b-modal>
        </div>
        <div class="mt-3 mb-3">
          <b-button variant="primary" href="#" class="mr-1">정보수정</b-button>
        </div>
        <div>
          <b-button variant="danger" href="#">회원탈퇴</b-button>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>

    <b-col cols="2" id="left">
      <div class="ml-3">
        <b-button
          v-b-modal.modal-1
          variant="outline-primary"
          style="width: 200px"
          >정보 조회</b-button
        >
        <b-modal id="modal-1" title="회원 정보">
          <b-container class="mt-2 text-center">
            <b-row>
              <b-col></b-col>
              <b-col>아이디</b-col><b-col>{{ loginUserInfo.id }}</b-col>
              <b-col></b-col>
            </b-row>
            <b-row>
              <b-col></b-col>
              <b-col>이름</b-col><b-col>{{ loginUserInfo.name }}</b-col>
              <b-col></b-col>
            </b-row>
          </b-container>
        </b-modal>
      </div>
      <div class="ml-3 mt-3">
        <b-button variant="success" style="width: 200px">정보 수정</b-button>
      </div>
      <div class="ml-3 mt-3">
        <b-button variant="danger" style="width: 200px">회원 탈퇴</b-button>
      </div>
      <div
        style="
          text-align: left;
          width: 200px;
          margin: 20px auto;
          border-bottom: 1px solid white;
          font-weight: bold;
        "
      >
        <span class="ml-1" style="font-size: 20px">이동하기</span>
      </div>
      <div class="ml-3 mt-3">
        <b-button variant="warning" style="width: 200px">메인으로</b-button>
      </div>
      <div class="ml-3 mt-3">
        <b-button variant="light" style="width: 200px">로그아웃</b-button>
      </div>
    </b-col>
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
