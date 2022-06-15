<template>
  <b-container class="bv-example-row">
    <div style="height: 50px"></div>
    <b-row style="text-align: center">
      <b-col class="text-primary font-weight-bold">
        <h1 style="font-size: 50px">질문하기</h1>
      </b-col>
    </b-row>

    <div style="height: 50px"></div>

    <b-row>
      <b-col>
        <b-card>
          <b-card-header class="text-center">
            <div style="font-size: 30px" class="font-weight-bold">
              {{ question.subject }}
            </div>
          </b-card-header>
          <b-card-body>
            <div>
              <p>작성자: {{ question.userId }}</p>
              <p>작성 시간: {{ question.regtime }}</p>
            </div>
            <!-- 작성자 ID -->
            <hr />
            <!-- 내용 -->
            <span style="white-space: pre-line">
              {{ question.content }}
            </span>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-button size="" variant="outline-primary" @click="moveList"
          >목록</b-button
        >
      </b-col>
      <b-col class="text-right">
        <b-button variant="outline-info" v-on:click="moveUpdate">수정</b-button>
        <b-button variant="outline-danger" @click="moveDelete">삭제</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const qnaStore = "qnaStore";

export default {
  computed: {
    ...mapState(qnaStore, ["question"]),
  },

  created() {
    const qnaNo = this.$route.params.qnaNo;
    this.setDetailQuestion(qnaNo);
  },

  methods: {
    ...mapActions(qnaStore, ["setDetailQuestion", "deleteQuestion"]),

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
  },
};
</script>

<style></style>
