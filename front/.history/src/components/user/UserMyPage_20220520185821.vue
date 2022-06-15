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
      <b-col id="left">
        <!-- 정보조회 -->
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
        <!-- 정보조회 종료-->
        <!-- 정보수정 -->
        <div class="ml-3 mt-3">
          <b-button
            v-b-modal.modal-2
            variant="outline-primary"
            style="width: 200px"
            >정보 수정</b-button
          >
          <b-modal id="modal-2" title="수정하기">
            <b-container class="mt-2 text-center">
              <b-row>
                <b-col></b-col>
                <b-col>아이디 = </b-col><b-col>{{ loginUserInfo.id }}</b-col>
                <b-col></b-col>
              </b-row>
              <b-row>
                <b-col></b-col>
                <b-col>이름 = </b-col>
                <b-col>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    v-model="loginUserInfo.name"
                  />
                </b-col>
                <b-col></b-col>
              </b-row>
            </b-container>
          </b-modal>
        </div>
        <!-- 정보수정 종료 -->
        <!-- 회원탈퇴 -->
        <div class="ml-3 mt-3">
          <b-button
            variant="outline-primary"
            style="width: 200px"
            @click="moveUserDelete"
            >회원 탈퇴</b-button
          >
        </div>
        <!-- 회원탈퇴 종료 -->
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
          <b-button
            variant="warning"
            style="width: 200px"
            :to="{ name: `home` }"
            >메인으로</b-button
          >
        </div>
        <div class="ml-3 mt-3">
          <b-button variant="light" style="width: 200px">로그아웃</b-button>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const userStore = "userStore";

export default {
  components: {},
  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
  },

  methods: {
    ...mapActions(userStore, ["doModifyUser", "doDeleteUser"]),
    // 수정
    modify() {
      let user = {
        name: this.loginUserInfo.name,
      };
      this.doModifyUser(user);
      this.$router.push(`/mymage/${this.name}`);
    },

    // 삭제
    moveUserDelete() {
      if (confirm("회원탈퇴성공")) {
        this.doDeleteUser(this.loginUserInfo.name);
        // this.$store.commit("userStore/LOGOUT");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
