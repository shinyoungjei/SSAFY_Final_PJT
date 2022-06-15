<template>
  <b-container class="bv-example-row">
    <b-row class="mt-3">
      <b-col cols="11" class="bg-light p-2 pl-5 text-left">
        <span :class="{ completed: todo.content }" @click="statusChange">{{
          todo.content
        }}</span>
      </b-col>
      <b-col class="p-2"
        ><b-button variant="danger" @click="cancelTodo">X</b-button></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";

const todoStore = "qnaStore";

export default {
  props: {
    todo: Object,
  },
  methods: {
    ...mapActions(qnaStore, ["deleteChat", "updateChatStatus"]),
    cancelTodo() {
      // this.$store.dispatch("deleteTodo", this.todo);
      this.deleteChat(this.todo);
    },
    statusChange() {
      // this.$store.dispatch("updateTodoStatus", this.todo);
      this.updateChatStatus(this.todo);
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
