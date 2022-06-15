<template>
  <b-container>
    <router-view></router-view>

    <b-row>
      <question-chat-item> </question-chat-item>
    </b-row>
  </b-container>
</template>

<script>
import QuestionChatItem from "@/components/faq/QuestionChatList.vue";
export default {
  components: {
    QuestionChatItem,
  },
};
</script>

<style></style>
