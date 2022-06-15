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
      this.$router.push("/aptDetail");
    },
  },
};
</script>
