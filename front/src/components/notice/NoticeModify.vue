<template>
  <div class="regist">
    <div style="height: 130px"></div>
    <h1 class="underline" style="text-align: center">공지사항 수정</h1>
    <div class="regist_form">
      <label for="noticeNo">글번호</label>
      <input
        type="text"
        id="noticeNo"
        name="noticeNo"
        readonly
        v-model="notice.noticeNo"
      />
      <br />
      <label for="userId">작성자</label>
      <input
        type="text"
        id="userId"
        name="userId"
        readonly
        v-model="notice.userId"
      />
      <br />
      <label for="subject">제목</label>
      <input type="text" id="subject" name="subject" v-model="notice.subject" />
      <br />
      <label for="content">내용</label>
      <br />
      <textarea
        id="content"
        name="content"
        cols="35"
        rows="5"
        v-model="notice.content"
      ></textarea>
      <br />
      <button class="btn btn-warning" @click="update">수정</button>
      <button class="btn btn-primary" @click="moveList">목록</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const noticeStore = "noticeStore";

export default {
  computed: {
    ...mapState(noticeStore, ["notice"]),
  },

  methods: {
    ...mapActions(noticeStore, ["modifyNotice"]),

    update() {
      let notice = {
        noticeNo: this.notice.noticeNo,
        userId: this.notice.userId,
        subject: this.notice.subject,
        content: this.notice.content,
      };
      this.modifyNotice(notice);
      this.$router.push(`/notice/${this.noticeNo}`);
    },

    moveList() {
      this.$router.push("/notice");
    },
  },
};
</script>

<style></style>
