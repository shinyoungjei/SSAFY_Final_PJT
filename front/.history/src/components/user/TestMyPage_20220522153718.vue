<template>
  <b-container v-if="loginUserInfo">
    <div style="height: 30px"></div>
    <div class="text-center" style="font-size: 40px">My HappyHouse</div>
    <hr />
    <div style="height: 30px"></div>
    <div style="height: 1000px">
      <b-row>
        <b-col cols="2 text-center">
          <div class="text-center" style="font-size: 25px">내 정보관리</div>
          <hr />
          <div>
            <button @click="mvView" style="width: 80%">개인정보 조회</button>
          </div>
          <div>
            <button @click="mvModify" style="width: 80%" class="mt-1">
              개인정보 변경
            </button>
          </div>
          <div>
            <button @click="mvChange" style="width: 80%" class="mt-1">
              비밀번호 변경
            </button>
          </div>
          <div>
            <button @click="mvDelete" style="width: 80%" class="mt-1">
              회원 탈퇴
            </button>
          </div>
        </b-col>
        <b-col cols="10 text-center">
          <!--개인정보 조회 목록-->
          <template v-if="mode === `view`">
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
                <button @click="main" style="padding: 10px 30px">
                  돌아가기
                </button>
              </b-col>
              <b-col> </b-col>
            </b-row>
          </template>
          <!--개인정보 조회 목록 종료-->
          <!--개인정보 수정 목록-->
          <template v-if="mode === `mvModify`">
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

            <b-row class="mt-4">
              <b-col></b-col>
              <b-col>
                <button @click="main" style="padding: 10px 30px">
                  돌아가기
                </button>
                <button style="padding: 10px 30px" class="ml-4">
                  저장하기
                </button>
              </b-col>
              <b-col> </b-col>
            </b-row>
          </template>
          <!--개인정보 수정 목록 종료-->
          <!--비밀번호 변경-->
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
                <button @click="main" style="padding: 10px 30px">
                  돌아가기
                </button>
                <button style="padding: 10px 30px" class="ml-4">
                  저장하기
                </button>
              </b-col>
              <b-col> </b-col>
            </b-row>
          </template>
          <!--비밀번호 변경 종료-->
          <!--회원탈퇴-->
          <template v-if="mode === `mvDelete`">
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
                    type="password"
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
                <button @click="main" style="padding: 10px 30px">
                  돌아가기
                </button>
                <button style="padding: 10px 30px" class="ml-4">
                  탈퇴하기
                </button>
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
import { mapState } from "vuex";

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
    // 중간창 이동 끝
  },
};
</script>

<style></style>
