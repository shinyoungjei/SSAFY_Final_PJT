<template>
  <b-container fluid>
    <div style="height: 40px"></div>
    <b-row>
      <b-col>
        <div class="text-left font-weight-bold">소개할게요</div>
        <hr />
        <b-row>
          <b-col> <youth /> </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col class="text-left font-weight-bold"> NEWS </b-col>
          <b-col></b-col>
          <b-col class="text-right font-weight-bold">
            <a href="#" class="text-dark">더보기</a>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col class="text-left">
            > 뉴스 불러오기 <br />
            > 뉴스 불러오기 <br />
            > 뉴스 불러오기 <br />
            > 뉴스 불러오기 <br />
            > 뉴스 불러오기 <br />
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col class="text-left font-weight-bold"> Q&A </b-col>
          <b-col></b-col>
          <b-col class="text-right font-weight-bold">
            <a href="/question" class="text-dark">더보기</a>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col class="text-left">
            <ul style="list-style: none">
              <li v-for="(list, i) in questions" v-bind:key="i">
                <div v-if="i <= 5">
                  <router-link
                    :to="`/question/` + list.qnaNo"
                    class="text-dark"
                    style="font-size: 15px"
                    >{{ list.subject }}</router-link
                  >
                </div>
              </li>
            </ul>
          </b-col>

          <b-col cols="2"></b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Youth from "@/components/Test/Youth.vue";
import { mapState, mapActions } from "vuex";

const qnaStore = "qnaStore";
export default {
  data() {
    return {
      fields: [{ key: "subject", label: "", tdClass: "tdSubject" }],
      searchKeyword: "",
      perPage: 5, //몇개로 나누어서 페이지 처리 할 것인지
      currentPage: 1, // 디폴트 페이지는 몇페이지로 할 것인지.
    };
  },

  components: {
    Youth,
  },

  computed: {
    ...mapState(qnaStore, ["questions"]),
    rows() {
      return this.questions.length; // 테이블 길이 보고 상태 변경.
    },
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

<style>
.tdClass {
  width: 80px;
  text-align: center;
}
</style>
