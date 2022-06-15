<template>
  <b-row class="text-center">
    <b-col>
      <b-input-group prepend="답변" class="mt-3">
        <b-form-textarea
          id="content"
          v-model="content"
          placeholder="내용 입력"
          rows="3"
          max-rows="5"
          @keypress.enter="registChat"
        ></b-form-textarea>
        <b-input-group-append>
          <b-button variant="outline-primary" @click="registChat"
            >등록</b-button
          >
        </b-input-group-append>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";

const qnaStore = "qnaStore";

export default {
  data() {
    return {
      contentTitle: "",
    };
  },

  methods: {
    ...mapActions(qnaStore, ["createdContent"]),
    // 댓글 등록
    registChat() {
      const contentItem = {
        title: this.contentTitle,
        completed: false,
      };
      if (contentItem.title) this.createdContent(contentItem);
      this.contentTitle = "";
    },
  },
};
</script>

<style></style>
