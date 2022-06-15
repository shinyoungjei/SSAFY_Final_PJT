<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h1 class="underline">SSAFY 도서 등록</h1>
      </b-col>
    </b-row>
    <b-form @submit.prevent="registBook">
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
export default {};
</script>

<style></style>
