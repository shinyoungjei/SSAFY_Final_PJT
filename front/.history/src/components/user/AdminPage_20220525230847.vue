<template>
  <b-container fluid id="main" style="padding: 0">
    <div style="height: 100px"></div>
    <h2>여기 관리자 페이지</h2>
    <div style="height: 1200px">
      <b-row>
        <b-col cols="2" id="left">
          <div class="mt-3 ml-1">
            <h2 id="name" class="ml-2">관리자페이지</h2>
          </div>
          <div
            style="
              text-align: left;
              width: 200px;
              margin: 20px auto;
              border-bottom: 1px solid white;
              font-weight: bold;
            "
          >
            <img class="mb-1 ml-2" style="width: 25px" />
            <span class="ml-2" style="font-size: 20px">회원관리</span>
          </div>
          <div class="ml-4">
            <b-button
              style="width: 200px"
              @click="mvview"
              pill
              block
              variant="primary"
              >회원 목록</b-button
            >
          </div>

          <div
            style="
              text-align: left;
              width: 200px;
              margin: 20px auto;
              border-bottom: 1px solid white;
              font-weight: bold;
            "
          >
            <span class="ml-1" style="font-size: 20px">이동하기</span>
          </div>
          <div class="ml-4 mt-3">
            <b-button
              style="width: 200px"
              @click="back"
              pill
              block
              variant="warning"
              >메인으로</b-button
            >
          </div>
          <div class="ml-4 mt-3">
            <b-button
              style="width: 200px"
              @click="logout"
              pill
              block
              variant="light"
              >로그아웃</b-button
            >
          </div>
        </b-col>
        <b-col cols="10" id="main">
          <!-- 검색 창-->
          <div class="mt-3" style="text-align: left; margin-left: 50px">
            <b-input-group style="width: 300px" class="mt-3">
              <b-form-input
                @keyup.enter="search"
                v-model="word"
                placeholder="이름으로 검색"
              />
              <b-input-group-append>
                <b-button @click="search" variant="warning">검색</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>

          <!-- 회원 목록 -->
          <template v-if="mode === 'view'">
            <div
              class="memberTable"
              v-for="(item, idx) in memberList"
              :key="idx"
            >
              <div style="height: 70px; text-align: left">
                <span
                  class="ml-2"
                  style="
                    position: relative;
                    top: 13px;
                    font-weight: bold;
                    font-size: 30px;
                  "
                  >{{ item.memberid }}</span
                >
              </div>

              <div style="height: 70px">
                <b-row class="ml-5 mr-5">
                  <b-col class="section">
                    <span class="txt">{{ item.membername }}</span>
                  </b-col>
                  <b-col class="ml-3 section">
                    <span class="txt">{{ item.memberpwd }}</span>
                  </b-col>
                  <b-col class="ml-3 section">
                    <span class="txt">{{ item.memberemail }}</span>
                  </b-col>
                  <b-col class="ml-3 section">
                    <span class="txt">{{ item.membertell }}</span>
                  </b-col>
                </b-row>
              </div>
            </div>
          </template>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style></style>
