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
import { mapActions } from "vuex";

const qnaStore = "qnaStore";

export default {
  data() {
    return {
      contentTitle: "",
    };
  },

  methods: {
    ...mapActions(qnaStore, ["createdContent"]),

    //수정페이지 이동
    moveUpdate() {
      this.$router.push(`/question/modify/${this.question.qnaNo}`);
    },
    //삭제페이지 이동
    moveDelete() {
      if (confirm("삭제 확인")) {
        this.deleteQuestion(this.question.qnaNo);
        this.$router.push(`/question/delete/${this.question.qnaNo}`);
        this.moveList();
      }
    },
    //목록페이지 이동
    moveList() {
      this.$router.push(`/question`);
    },
    // 댓글 등록
    registChat() {
      const contentItem = {
        content: this.content,
        completed: false,
      };
      if (contentItem) this.createdContent(contentItem);
      this.content = "";
    },
  },
};
</script>

<style></style>
