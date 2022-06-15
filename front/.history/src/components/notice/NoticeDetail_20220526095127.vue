<template>
  <b-container class="bv-example-row">
    <div style="height: 150px"></div>
    <b-row style="text-align: center">
      <b-col class="text-dark font-weight-bold">
        <h1>상세보기</h1>
      </b-col>
    </b-row>
    <div style="height: 50px"></div>

    <b-row>
      <b-col>
        <b-card>
          <b-card-header class="text-center">
            <div>
              <h3>{{ notice.subject }}</h3>
            </div>
          </b-card-header>
          <b-card-body>
            <div>
              <p>작성자: {{ notice.userId }}</p>
              <p>작성 시간: {{ notice.regtime }}</p>
            </div>
            <hr />
            <!-- 내용 -->
            <span style="white-space: pre-line">
              {{ notice.content }}
            </span>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <div style="height: 20px"></div>
    <b-row>
      <b-col cols="1" class="text=left">
        <b-button size="" variant="outline-primary" @click="moveList"
          >목록</b-button
        >
      </b-col>
      <b-col cols="8"></b-col>
      <b-col class="text-right">
        <b-button variant="outline-info" v-on:click="moveUpdate">수정</b-button>
        <b-button variant="outline-danger" @click="moveDelete">삭제</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const noticeStore = "noticeStore";

export default {
  computed: {
    ...mapState(noticeStore, ["notice"]),
  },

  created() {
    const noticeNo = this.$route.params.noticeNo;
    this.setDetailNotice(noticeNo);
  },

  methods: {
    ...mapActions(noticeStore, ["setDetailNotice", "deleteNotice"]),

    //수정페이지 이동
    moveUpdate() {
      this.$router.push(`/notice/modify/${this.notice.noticeNo}`);
    },
    //삭제페이지 이동
    moveDelete() {
      if (confirm("삭제 확인")) {
        this.deleteNotice(this.notice.noticeNo);
        this.$router.push(`/notice/delete/${this.notice.noticeNo}`);
        this.moveList();
      }
    },
    //목록페이지 이동
    moveList() {
      this.$router.push(`/notice`);
    },
  },
};
</script>

<style></style>
