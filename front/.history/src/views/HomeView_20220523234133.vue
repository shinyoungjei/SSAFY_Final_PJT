<template>
  <div>
    <b-row>
      <b-col>
        <section>
          <div
            class="row bg-info justify-content-center align-item-center"
            style="height: 280px"
          >
            <div class="text-center">
              <div style="height: 25px"></div>
              <h3 class="display-3 text-capitalize">
                <div class="text-warning font-weight-bold">Welcom</div>
                <div class="text-white font-weight-bold">Happy House!</div>
              </h3>
              <h5 class="font-weight-light font-italic text-light mt-4">
                Happy House에서 좋은집 구경하고 가세요!
              </h5>
            </div>
          </div>
        </section>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <section>
          <b-row class="bg-primary" style="height: 150px">
            <b-col> </b-col>
            <b-col cols="8">
              <div style="height: 60px"></div>
              <h4 class="font-weight-bold text-light text-center">
                아파트 매매 추천
              </h4>
            </b-col>
            <b-col></b-col>
          </b-row>
        </section>
      </b-col>
      <b-col>
        <section>
          <b-row class="bg-success" style="height: 150px">
            <b-col> </b-col>
            <b-col cols="9">
              <div style="height: 60px"></div>
              <h4 class="font-weight-bold text-light text-center">
                이 시각 아파트 NEWS
              </h4>
            </b-col>
            <b-col></b-col>
          </b-row>
        </section>
      </b-col>
      <b-col>
        <section>
          <b-row class="bg-danger" style="height: 150px">
            <b-col> </b-col>
            <b-col cols="9">
              <div style="height: 60px"></div>
              <h4 class="font-weight-bold text-light text-center">
                청년 전세 대출 바로가기
              </h4>
            </b-col>
            <b-col></b-col>
          </b-row>
        </section>
      </b-col>
      <b-col>
        <section>
          <b-row class="bg-secondary" style="height: 150px">
            <b-col> </b-col>
            <b-col> 하이</b-col>
            <b-col></b-col>
          </b-row>
        </section>
      </b-col>
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
