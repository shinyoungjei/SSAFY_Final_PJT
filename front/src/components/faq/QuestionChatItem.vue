<template>
  <b-container class="bv-example-row">
    <b-row class="mt-3 border border-secondary">
      <b-col class="bg-light p-2 pl-5 text-left">
        <b-row class="mt-2">
          <b-col cols="4" class="font-weight-bold">
            {{ `작성자 : ${qnaChat.userId}` }}</b-col
          >
          <b-col></b-col>
          <b-col cols="3" class="text-right">
            {{ `등록일 : ${qnaChat.regtime}` }}</b-col
          >
        </b-row>
        <b-row>
          <b-col>
            <hr style="background-color: black" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="10">
            <p v-if="!isModifyMode">{{ qnaChat.content }}</p>
            <b-input v-else v-model="content"></b-input>
          </b-col>

          <b-col cols="2">
            <div class="mt-2">
              <b-col>
                <b-button-group size="sm" v-if="!isModifyMode">
                  <b-button
                    variant="outline-dark"
                    @click.stop="changeUpdateMode"
                    class="ml-4"
                  >
                    수정
                  </b-button>
                  <b-button variant="outline-dark" @click.stop="deleteChat">
                    삭제
                  </b-button>
                </b-button-group>

                <b-button-group size="sm" v-else>
                  <b-button
                    variant="outline-dark"
                    @click.stop="updateChat"
                    class="ml-4"
                  >
                    완료
                  </b-button>
                  <b-button
                    variant="outline-dark"
                    @click.stop="changeUpdateMode"
                  >
                    취소
                  </b-button>
                </b-button-group>
              </b-col>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const qnaStore = "qnaStore";
const userStore = "userStore";

export default {
  props: {
    qnaChat: Object,
  },

  data() {
    return {
      content: "",
      isModifyMode: false,
    };
  },

  computed: {
    ...mapState(userStore, ["loginUserInfo"]),
  },

  methods: {
    ...mapActions(qnaStore, [
      "deleteQnAAnswer",
      "setAllQnAAnswerList",
      "modifyQnAAnwser",
    ]),
    async deleteChat() {
      if (!this.loginUserInfo || this.loginUserInfo.id != this.qnaChat.userId) {
        alert("작성자만 삭제할 수 있습니다.");
        return;
      }

      if (confirm("답변 삭제하시겠습니까?")) {
        const contentItem = {
          no: this.qnaChat.no,
          qnaNo: this.qnaChat.qnaNo,
          userId: this.qnaChat.userId,
        };
        await this.deleteQnAAnswer(contentItem);
        this.setAllQnAAnswerList(this.qnaChat.qnaNo);
      }
    },
    async updateChat() {
      console.log(this.loginUserInfo.id);

      if (confirm("답변을 수정하시겠습니까?")) {
        const contentItem = {
          no: this.qnaChat.no,
          qnaNo: this.qnaChat.qnaNo,
          userId: this.qnaChat.userId,
          content: this.content,
        };
        await this.modifyQnAAnwser(contentItem);
        this.setAllQnAAnswerList(this.qnaChat.qnaNo);
        this.isModifyMode = !this.isModifyMode;
      }
    },
    changeUpdateMode() {
      if (!this.loginUserInfo || this.loginUserInfo.id != this.qnaChat.userId) {
        alert("작성자만 수정할 수 있습니다.");
        return;
      }
      this.isModifyMode = !this.isModifyMode;
      this.content = this.qnaChat.content;
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  font-style: italic;
  font-weight: bold;
}
</style>
