<template>
  <b-container fluid id="navi" class="text-center">
    <div id="top2">
      <span class="mr-3" id="profile" v-if="loginUserInfo.id"
        >{{ loginUserInfo.name }}님 환영합니다.
      </span>
    </div>
    <div id="top">
      <b-row>
        <b-col cols="5">
          <router-link to="/notice" class="link">공지사항</router-link>
          <router-link to="/aptDeal" class="link">매매정보</router-link>
          <router-link to="/area" class="link">관심지역</router-link>
        </b-col>
        <b-col>
          <img
            src="@/assets/zeroTwo.png"
            id="img"
            @click="mvMain"
            style="padding-right: 10px; height: 80px"
          />
        </b-col>
        <!-- <b-col cols="2">
          <router-link to="/question" class="link2">질문하기</router-link>
        </b-col> -->

        <b-col cols="5">
          <router-link to="/question" class="link2">Q&A</router-link>
          <router-link
            :to="{ name: 'login' }"
            class="link2"
            v-if="!loginUserInfo.id"
            >로그인
          </router-link>
          <router-link
            :to="{ name: 'regist' }"
            class="link2"
            v-if="!loginUserInfo.id"
            >회원가입
          </router-link>
          <router-link
            :to="{ name: `mypage` }"
            class="link2"
            v-if="loginUserInfo.id"
          >
            마이페이지
          </router-link>
          <a href="#" @click="logout" class="link2" v-if="loginUserInfo.id"
            >로그아웃
          </a>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
const userStore = "userStore";
export default {
  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
  },
  methods: {
    mvMain() {
      this.$router.push("/");
    },
    logout() {
      this.$store.commit("userStore/LOGOUT");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#navi {
  padding-right: 0;
  padding-left: 0;
  line-height: 75px;
  opacity: 0.9;
  height: 115px;
  position: fixed;
  border-bottom: 0.3px solid rgb(214, 212, 207);
  background-color: white;
}

.link {
  color: black;
  margin-left: 50px;
  font-weight: 500;
  font-size: 20px;
  float: left;
}

.link2 {
  color: black;
  margin-right: 50px;
  font-weight: 500;
  font-size: 20px;
  float: right;
}
.link3 {
  color: black;
  margin-right: 50px;
  font-weight: 500;
  font-size: 20px;
  float: center;
}

#top {
  margin-left: 30px;
  margin-right: 30px;
  height: 85px;
}

#top2 {
  height: 30px;
  background-color: rgb(29, 30, 31);
  line-height: 30px;
  color: rgb(194, 190, 183);
  text-align: right;
}

#img {
  cursor: pointer;
}
#a {
  color: rgb(194, 190, 183);
}
</style>
