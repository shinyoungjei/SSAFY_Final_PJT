<template>
  <div class="regist">
    <div style="height: 150px"></div>
    <b-row style="text-align: center">
      <b-col class="text-dark font-weight-bold">
        <h1 style="font-size: 55px">수정하기</h1>
      </b-col>
    </b-row>
    <div style="height: 50px"></div>
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

    async update() {
      let qna = {
        qnaNo: this.question.qnaNo,
        userId: this.question.userId,
        subject: this.question.subject,
        content: this.question.content,
      };
      await this.modifyQuestion(qna);
      this.$router.push(`/question/${qna.qnaNo}`);
    },

    moveList() {
      this.$router.push("/question");
    },
  },
};
</script>

<style></style>
