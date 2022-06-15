<template>
  <div class="regist">
    <h1 class="underline" style="text-align: center">공지사항 수정</h1>
    <div style="height: 30px"></div>
    <div class="regist_form">
      <label for="qnaNo">글번호</label>
      <input
        type="text"
        id="qnaNo"
        name="qnaNo"
        readonly
        v-model="question.qnaNo"
      />
      <br />
      <label for="userId">작성자</label>
      <input
        type="text"
        id="userId"
        name="userId"
        readonly
        v-model="question.userId"
      />
      <br />
      <label for="subject">제목</label>
      <input
        type="text"
        id="subject"
        name="subject"
        v-model="question.subject"
      />
      <br />
      <label for="content">내용</label>
      <br />
      <textarea
        id="content"
        name="content"
        cols="35"
        rows="5"
        v-model="question.content"
      ></textarea>
      <br />
      <button class="btn btn-warning" @click="update">수정</button>
      <button class="btn btn-primary" @click="moveList">목록</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const qnaStore = "qnaStore";

export default {
  computed: {
    ...mapState(qnaStore, ["question"]),
  },

  methods: {
    ...mapActions(qnaStore, ["modifyQuestion"]),

    update() {
      let qna = {
        qnaNo: this.question.qnaNo,
        userId: this.question.userId,
        subject: this.question.subject,
        content: this.question.content,
      };
      this.modifyQuestion(qna);
      this.$router.push(`/question/${this.qnaNo}`);
    },

    moveList() {
      this.$router.push("/question");
    },
  },
};
</script>

<style></style>
