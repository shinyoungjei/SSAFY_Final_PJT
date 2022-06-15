<template>
  <b-container>
    <router-view></router-view>

    <b-row>
      <question-chat-list> </question-chat-list>
    </b-row>
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
