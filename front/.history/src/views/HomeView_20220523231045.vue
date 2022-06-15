<template>
  <div>
    <b-row>
      <b-col>
        <section>
          <div
            class="row bg-info justify-content-center align-item-center"
            style="height: 330px"
          >
            <div class="text-center">
              <div style="height: 50px"></div>
              <h1 class="display-3 text-capitalize">
                <div class="text-warning font-weight-bold">Welcom</div>
                <div class="text-white font-weight-bold">Happy House!</div>
              </h1>
              <h3 class="font-weight-light font-italic text-light mt-4">
                Happy House에서 좋은집 구경하고 가세요!
              </h3>
            </div>
          </div>
        </section>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <section>
          <div class="row bg-primary" style="height: 330px">
            <div>
              <div style="height: 50px"></div>
            </div>
          </div>
        </section>
      </b-col>
      <b-col>
        <section>
          <div class="row bg-success align-item-center" style="height: 330px">
            <div class="text-center">
              <div style="height: 50px"></div>
              <h1 class="display-2 text-capitalize">
                <div class="text-warning font-weight-bold">무엇을</div>
                <div class="text-white font-weight-bold">넣을까</div>
              </h1>
            </div>
          </div>
        </section>
      </b-col>
      <b-col>
        <section>
          <div class="row bg-danger align-item-center" style="height: 330px">
            <div class="text-center">
              <div style="height: 50px"></div>
              <h1 class="display-2 text-capitalize">
                <div class="text-warning font-weight-bold">무엇을</div>
                <div class="text-white font-weight-bold">넣을까</div>
              </h1>
            </div>
          </div>
        </section>
      </b-col>
      <b-col>
        <section>
          <div class="row bg-dark align-item-center" style="height: 330px">
            <div class="text-center">
              <div style="height: 50px"></div>
              <h1 class="display-2 text-capitalize">
                <div class="text-warning font-weight-bold">무엇을</div>
                <div class="text-white font-weight-bold">넣을까</div>
              </h1>
            </div>
          </div>
        </section></b-col
      >
    </b-row>
  </div>
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
