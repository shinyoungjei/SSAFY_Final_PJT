<template>
  <b-container>
    <section>
      <div class="row bg-info" style="height: 10vh">
        <div class="col-sm-5">
          <h1><span>on</span><span>gd</span></h1>
          <h2>xx</h2>
          <a href="#">tag</a>
          <a href="#">tag</a>
        </div>
      </div>
    </section>
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
