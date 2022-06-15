<template>
  <b-container>
    <div>
      <div style="height: 150px"></div>
      <div>
        <div>
          <h2 class="text-center">HappyHouse Login</h2>
          <br />
        </div>
        <b-form>
          <div>
            <label for="id">ID : </label>
            <b-form-input
              id="id"
              class="input"
              placeholder="아이디"
              v-model="id"
            /><br />
          </div>
          <div class="mt-3">
            <label for="pass">Pass : </label>
            <b-form-input
              id="pass"
              type="password"
              class="input"
              placeholder="비밀번호"
              v-model="pass"
            /><br />
          </div>
          <div class="mt-3">
            <b-button
              class="mr-1"
              variant="outline-primary"
              @click.prevent="login"
              >로그인</b-button
            >
            <b-button variant="outline-success" :to="{ name: `home` }"
              >메인으로</b-button
            >
          </div>
          <div class="mt-3">
            비회원이라면
            <b-button variant="outline-warning" :to="{ name: `regist` }"
              >회원가입</b-button
            >
            바로가기
          </div>
        </b-form>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const userStore = "userStore";

export default {
  data() {
    return {
      id: "",
      pass: "",
    };
  },

  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
  },

  methods: {
    ...mapActions(userStore, ["doLogin"]),

    async login() {
      let user = {
        id: this.id,
        pass: this.pass,
      };
      await this.doLogin(user);

      if (this.loginUserInfo.id) {
        alert(`어서오세요. ${this.loginUserInfo.name}님.`);
        this.$router.push("/");
      } else {
        alert("아이디 또는 비밀번호를 확인해주세요.");
      }
    },
  },
};
</script>

<style></style>
