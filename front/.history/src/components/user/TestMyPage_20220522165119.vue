<template>
  <div v-if="loginUserInfo">
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      <b-col></b-col>
    </b-row>
  </div>
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
