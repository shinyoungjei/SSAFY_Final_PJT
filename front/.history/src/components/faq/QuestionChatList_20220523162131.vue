<template>
  <b-row>
    <b-col>
      <b-form-group
        id="input-group-5"
        label="답변하기"
        class="font-weight-bold"
        label-for="content"
      >
        <b-form-textarea
          id="content"
          v-model="content"
          placeholder="내용 입력"
          rows="3"
          max-rows="5"
        ></b-form-textarea>
      </b-form-group>
    </b-col>
    <b-col cols="1">
      <div style="height: 80px"></div>
      <b-button variant="outline-primary" @click="registChat">등록</b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {};
</script>

<style></style>
