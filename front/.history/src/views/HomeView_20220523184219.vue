<template>
  <b-container>
    <p>HappHouse</p>
    <button @click="goTest">test</button>
    <div style="height: 800px"></div>
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
