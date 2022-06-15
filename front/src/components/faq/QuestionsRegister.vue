<template>
  <b-container class="bv-example-row">
    <div style="height: 150px"></div>
    <b-row style="text-align: center">
      <b-col class="text-dark font-weight-bold">
        <h1>등록하기</h1>
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
          v-model="loginUserInfo.id"
          type="text"
          readonly
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="내용" label-for="content">
        <b-form-textarea
          id="content"
          v-model="content"
          placeholder="내용 입력"
          rows="15"
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
import { mapState, mapActions } from "vuex";

const userStore = "userStore";
const qnaStore = "qnaStore";

export default {
  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
  },

  data() {
    return {
      subject: "",
      content: "",
    };
  },

  methods: {
    ...mapActions(qnaStore, ["registQuestion"]),

    async regist() {
      const qna = {
        subject: this.subject,
        userId: this.loginUserInfo.id,
        content: this.content,
      };

      await this.registQuestion(qna);
      this.$router.push("/question");
    },

    moveList() {
      this.$router.push("/question");
    },
  },
};
</script>

<style></style>
