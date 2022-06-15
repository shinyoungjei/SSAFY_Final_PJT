<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="underline">도서 목록</h1>
      </b-col>
    </b-row>

    <b-row style="text-align: right">
      <b-col>
        <router-link :to="{ name: 'BookCreate' }">도서 등록</router-link>
      </b-col>
    </b-row>

    <b-row style="text-align: right">
      <b-col>
        <b-table small :fields="fields" :items="books" hover responsive="sm">
          <!-- A virtual column -->
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>
          <template #cell(title)="data">
            <router-link :to="'/book/' + data.item.isbn">{{
              data.item.title
            }}</router-link>
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
        { key: "index", label: "번호" },
        { key: "isbn", label: "ISBN" },
        { key: "title", label: "제목" },
        { key: "author", label: "저자" },
        { key: "price", label: "가격" },
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
