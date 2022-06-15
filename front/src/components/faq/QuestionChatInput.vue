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
          v-model.trim="content"
          placeholder="내용 입력"
          rows="3"
          max-rows="5"
          @keyup.enter="registChat"
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
import { mapState, mapActions } from "vuex";

const qnaStore = "qnaStore";
const userStore = "userStore";

export default {
  data() {
    return {
      content: "",
    };
  },

  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
  },

  props: {
    qnaNo: String,
  },

  methods: {
    ...mapActions(qnaStore, ["registQnAAnswer", "setAllQnAAnswerList"]),
    // 댓글 등록
    async registChat() {
      const contentItem = {
        qnaNo: parseInt(this.qnaNo),
        userId: this.loginUserInfo.id,
        content: this.content,
      };
      if (contentItem.content) {
        await this.registQnAAnswer(contentItem);
        this.setAllQnAAnswerList(contentItem.qnaNo);
      }
      this.content = "";
    },
  },
};
</script>

<style></style>
