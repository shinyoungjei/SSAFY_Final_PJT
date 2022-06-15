<template>
  <b-container>
    <div style="height: 150px"></div>
    <div>
      <b-form>
        <div>
          <h2 class="text-center">HappyHouse signup</h2>
          <br />
        </div>
        <div>
          <label for="id">ID : </label>
          <b-form-input
            id="id"
            class="input"
            placeholder="아이디"
            v-model="id"
          />
        </div>
        <div class="mt-3">
          <label for="name">Name : </label>
          <b-form-input
            id="name"
            class="input"
            placeholder="이름"
            v-model="name"
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
          <b-button class="mr-1" variant="outline-primary" @click="registUser"
            >회원가입</b-button
          >
          <b-button variant="outline-success" :to="{ name: `home` }"
            >메인으로</b-button
          >
        </div>
        <div class="mt-3">
          회원이라면
          <b-button variant="outline-warning" :to="{ name: `signIn` }"
            >로그인</b-button
          >
          바로가기!
        </div>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";

const userStore = "userStore";

export default {
  data() {
    return {
      id: "",
      name: "",
      pass: "",
    };
  },

  methods: {
    ...mapActions(userStore, ["doRegist"]),

    registUser() {
      const user = {
        id: this.id,
        name: this.name,
        pass: this.pass,
      };

      await this.doRegist(user);
    },
  },
};
</script>

<style></style>
