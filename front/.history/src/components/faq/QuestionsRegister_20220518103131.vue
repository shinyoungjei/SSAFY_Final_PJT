<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h1 class="underline">Q&A등록</h1>
      </b-col>
    </b-row>
    <b-form @submit.prevent="registBook">
      <b-form-group id="input-group-2" label="제목(title) :" label-for="title">
        <b-form-input
          id="title"
          v-model="title"
          type="text"
          placeholder="질문작성"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="저자(ID) :" label-for="userid">
        <b-form-input
          id="userid"
          v-model="userid"
          type="text"
          placeholder="ID 입력"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Q&A:" label-for="content">
        <b-form-textarea
          id="content"
          v-model="content"
          placeholder="질문을 작성해주세요."
          rows="5"
          max-rows="10"
        ></b-form-textarea>
      </b-form-group>
      <b-button variant="success" class="mr-2" type="submit">등록</b-button>
      <b-button variant="primary" class="mr-2" @click="moveList">목록</b-button>
      <b-button variant="danger" type="reset">초기화</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      userid: "",
      content: "",
    };
  },
};
</script>

<style></style>
