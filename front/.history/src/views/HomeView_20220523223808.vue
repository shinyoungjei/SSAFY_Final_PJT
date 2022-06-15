<template>
  <b-row>
    <b-col></b-col>
    <section>
      <div class="row bg-info" style="height: 30vh">
        <div class="col-sm-5">
          <h1><span>on</span><span>gd</span></h1>
          <h2>xx</h2>
          <a href="#">tag</a>
          <a href="#">tag</a>
        </div>
      </div>
    </section>
  </b-row>
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
