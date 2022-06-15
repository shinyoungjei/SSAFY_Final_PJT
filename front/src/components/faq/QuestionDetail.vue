<template>
  <b-container class="bv-example-row">
    <div style="height: 150px"></div>
    <b-row style="text-align: center">
      <b-col class="text-dark font-weight-bold">
        <h1>상세보기</h1>
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
    <div style="height: 30px"></div>
    <b-row>
      <b-col>
        <question-chat-input :qnaNo="qnaNo"></question-chat-input>
      </b-col>
    </b-row>
    <hr class="border border-dark mt-1 mb-1" />
    <div class="mt-3 font-weight-bold" style="font-size: 20px">
      {{ `총 답변 수 : ${totalQnaChats}개` }}
    </div>
    <b-row class="mt-0">
      <b-col>
        <question-chat-list> </question-chat-list>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import QuestionChatInput from "@/components/faq/QuestionChatInput.vue";
import QuestionChatList from "@/components/faq/QuestionChatList.vue";
import { mapState, mapActions, mapGetters } from "vuex";

const qnaStore = "qnaStore";
const userStore = "userStore";

export default {
  data() {
    return {
      qnaNo: "",
    };
  },
  components: {
    QuestionChatList,
    QuestionChatInput,
  },
  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
    ...mapState(qnaStore, ["question"]),
    ...mapGetters(qnaStore, ["totalQnaChats"]),
  },

  async created() {
    const qnaNo = this.$route.params.qnaNo;
    this.qnaNo = qnaNo;
    await this.setDetailQuestion(qnaNo);
    this.setAllQnAAnswerList(qnaNo);
  },

  methods: {
    ...mapActions(qnaStore, [
      "setDetailQuestion",
      "deleteQuestion",
      "setAllQnAAnswerList",
    ]),

    //수정페이지 이동
    moveUpdate() {
      if (
        !this.loginUserInfo ||
        this.loginUserInfo.id != this.question.userId
      ) {
        alert("작성자만 수정할 수 있습니다.");
        return;
      }
      this.$router.push(`/question/modify/${this.question.qnaNo}`);
    },
    //삭제페이지 이동
    async moveDelete() {
      if (
        !this.loginUserInfo ||
        this.loginUserInfo.id != this.question.userId
      ) {
        alert("작성자만 삭제할 수 있습니다.");
        return;
      }
      if (confirm("삭제 확인")) {
        await this.deleteQuestion(this.question.qnaNo);
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
