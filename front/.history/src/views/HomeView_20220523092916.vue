<template>
  <b-container>
    <p>HappHouse</p>
    <button @click="goTest">test</button>
  </b-container>
</template>

<script>
export default {
  methods: {
    goTest() {
      this.doDeleteUser(this.loginUserInfo.name);
      this.$store.commit("userStore/LOGOUT");
      this.$router.push("/");
    },
  },
};
</script>
