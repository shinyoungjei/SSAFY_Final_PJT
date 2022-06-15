<template>
  <b-container>
    <div style="height: 50px"></div>
    <b-row style="text-align: center">
      <b-col class="text-primary font-weight-bold">
        <h1 style="font-size: 50px">질문하기</h1>
      </b-col>
    </b-row>

    <div style="height: 50px"></div>
    <!-- 검색 바 -->
    <b-row>
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
    <div style="height: 50px"></div>
    <b-row>
      <b-col cols="10"></b-col>
      <b-col>
        <!-- 관리자일 경우에만 등록하기 사용가능 -->
        <router-link to="/regist">질문 등록</router-link>
      </b-col>
    </b-row>
    <!-- 등록하기 종료-->

    <div style="height: 10px"></div>

    <b-row style="text-align: center">
      <b-col></b-col>
      <b-col cols="10">
        <b-table :fields="fields" :items="questions" hover responsive="lg">
          <template #cell(subject)="data">
            <router-link :to="'/question/' + data.item.qnaNo">
              {{ data.item.subject }}
            </router-link>
          </template>
        </b-table>
      </b-col>
      <b-col></b-col>
    </b-row>
    ul class="pagination">
<!-- li태그의 클래스에 disabled를 넣으면 마우스를 위에 올렸을 때 클릭 금지 마크가 나오고 클릭도 되지 않는다.-->
<!-- disabled의 의미는 앞의 페이지가 존재하지 않다는 뜻이다. -->
<li class="disabled">
<a href="#">
<span>«</span>
</a>
</li>
<!-- li태그의 클래스에 active를 넣으면 색이 반전되고 클릭도 되지 않는다. -->
<!-- active의 의미는 현재 페이지의 의미이다. -->
<li class="active"><a href="#">1</a></li>
<li><a href="#">2</a></li>
<li><a href="#">3</a></li>
<li><a href="#">4</a></li>
<li><a href="#">5</a></li>
<li>
<a href="#">
<span>»</span>
</a>
</li>
</ul>


출처: https://nowonbun.tistory.com/702 [명월 일지]
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
        { key: "regtime", label: "작성시간" },
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
