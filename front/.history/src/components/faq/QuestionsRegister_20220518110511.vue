<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h1 class="underline">SSAFY 도서 등록</h1>
      </b-col>
    </b-row>
    <b-form @submit.prevent="registBook">
      <b-form-group
        id="input-group-1"
        label="도서번호(ISBN) :"
        label-for="isbn"
        description="ISBN을 입력하시오"
      >
        <b-form-input
          id="isbn"
          v-model="isbn"
          type="text"
          placeholder="도서번호 입력"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="제목(title) :"
        label-for="title"
        description="title을 입력하시오"
      >
        <b-form-input
          id="title"
          v-model="title"
          type="text"
          placeholder="도서제목 입력"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="저자(author) :"
        label-for="author"
        description="author을 입력하시오"
      >
        <b-form-input
          id="author"
          v-model="author"
          type="text"
          placeholder="저자 입력"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="가격(price) :"
        label-for="price"
        description="price을 입력하시오"
      >
        <b-form-input
          id="price"
          v-model.number="price"
          type="number"
          placeholder="가격 입력"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-5"
        label="설명(description) :"
        label-for="description"
        description="description을 입력하시오"
      >
        <b-form-textarea
          id="descriotion"
          v-model="description"
          placeholder="설명 입력"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button variant="success" class="mr-2" type="submit">등록</b-button>
      <b-button variant="primary" class="mr-2" @click="moveList">목록</b-button>
      <b-button variant="danger" type="reset">초기화</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      isbn: "",
      title: "",
      author: "",
      price: 0,
      description: "",
    };
  },
  methods: {
    registBook() {
      //book객체 만들기
      let book = {
        isbn: this.isbn,
        title: this.title,
        author: this.author,
        price: this.price,
        description: this.description,
      };

      //등록 요청 보내기
      this.$axios
        .post("http://localhost:8080/webex/book", book)
        .then(() => {
          alert("등록 성공");
          //등록 성공 시 목록 페이지로 이동
          this.moveList();
        })
        .catch((err) => {
          console.error(err);
          alert("등록 실패");
        });
    },
    moveList() {
      this.$router.push("/book");
    },
  },
};
</script>

<style></style>


// <template>
//   <b-container class="bv-example-row">
//     <b-row>
//       <b-col>
//         <h1 class="underline">Q&A등록</h1>
//       </b-col>
//     </b-row>
//     <b-form @submit.prevent="registBook">
//       <b-form-group id="input-group-2" label="제목(title) :" label-for="title">
//         <b-form-input
//           id="title"
//           v-model="title"
//           type="text"
//           placeholder="질문작성"
//           required
//         ></b-form-input>
//       </b-form-group>

//       <b-form-group id="input-group-3" label="저자(ID) :" label-for="userid">
//         <b-form-input
//           id="userid"
//           v-model="userid"
//           type="text"
//           placeholder="ID 입력"
//           required
//         ></b-form-input>
//       </b-form-group>

//       <b-form-group id="input-group-5" label="Q&A:" label-for="content">
//         <b-form-textarea
//           id="content"
//           v-model="content"
//           placeholder="질문을 작성해주세요."
//           rows="20"
//           max-rows="20"
//         ></b-form-textarea>
//       </b-form-group>
//       <b-button
//         variant="success"
//         class="mr-2"
//         type="submit"
//         @click="registQuestions"
//         >등록</b-button
//       >
//       <b-button variant="primary" class="mr-2" @click="moveList">목록</b-button>
//       <b-button variant="danger" type="reset">초기화</b-button>
//     </b-form>
//   </b-container>
// </template>

// <script>
// export default {
//   data() {
//     return {
//       title: "",
//       userid: "",
//       content: "",
//     };
//   },

//   methods: {
//     registQuestions() {
//       const registq = {
//         title: this.title,
//         userid: this.userid,
//         content: this.content,
//       };

//       this.$store.dispatch("registQuestions", registq);
//     },
//   },
// };
// </script>

// <style></style>
