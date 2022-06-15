<template>
  <b-container class="bv-example-row">
    <div style="height: 150px"></div>
    <b-row style="text-align: center">
      <b-col class="text-primary font-weight-bold">
        <h1 style="font-size: 55px">등록하기</h1>
      </b-col>
    </b-row>
    <b-form @submit.prevent="regist">
      <b-form-group id="input-group-2" label="제목" label-for="subject">
        <b-form-input
          id="subject"
          v-model="subject"
          type="text"
          placeholder="제목 입력"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="작성자" label-for="userId">
        <b-form-input
          id="userId"
          v-model="userId"
          type="text"
          placeholder="ssafy"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="내용" label-for="content">
        <b-form-textarea
          id="content"
          v-model="content"
          placeholder="내용 입력"
          rows="20"
          max-rows="20"
        ></b-form-textarea>
      </b-form-group>
      <b-button variant="success" class="mr-2" type="submit">등록</b-button>
      <b-button variant="primary" class="mr-2" @click="moveList">목록</b-button>
      <b-button variant="danger" type="reset">초기화</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";

const qnaStore = "qnaStore";

export default {
  data() {
    return {
      subject: "",
      userId: "",
      content: "",
    };
  },

  methods: {
    ...mapActions(qnaStore, ["registQuestion"]),

    regist() {
      const qna = {
        subject: this.subject,
        userId: this.userId,
        content: this.content,
      };

      this.registQuestion(qna);
      this.$router.push("/notice");
    },

    moveList() {
      this.$router.push("/notice");
    },
  },
};
</script>

<style></style>
