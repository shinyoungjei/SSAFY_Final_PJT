<template>
  <b-container>
    <div style="height: 50px"></div>
    <b-row style="text-align: center">
      <b-col class="text-primary font-weight-bold">
        <h1 style="font-size: 70px">공지사항</h1>
      </b-col>
    </b-row>

    <div style="height: 50px"></div>
    <!-- 검색 바 -->
    <b-row style="text-align: right">
      <b-col></b-col>
      <b-col>
        <b-input-group class="mt-3">
          <b-form-input
            v-model.trim="searchKeyword"
            @keyup.enter="getQnaListBySubject"
            placeholder="제목으로 검색"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              variant="primary"
              text="Button"
              @click.prevent="getQnaListBySubject"
              >검색</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col></b-col>
    </b-row>
    <!-- 검색 바 종료 -->

    <!-- 등록하기 -->
    <b-row>
      <b-col cols="10"></b-col>
      <b-col>
        <!-- 관리자일 경우에만 등록하기 사용가능 -->
        <router-link to="/noticeRegist">등록 하기</router-link>
      </b-col>
    </b-row>
    <!-- 등록하기 종료-->

    <div style="height: 10px"></div>
    <!-- 공지사항 리스트 불러오기 -->
    <b-row style="text-align: center">
      <b-col>
        <b-table :fields="fields" :items="questions" hover responsive="lg">
          <template #cell(subject)="data">
            <router-link :to="'/notice/' + data.item.qnaNo">
              {{ data.item.subject }}
            </router-link>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <!-- 공지사항 리스트 불러오기 종료-->
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const qnaStore = "qnaStore";

export default {
  data() {
    return {
      fields: [
        { key: "qnaNo", label: "글번호" },
        { key: "subject", label: "제목" },
        { key: "userId", label: "작성자" },
      ],
      searchKeyword: "",
    };
  },

  computed: {
    ...mapState(qnaStore, ["questions"]),
  },

  created() {
    this.setQuestions();
  },

  methods: {
    ...mapActions(qnaStore, ["setQuestions", "searchQuestionBySubject"]),

    getQnaListBySubject() {
      if (this.searchKeyword == "") {
        this.setQuestions();
        return;
      }
      this.searchQuestionBySubject(this.searchKeyword);
    },
  },
};
</script>

<style></style>
