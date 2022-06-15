<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Q&A</h1>
      </b-col>
    </b-row>

    <b-row style="text-align: right">
      <b-col>
        <b-form-input></b-form-input>

        <b-button>등록</b-button>
      </b-col>
      <b-col>
        <router-link to="/regist">질문하기</router-link>
      </b-col>
    </b-row>

    <b-row style="text-align: right">
      <b-col>
        <b-table :fields="fields" :items="questions" hover responsive="lg">
          <template #cell(subject)="data">
            <router-link :to="'/question/' + data.item.qnaNo">
              {{ data.item.subject }}
            </router-link>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      fields: [
        { key: "qnaNo", label: "글번호" },
        { key: "subject", label: "제목" },
        { key: "userId", label: "작성자" },
        { key: "regtime", label: "작성시간" },
        /*
        { key: "index", label: "번호"},
        { key: "userId", label: "작성자"},
        { key: "subject", label: "제목"},
        { key: "regtime", label: "작성일"},
        */
      ],
    };
  },

  computed: {
    ...mapState(["questions"]),
  },

  created() {
    this.setQuestions();
  },

  methods: {
    ...mapActions(["setQuestions"]),
  },
};
</script>

<style></style>
