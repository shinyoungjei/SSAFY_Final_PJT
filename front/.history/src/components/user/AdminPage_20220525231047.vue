<template>
  <b-container v-if="loginUserInfo">
    <div style="height: 60px"></div>
    <b-row style="text-align: center">
      <b-col class="text-primary font-weight-bold">
        <h1 style="font-size: 55px">관리 페이지</h1>
      </b-col>
    </b-row>
    <div style="height: 20px"></div>
    <div style="height: 500px">
      <b-row>
        <!-- 좌측 목록 -->
        <b-col cols="2 text-center">
          <div
            class="text-center text-dark font-weight-bold"
            style="font-size: 20px"
          >
            회원 정보관리
          </div>
          <hr style="background-color: black" />
          <div>
            <b-button
              @click="mvView"
              style="width: 100%"
              variant="outline-primary"
            >
              개인정보 조회
            </b-button>
          </div>
          <div>
            <b-button
              @click="mvModify"
              style="width: 100%"
              variant="outline-primary"
              class="mt-1"
            >
              개인정보 변경
            </b-button>
          </div>
          <div>
            <b-button
              @click="mvChange"
              style="width: 100%"
              variant="outline-primary"
              class="mt-1"
            >
              비밀번호 변경
            </b-button>
          </div>
          <div>
            <b-button
              @click="mvDelete"
              style="width: 100%"
              variant="outline-primary"
              class="mt-1"
            >
              회원 탈퇴
            </b-button>
          </div>
        </b-col>
        <b-col cols="10 text-center">
          <!--좌측 목룍 종료-->
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

const userStore = "userStore";

export default {
  data() {
    return {
      mode: "view",
      user: {
        id: "",
        name: "",
        email: "",
        contact: "",
      },
      mypass: "",
      newpass: "",
      newpassTwo: "",
      chagePass: "",
    };
  },

  component: {},
  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
  },

  methods: {
    ...mapActions(userStore, ["doModifyUser", "doDeleteUser"]),
    // 메인 이동
    main() {
      this.$router.push("/");
    },
    // 중간창 이동.
    mvView() {
      this.mode = "view";
    },
    mvModify() {
      this.mode = "mvModify";
    },
    mvChange() {
      this.mode = "mvChange";
    },
    mvDelete() {
      this.mode = "mvDelete";
    },
    // 수정하기
    userModify() {
      let user = {
        id: this.loginUserInfo.id,
        name: this.loginUserInfo.name,
        pass: this.loginUserInfo.pass,
        email: this.loginUserInfo.email,
        contact: this.loginUserInfo.contact,
      };
      this.doModifyUser(user);
      this.$router.push("/");
    },

    //탈퇴하기
    userDelete() {
      if (confirm("회원탈퇴성공")) {
        this.doDeleteUser(this.loginUserInfo.name);
        this.$store.commit("userStore/LOGOUT");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
