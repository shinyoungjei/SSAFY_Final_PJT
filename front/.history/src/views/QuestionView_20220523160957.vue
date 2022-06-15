<template>
  <b-container>
    <router-view></router-view>

    <b-row>
      <todo-list> </todo-list>
    </b-row>
  </b-container>
</template>

<script>
import QuestionChatItem from "@/components/faq/QuestionChatItem.vue";
export default {
  components: {
    QuestionChatItem,
  },
};
</script>

<style></style>
