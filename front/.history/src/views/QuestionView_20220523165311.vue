<template>
  <b-container>
    <router-view></router-view>

    <question-chat-list> </question-chat-list>
  </b-container>
</template>

<script>
import QuestionChatList from "@/components/faq/QuestionChatList.vue";
export default {
  components: {
    QuestionChatList,
  },
};
</script>

<style></style>
