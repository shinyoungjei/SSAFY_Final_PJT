<template>
  <b-container>
    <router-view></router-view>
    <question-chat-input></question-chat-input>
    <question-chat-list> </question-chat-list>
  </b-container>
</template>

<script>
import QuestionChatInput from "@/components/faq/QuestionChatInput.vue";
import QuestionChatList from "@/components/faq/QuestionChatList.vue";
export default {
  components: {
    QuestionChatList,
    QuestionChatInput,
  },
};
</script>

<style></style>
