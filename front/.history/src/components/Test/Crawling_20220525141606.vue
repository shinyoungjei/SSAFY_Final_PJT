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
            <a href="/notice" class="text-dark">더보기</a>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col class="text-left">
            <ul style="list-style: none">
              <li v-for="(listN, i) in notices" v-bind:key="i">
                <div v-if="i <= 5">
                  <router-link
                    :to="`/notice/` + listN.noticeNo"
                    class="text-dark"
                    style="font-size: 15px"
                    >{{ listN.subject }}</router-link
                  >
                </div>
              </li>
            </ul>
          </b-col>

          <b-col cols="2"></b-col>
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
import { mapState } from "vuex";

const qnaStore = "qnaStore";
const noticeStore = "noticeStore";
export default {
  components: {
    Youth,
  },

  computed: {
    ...mapState(qnaStore, ["questions"]),
    ...mapState(noticeStore, ["notices"]),
  },
};
</script>

<style>
.tdClass {
  width: 80px;
  text-align: center;
}
</style>
