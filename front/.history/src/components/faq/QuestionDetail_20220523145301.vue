<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h1 class="underline">Q&A</h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-card v-if="question">
          <b-card-header class="text-center">
            <div>
              <h3>{{ question.subject }}</h3>
            </div>
          </b-card-header>
          <b-card-body>
            <b-row>
              <b-col>작성자: {{ question.userId }}</b-col>
              <b-col cols="6"></b-col>
              <b-col>작성 시간: {{ question.regtime }}</b-col>
            </b-row>
            <!-- 작성자 ID -->
            <hr class="border border-dark" />
            <!-- 내용 -->
            <span style="white-space: pre-line">
              {{ question.content }}
            </span>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <div style="height: 20px"></div>
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
    </b-row>
    <b-row class="text-center">
      <b-col>
        <b-input-group prepend="할일" class="mt-3">
          <b-form-input
            v-model.trim="todoTitle"
            @keypress.enter="registerTodo"
          ></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-success" @click="registerTodo"
              >등록</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <div style="height: 30px"></div>
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

  async created() {
    const qnaNo = this.$route.params.qnaNo;
    console.log(this.question);
    await this.setDetailQuestion(qnaNo);
    console.log(this.question);
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
