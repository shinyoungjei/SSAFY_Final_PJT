<template>
  <b-row>
    <b-col>
      <section>
        <div
          class="row bg-info justify-content-center align-item-center"
          style="height: 300px"
        >
          <div class="col-sm-5 text-center">
            <div style="height: 50px"></div>
            <h1 class="display-2 text-capitalize">
              <span class="text-warning"> Welcom </span>
              <span class="text-white font-weight-bold">Happy House!</span>
            </h1>
            <h2>xx</h2>
            <a href="#">tag</a>
            <a href="#">tag</a>
          </div>
        </div>
      </section>
    </b-col>
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
