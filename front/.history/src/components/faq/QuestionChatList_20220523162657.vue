<template>
  <b-container class="bv-example-row">
    <b-row class="mt-4 mb-4 text-center">
      <b-col>
        <question-chat-item
          v-for="(qnaChat, index) in qnaChats"
          :key="index"
          :qnaChat="qnaChat"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import QuestionChatItem from "@/components/faq/QuestionChatItem";

const qnaStore = "qnaStore";

export default {
  components: {
    QuestionChatItem,
  },
  computed: {
    ...mapState(qnaStore, ["qnaChats"]),
  },

  async created() {
    const qnaNo = this.$route.params.qnaNo;
    console.log(this.question);
    await this.setDetailQuestion(qnaNo);
    console.log(this.question);
  },
};
</script>

<style></style>
