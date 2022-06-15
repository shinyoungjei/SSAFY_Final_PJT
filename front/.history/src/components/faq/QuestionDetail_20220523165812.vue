<template>
  <b-container class="bv-example-row">
    <div style="height: 50px"></div>
    <b-row style="text-align: center">
      <b-col class="text-primary font-weight-bold">
        <h1 style="font-size: 50px">상세보기</h1>
      </b-col>
    </b-row>
    <div style="height: 50px"></div>
    <b-row>
      <b-col class="text-right mb-3">
        <b-button variant="outline-primary" v-on:click="moveUpdate" class="mr-2"
          >수정</b-button
        >
        <b-button variant="outline-primary" @click="moveDelete" class="mr-2"
          >삭제</b-button
        >
        <b-button variant="outline-primary" @click="moveList">목록</b-button>
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
          
            <b-button variant="outline-primary" @click="registChat"
              >등록</b-button
            >
          </b-col>
        </b-form-group>
      </b-col>
    </b-row>
    <hr class="border border-dark mt-0" />
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const qnaStore = "qnaStore";

export default {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    ...mapState(qnaStore, ["question", "qnaChat"]),
  },

  async created() {
    const qnaNo = this.$route.params.qnaNo;
    console.log(this.question);
    await this.setDetailQuestion(qnaNo);
    console.log(this.question);
  },

  methods: {
    ...mapActions(qnaStore, [
      "setDetailQuestion",
      "deleteQuestion",
      "createdContent",
    ]),

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
