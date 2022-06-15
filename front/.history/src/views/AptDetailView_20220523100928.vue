<template>
  <!-- 
  아파트 이름
  법정동 
  지번 (상세주소)
  평수
  시도
-->
  <b-container>
    <div style="height: 50px"></div>
    <b-row style="text-align: center">
      <b-col class="text-primary font-weight-bold">
        <h1 style="font-size: 50px">상세보기</h1>
      </b-col>
    </b-row>
    <div style="height: 80px"></div>
    <b-row>
      <b-col>
        <b-row>
          <h4 class="font-weight-bold">아파트 상세정보</h4>
        </b-row>
        <hr class="border border-primary" />
        <b-row>
          <b-col cols="3" class="font-weight-bold"> 아파트 정보</b-col>
          <b-col cols="7"> 네오미아</b-col>
        </b-row>
        <hr class="border border-primary" />
        <b-row>
          <b-col cols="3" class="font-weight-bold"> 법정동 </b-col>
          <b-col cols="7"> 덕명동</b-col>
        </b-row>
        <hr class="border border-primary" />
        <b-row>
          <b-col cols="3" class="font-weight-bold"> 지번</b-col>
          <b-col cols="7"> 학하서로 121번길</b-col>
        </b-row>
        <hr class="border border-primary" />
        <b-row>
          <b-col cols="3" class="font-weight-bold"> 아파트 평수 </b-col>
          <b-col cols="7"> 35평</b-col>
        </b-row>
        <hr class="border border-primary" />
        <b-row>
          <b-col cols="3" class="font-weight-bold"> 거래가격 </b-col>
          <b-col cols="7"> 1,000,000 원</b-col>
        </b-row>
        <hr class="border border-primary" />
        <b-row>
          <b-col cols="3" class="font-weight-bold"> 건축년도 </b-col>
          <b-col cols="7"> 2016년</b-col>
        </b-row>
        <hr class="border border-primary" />
        <b-row>
          <b-col></b-col>
          <b-col><b-button>돌아가기</b-button></b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <h4 class="font-weight-bold">위치 및 주변시설</h4>
        </b-row>
        <b-row> 대전광역시 유성구 덕명동 </b-row>
        <hr class="border border-primary" />
      </b-col>
      <b-col cols="4">
        <b-row>
          <h4 class="font-weight-bold">모아보기</h4>
        </b-row>
        <b-row class="border border-primary">
          <b-col cols="1"></b-col>
          <b-col>
            <div style="height: 20px"></div>
            <div><h5>전세 100</h5></div>
            <div>최근 7일 매물 조회수 50회</div>
            <hr class="border border-primary" />
            <b-row>
              <b-col>관심등록</b-col>
              <b-col></b-col>
            </b-row>

            <div style="height: 20px"></div>
          </b-col>
          <b-col cols="1"></b-col>
        </b-row>
      </b-col>
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
