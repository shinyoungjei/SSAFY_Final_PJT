<template>
  <b-container>
    <div style="height: 150px"></div>
    <div>
      <b-form>
        <div>
          <h2 class="text-center">HappyHouse signup</h2>
          <br />
        </div>
        <div>
          <label for="id">ID : </label>
          <b-form-input id="id" class="input" placeholder="아이디" />
        </div>
        <div class="mt-3">
          <label for="name">Name : </label>
          <b-form-input id="name" class="input" placeholder="이름" /><br />
        </div>
        <div class="mt-3">
          <label for="pass">Pass : </label>
          <b-form-input
            id="pass"
            type="password"
            class="input"
            placeholder="비밀번호"
          /><br />
        </div>
        <div class="mt-3">
          <label for="email">Email : </label>
          <b-form-input
            id="email"
            type="email"
            class="input"
            placeholder="이메일"
          /><br />
        </div>
        <div class="mt-3">
          <label for="phone">Phone : </label>
          <b-form-input id="phone" class="input" placeholder="연락처" /><br />
        </div>
        <div class="mt-3">
          <b-button class="mr-1" variant="outline-primary">회원가입</b-button>
          <b-button variant="outline-success" :to="{ name: `home` }"
            >메인으로</b-button
          >
        </div>
        <div class="mt-3">
          회원이라면
          <b-button variant="outline-warning" :to="{ name: `signIn` }"
            >로그인</b-button
          >
          바로가기!
        </div>
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style></style>
