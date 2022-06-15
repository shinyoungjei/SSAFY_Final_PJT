<template>
  <b-container>
    <div>
      <b-form>
        <div style="height: 150px"></div>
        <b-row style="text-align: center">
          <b-col class="text-primary font-weight-bold">
            <h1 style="font-size: 45px">SSHouse 회원가입</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col></b-col>
          <b-col cols="8">
            <div class="mt-3">
              <label for="name">Name : </label>
              <b-form-input
                id="name"
                class="input"
                placeholder="이름"
                v-model="name"
              /><br />
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
              <label for="email">이메일 : </label>
              <b-form-input
                id="email"
                class="input"
                placeholder="이메일"
                v-model="email"
              /><br />
            </div>
            <div class="mt-3">
              <label for="contact">H.P : </label>
              <b-form-input
                id="contact"
                class="input"
                placeholder="핸드폰 번호"
                v-model="contact"
              /><br />
            </div>
            <div class="mt-3">
              <b-row>
                <b-col></b-col>
                <b-col cols="2"></b-col>
                <b-col class="text-right">
                  <b-button
                    class="mr-1"
                    variant="outline-primary"
                    @click="registUser"
                    >회원가입</b-button
                  >
                  <b-button variant="outline-primary" :to="{ name: `home` }"
                    >메인으로</b-button
                  >
                  <div class="mt-2">
                    회원이라면
                    <b-button variant="outline-warning" :to="{ name: `login` }"
                      >로그인</b-button
                    >
                    바로가기!
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col></b-col>
        </b-row>
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
      email: "",
      contact: "",
    };
  },

  methods: {
    ...mapActions(userStore, ["doRegist"]),

    registUser() {
      const user = {
        id: this.id,
        name: this.name,
        pass: this.pass,
        email: this.email,
        contact: this.contact,
      };

      this.doRegist(user);
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
