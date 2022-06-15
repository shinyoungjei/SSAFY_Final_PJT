<template>
  <div fluid id="main" style="padding: 0">
    <!-- <navi-header style="z-index:1;"/> -->
    <div style="height: 30px"></div>
    <div style="height: 800px">
      <b-row>
        <b-col cols="2" id="left">
          <div class="mt-3">
            <h2 id="name" class="ml-2">님</h2>
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
            <span class="ml-2" style="font-size: 20px">회원관리</span>
          </div>
          <div class="ml-3">
            <b-button variant="primary" style="width: 200px"
              >정보 조회</b-button
            >
          </div>
          <div class="ml-3 mt-3">
            <b-button variant="success" style="width: 200px"
              >정보 수정</b-button
            >
          </div>
          <div class="ml-3 mt-3">
            <b-button variant="danger" style="width: 200px">회원 탈퇴</b-button>
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
          <div class="ml-3 mt-3">
            <b-button variant="warning" style="width: 200px">메인으로</b-button>
          </div>
          <div class="ml-3 mt-3">
            <b-button variant="light" style="width: 200px">로그아웃</b-button>
          </div>
        </b-col>
        <b-col cols="10" id="main">
          <!-- 조회창 -->
          <template v-if="mode === 'view'">
            <div style="height: 150px"></div>
            <div class="view">
              <label>ID : </label>
              <b-form-input
                class="input"
                disabled
                v-model="member.memberid"
              /><br />
            </div>
            <div class="view">
              <label>Name : </label>
              <b-form-input
                class="input"
                disabled
                v-model="member.membername"
              /><br />
            </div>
            <div class="view">
              <label>Pass : </label>
              <b-form-input
                class="input"
                disabled
                v-model="member.memberpwd"
              /><br />
            </div>
            <div class="view">
              <label>Email : </label>
              <b-form-input
                class="input"
                disabled
                v-model="member.memberemail"
              /><br />
            </div>
            <div class="view">
              <label>Phone : </label>
              <b-form-input
                class="input"
                disabled
                v-model="member.membertell"
              /><br />
            </div>
          </template>

          <!-- 수정창 -->
          <template v-if="mode === 'modify'">
            <div style="height: 150px"></div>
            <div class="view">
              <label>ID : </label>
              <b-form-input
                class="input"
                aria-placeholder=""
                disabled
                v-model="member.memberid"
                style="color: red; font-weight: bold"
              /><br />
            </div>
            <div class="view">
              <label>Name : </label>
              <b-form-input class="input" v-model="member.membername" /><br />
            </div>
            <div class="view">
              <label>Pass : </label>
              <b-form-input class="input" v-model="member.memberpwd" /><br />
            </div>
            <div class="view">
              <label>Email : </label>
              <b-form-input class="input" v-model="member.memberemail" /><br />
            </div>
            <div class="view">
              <label>Phone : </label>
              <b-form-input class="input" v-model="member.membertell" /><br />
            </div>
            <div style="margin-top: 20px; margin-left: 130px">
              <b-button
                @click="update"
                class="mr-3"
                style="width: 150px"
                squared
                variant="warning"
                >수정하기</b-button
              >
              <b-button
                @click="reset"
                style="width: 150px"
                squared
                variant="danger"
                >초기화</b-button
              >
            </div>
          </template>

          <!-- 탈퇴창 -->
          <template v-if="mode === 'delete'">
            <div style="height: 250px"></div>
            <div>
              <h1 style="display: inline-block">
                정말로 회원을 탈퇴하시겠습니까 ?
              </h1>
              <img
                class="ml-3"
                src="@/assets/sad.png"
                style="width: 50px; position: relative; top: -10px"
              />
            </div>
            <b-button
              @click="memberDelete"
              variant="danger"
              class="mt-3"
              style="width: 200px"
              >탈퇴하기</b-button
            >
            <div style="height: 250px"></div>
          </template>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
