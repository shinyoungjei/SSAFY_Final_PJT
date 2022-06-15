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
                <div>
                  <b-table striped hover :items="items"></b-table>
                </div>
              </b-col>
              <b-col cols="1"></b-col>
            </b-row>
            <b-row>
              <b-col cols="1"></b-col>
              <b-col> </b-col>
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

    <b-row class="mt-3 border border-secondary">
      <b-col class="bg-light p-2 pl-5 text-left">
        <!-- <span :class="{ completed: qnaChat.completed }" @click="statusChange">{{
          qnaChat.title
        }}</span> -->
        <b-row class="mt-2">
          <b-col cols="4" class="font-weight-bold"> 작성자 : zerojei0423</b-col>
          <b-col></b-col>
          <b-col cols="3" class="text-right"> 등록일 : 2022.05.23 </b-col>
        </b-row>
        <b-row>
          <b-col>
            <hr style="background-color: black" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="8"> TEST </b-col>

          <b-col>
            <div class="text-right">추천 : 5개</div>
            <div class="mt-2">
              <b-row>
                <b-col cols="6"></b-col>
                <b-col class="text-right">
                  <b-button variant="outline-dark" @click="cancelTodo"
                    >삭제</b-button
                  ></b-col
                >
                <b-col class="text-left"
                  ><b-button variant="outline-dark" @click="modifyAnswer"
                    >수정</b-button
                  ></b-col
                >
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<b-col>
                  <b-button
                    variant="outline-dark"
                    class="ml-5"
                    @click="cancelTodo"
                    >삭제</b-button
                  >
                </b-col>
<b-col>
                  <b-button
                    variant="outline-dark"
                    class="ml-5 mt-2"
                    @click="modifyAnswer"
                    >수정</b-button
                  >
                </b-col>

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
        { 회원번호: 3, 회원ID: "test3", 이메일: "Wilson" },
        { 회원번호: 4, 회원ID: "test4", 이메일: "Carney" },
      ],
    };
  },

  component: {},
  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
  },

  methods: {
    ...mapActions(userStore, ["doModifyUser", "doDeleteUser"]),

    modifyAnswer() {},
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
