<template>
  <div>
    <b-carousel>
      <b-carousel-slide>
        <template #img>
          <a href="https://apply.lh.or.kr/LH/index.html?Sls#MN::CLCC_MN_0010:">
            <img
              class="d-block img-fluid w-100"
              width="512"
              height="256"
              src="@/assets/realLH.png"
              alt="image slot"
            />
          </a>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <a href="https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020601.jsp">
            <img
              id="touch"
              class="d-block img-fluid w-100"
              width="512"
              height="256"
              src="@/assets/realSmall.png"
              alt="image slot"
            />
          </a>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <a href="https://www.kakaobank.com/products/leaseLoan">
            <img
              class="d-block img-fluid w-100"
              width="512"
              height="256"
              src="@/assets/realKakao.png"
              alt="image slot"
            />
          </a>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  methods: {
    moveList() {
      this.$router.push(`/question`);
    },
  },
};
</script>

<style>
#touch {
  cursor: pointer;
}
</style>
