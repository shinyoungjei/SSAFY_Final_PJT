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
          <b-col class="text-left font-weight-bold"> 공지사항 </b-col>
          <b-col></b-col>
          <b-col class="text-right font-weight-bold">
            <router-link to="/notice">더보기</router-link>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col class="text-left">
            <div v-for="(notice, i) in notices" v-bind:key="i" class="mb-1">
              <router-link
                v-if="i <= 6"
                :to="`/notice/` + notice.noticeNo"
                class="text-dark"
                style="font-size: 15px"
                >{{ `> ${notice.subject}` }}
              </router-link>
            </div>
          </b-col>

          <b-col cols="2"></b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col class="text-left font-weight-bold"> Q&A </b-col>
          <b-col></b-col>
          <b-col class="text-right font-weight-bold">
            <router-link to="/question">더보기</router-link>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col class="text-left">
            <div v-for="(question, i) in questions" v-bind:key="i" class="mb-1">
              <router-link
                v-if="i <= 6"
                :to="`/question/` + question.qnaNo"
                class="text-dark"
                style="font-size: 15px"
                >{{ `> ${question.subject}` }}
              </router-link>
            </div>
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
const noticeStroe = "noticeStore";
export default {
  data() {
    return {
      fields: [{ key: "subject", label: "", tdClass: "tdSubject" }],
    };
  },

  components: {
    Youth,
  },

  computed: {
    ...mapState(qnaStore, ["questions"]),
    ...mapState(noticeStroe, ["notices"]),
  },

  created() {
    this.setQuestions();
    this.setNotices();
  },

  methods: {
    ...mapActions(qnaStore, ["setQuestions"]),
    ...mapActions(noticeStroe, ["setNotices"]),
  },
};
</script>

<style>
.tdClass {
  width: 80px;
  text-align: center;
}
</style>
