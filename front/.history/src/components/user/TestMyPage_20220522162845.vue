<template>
  <b-container v-if="loginUserInfo">
    <div style="height: 30px"></div>
    <div class="text-center" style="font-size: 40px">
      <b-row>
        <b-col class="bg-primary"></b-col>
        <b-col
          class="text-white bg-primary font-weight-bold"
          style="font-size: 40px"
          >My Happy House</b-col
        >
        <b-col class="bg-primary"></b-col>
      </b-row>
    </div>
    <div style="height: 30px"></div>
    <div style="height: 1000px">
      <b-row>
        <!-- 좌측 목록 -->
        <b-col cols="2 text-center">
          <div class="text-center text-primary" style="font-size: 25px">
            내 정보관리
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
          <!--개인정보 조회 목록-->
          <template v-if="mode === `view`">
            <b-row>
              <b-col>
                <div style="height: 70px"></div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" class="font-weight-bold"> 개인정보 조회</b-col>
              <b-col></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col>
                <b-input-group class="mt-2">
                  <b-input-group-prepend is-text>
                    회원ID
                  </b-input-group-prepend>
                  <b-form-input
                    class="text-center"
                    readonly
                    v-model="loginUserInfo.id"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="2"></b-col>
            </b-row>

            <b-row>
              <b-col cols="2"></b-col>
              <b-col>
                <b-input-group class="mt-2">
                  <b-input-group-prepend is-text>
                    회원명
                  </b-input-group-prepend>
                  <b-form-input
                    class="text-center"
                    readonly
                    v-model="loginUserInfo.name"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="2"></b-col>
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
          <!--개인정보 수정 목록-->
          <template v-if="mode === `mvModify`">
            <b-row>
              <b-col>
                <div style="height: 70px"></div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" class="font-weight-bold"> 개인정보 변경</b-col>
              <b-col></b-col>
            </b-row>

            <b-row>
              <b-col cols="2"></b-col>
              <b-col>
                <b-input-group class="mt-2">
                  <b-input-group-prepend is-text>
                    회원ID
                  </b-input-group-prepend>
                  <b-form-input
                    class="text-center"
                    readonly
                    v-model="loginUserInfo.id"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="2"></b-col>
            </b-row>

            <b-row>
              <b-col cols="2"></b-col>
              <b-col>
                <b-input-group class="mt-2">
                  <b-input-group-prepend is-text>
                    회원명
                  </b-input-group-prepend>
                  <b-form-input
                    class="text-center"
                    v-model="loginUserInfo.name"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="2"></b-col>
            </b-row>

            <b-row>
              <b-col cols="2"></b-col>
              <b-col>
                <b-input-group class="mt-2">
                  <b-input-group-prepend is-text>
                    비밀번호
                  </b-input-group-prepend>
                  <b-form-input
                    type="password"
                    class="text-center"
                    v-model="loginUserInfo.pass"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="2"></b-col>
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
                <b-button
                  @click="userModify"
                  style="padding: 5px 20px"
                  variant="outline-primary"
                  class="ml-4"
                >
                  저장하기
                </b-button>
              </b-col>
              <b-col> </b-col>
            </b-row>
          </template>
          <!--개인정보 수정 목록 종료-->
          <!--비밀번호 변경-->
          <b-row>
            <b-col>
              <div style="height: 70px"></div>
            </b-col>
          </b-row>
          <template v-if="mode === `mvChange`">
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" class="font-weight-bold"> 비밀번호 변경</b-col>
              <b-col></b-col>
            </b-row>

            <b-row>
              <b-col cols="2"></b-col>
              <b-col>
                <b-input-group class="mt-2">
                  <b-input-group-prepend is-text>
                    현재 비밀번호
                  </b-input-group-prepend>
                  <b-form-input
                    class="text-center"
                    v-model="loginUserInfo.name"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="2"></b-col>
            </b-row>

            <b-row>
              <b-col cols="2"></b-col>
              <b-col>
                <b-input-group class="mt-2">
                  <b-input-group-prepend is-text>
                    변경 비밀번호
                  </b-input-group-prepend>
                  <b-form-input
                    class="text-center"
                    v-model="loginUserInfo.name"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="2"></b-col>
            </b-row>

            <b-row>
              <b-col cols="2"></b-col>
              <b-col>
                <b-input-group class="mt-2">
                  <b-input-group-prepend is-text>
                    비밀번호 확인
                  </b-input-group-prepend>
                  <b-form-input
                    class="text-center"
                    v-model="loginUserInfo.name"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="2"></b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col></b-col>
              <b-col>
                <b-button
                  @click="main"
                  style="padding: 5px 20px"
                  variant="outline-primary"
                >
                  돌아가기
                </b-button>
                <b-button
                  style="padding: 5px 20px"
                  variant="outline-primary"
                  class="ml-4"
                >
                  저장하기
                </b-button>
              </b-col>
              <b-col> </b-col>
            </b-row>
          </template>
          <!--비밀번호 변경 종료-->
          <!--회원탈퇴-->

          <template v-if="mode === `mvDelete`">
            <b-row>
              <b-col>
                <div style="height: 10px"></div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" class="font-weight-bold"> 회원 탈퇴</b-col>
              <b-col></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col>
                <b-input-group class="mt-2">
                  <b-input-group-prepend is-text>
                    비밀번호 입력
                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    class="text-center"
                    v-model="loginUserInfo.pass"
                  />
                </b-input-group>
              </b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col></b-col>
              <b-col>
                <b-button
                  @click="main"
                  style="padding: 5px 20px"
                  variant="outline-primary"
                >
                  돌아가기
                </b-button>
                <b-button
                  @click="userDelete"
                  style="padding: 5px 20px"
                  variant="outline-primary"
                  class="ml-4"
                >
                  탈퇴하기
                </b-button>
              </b-col>
              <b-col> </b-col>
            </b-row>
          </template>
          <!--회원탈퇴종료-->
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
      },
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
