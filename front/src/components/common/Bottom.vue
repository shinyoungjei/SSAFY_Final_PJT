<template>
  <b-container fluid id="bot">
    <!-- <b-row>
      <b-col cols="3" />
      <b-col cols="1" id="ct">
        <div style="height: 10px"></div>
      </b-col>
      <b-col class="ml-3" style="text-align: left; padding-left: 100px">
        <div style="height: 60px"></div>
        <span class="text-white"
          >본 사이트의 콘텐츠는 저작권법의 보호를 받는 바 무단 전재, 복사, 배포
          등을 금합니다.</span
        ><br />
        <h4 class="mt-1 text-white">SS House . 02-7412-1945</h4>
        <span style="font-weight: bold; font-size: 20px" class="text-white"
          >제작</span
        >
        <ul>
          <li style="font-weight: bold" class="text-white">신현국</li>
          <li style="font-weight: bold" class="text-white">신영제</li>
        </ul>
      </b-col>
    </b-row> -->

    <b-row>
      <b-col></b-col>
      <b-col cols="10" class="text-center">
        <div class="link">
          <div style="height: 50px"></div>
          회사소개 | 이용약관 | 개인정보 처리방침 | 위치기반 서비스 이용약관
        </div>
        <br />
        <div class="link2">
          상호 : (주)SSDuo | 대표 : 신현국, 신영제 | 사업자등록번호 :
          12-345-6789
        </div>
        <div class="link2">
          주소 : 대전광역시 유성구 학하서로 121번길(삼성연수원) (우:12345)
        </div>
        <div class="link2">팩스 : 042-123-5555</div>
        <div class="link2">
          서비스 이용문의 : 7412-1945 | 이메일 : zerojei0423@sshouse.com |
          서비스 제휴문의 : cook@sshouse.com
        </div>
        <div style="height: 5px"></div>
        <div class="link2">Copyright@ShinDuo. All rights reserved</div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
#bot {
  margin-top: 100px;
  background-color: rgb(227, 229, 231);
  height: 250px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#ct {
  text-align: left;
}

.link {
  color: rgb(38, 38, 38);
  margin-left: 50px;
  font-weight: 700;
  font-size: 15px;
  float: center;
}
.link2 {
  color: rgb(38, 38, 38);
  margin-left: 50px;
  font-weight: 500;
  font-size: 13px;
  float: center;
}
</style>
