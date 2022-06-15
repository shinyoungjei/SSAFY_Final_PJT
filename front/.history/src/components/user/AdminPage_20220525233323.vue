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
              회원정보 조회
            </b-button>
          </div>
          <div></div>
        </b-col>
        <b-col cols="10 text-center">
          <!--좌측 목룍 종료-->
          <!--개인정보 조회 목록-->
          <template v-if="mode === `view`">
            <b-row>
              <b-col>
                <div
                  class="text-left text-dark font-weight-bold"
                  style="font-size: 20px"
                >
                  회원 정보관리 > 회원정보 조회
                </div>
                <hr style="background-color: black" />
                <div style="height: 10px"></div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="4" class="font-weight-bold mb-3">
                회원전체정보 조회</b-col
              >
              <b-col></b-col>
            </b-row>
            <b-row>
              <b-col cols="1"></b-col>
              <b-col>
                <!-- 회원 목록 -->
                <template v-if="mode === 'view'">
                  <div
                    class="memberTable"
                    v-for="(item, idx) in notices"
                    :key="idx"
                  >
                    <div style="height: 70px; text-align: left">
                      <img
                        class="ml-5 mt-2"
                        src="@/assets/heart.png"
                        style="width: 45px"
                      />
                      <span
                        class="ml-2"
                        style="
                          position: relative;
                          top: 13px;
                          font-weight: bold;
                          font-size: 30px;
                        "
                        >{{ item.subject }}</span
                      >
                      <img
                        @click="remove(item.subject)"
                        src="@/assets/heart.png"
                        style="
                          cursor: pointer;
                          width: 40px;
                          float: right;
                          margin-top: 10px;
                          margin-right: 20px;
                        "
                      />
                    </div>

                    <div style="height: 70px">
                      <b-row class="ml-5 mr-5">
                        <b-col class="section">
                          <span class="txt">{{ item.membername }}</span>
                          <img class="img" src="@/assets/heart.png" />
                        </b-col>
                        <b-col class="ml-3 section">
                          <span class="txt">{{ item.memberpwd }}</span>
                          <img class="img" src="@/assets/heart.png" />
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </template>
              </b-col>
              <b-col cols="1"></b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col></b-col>
              <b-col>
                <b-button
                  @click="main"
                  style="padding: 5px 20px"
                  variant="outline-primary"
                  class="mt-1"
                >
                  돌아가기
                </b-button>
              </b-col>
              <b-col> </b-col>
            </b-row>
          </template>
          <!--개인정보 조회 목록 종료-->
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

      items: [
        { 회원번호: 1, 회원ID: "test1", 이메일: "test@test" },
        { 회원번호: 2, 회원ID: "test2", 이메일: "test@test" },
        { 회원번호: 3, 회원ID: "test3", 이메일: "test@test" },
        { 회원번호: 4, 회원ID: "test4", 이메일: "test@test" },
      ],
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
