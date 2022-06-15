<template>
  <!-- 
  아파트 이름
  법정동 
  지번 (상세주소)
  평수
  시도
-->
  <b-container>
    <b-row>
      <b-col cols="8">
        <h4>아파트 상세정보</h4>
        <hr />
        <b-row>
          <b-col cols="3"> 아파트 정보 : </b-col>
          <b-col cols="7"> 네오미아</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col cols="3"> 법정동 : </b-col>
          <b-col cols="7"> 덕명동</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col cols="3"> 지번 : </b-col>
          <b-col cols="7"> 학하서로 121번길</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col cols="3"> 아파트 평수 : </b-col>
          <b-col cols="7"> 35평</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col cols="3"> 거래가격 : </b-col>
          <b-col cols="7"> 1,000,000 원</b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col></b-col>
          <b-col><b-button>돌아가기</b-button></b-col>
          <b-col></b-col>
        </b-row>
      </b-col>
      <b-col> </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

const aptStore = "aptStore";

export default {
  computed: {
    ...mapState(aptStore, ["aptList"]),
    // house() {
    //   return this.$store.state.house;
    // },
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>
