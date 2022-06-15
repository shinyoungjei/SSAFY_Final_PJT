<template>
  <b-container class="bv-example-row">
    <b-row class="mt-3">
      <b-col cols="11" class="bg-light p-2 pl-5 text-left">
        <!-- <span :class="{ completed: qnaChat.completed }" @click="statusChange">{{
          qnaChat.title
        }}</span> -->
        <b-row class="mt-2">
          <b-col cols="4" class="font-weight-bold">
            작성자 : 여기다가 아이디 작성</b-col
          >
          <b-col cols="5"></b-col>
          <b-col> 등록일 : 여기다 등록일 </b-col>
        </b-row>
        <b-row>
          <b-col cols="11">
            <hr style="background-color: black" />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            {{ qnaChat.title }}
          </b-col>
        </b-row>
      </b-col>
      <b-col class="p-2"
        ><b-button variant="danger" @click="cancelTodo">삭제</b-button></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";

const qnaStore = "qnaStore";

export default {
  props: {
    qnaChat: Object,
  },
  methods: {
    ...mapActions(qnaStore, ["deleteChat", "updateChatStatus"]),
    cancelTodo() {
      this.deleteChat(this.qnaChat);
    },
    statusChange() {
      this.updateChatStatus(this.qnaChat);
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
