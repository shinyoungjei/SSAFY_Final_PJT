<template>
  <b-container class="mb-4 text-center">
    <b-row>
      <b-col class="col-3">
        <b-form-select v-model="selectedSidocode" @change="setGuguncode">
          <b-form-select-option :value="null">시/도 선택</b-form-select-option>
          <b-form-select-option
            v-for="(sido, index) in sidocodeList"
            :key="index"
            :value="sido.sidoCode"
          >
            {{ sido.sidoName }}
          </b-form-select-option>
        </b-form-select>
      </b-col>

      <b-col class="col-3">
        <b-form-select v-model="selectedGuguncode" @change="setDongcode">
          <b-form-select-option :value="null">구/군 선택</b-form-select-option>
          <b-form-select-option
            v-for="(gugun, index) in guguncodeList"
            :key="index"
            :value="gugun.gugunCode"
          >
            {{ gugun.gugunName }}
          </b-form-select-option>
        </b-form-select>
      </b-col>

      <b-col class="col-2">
        <b-form-select v-model="selectedDongcode" @change="setAptcode">
          <b-form-select-option :value="null">법정동 선택</b-form-select-option>
          <b-form-select-option
            v-for="(dong, index) in dongcodeList"
            :key="index"
            :value="dong.dongCode"
          >
            {{ dong.dongName }}
          </b-form-select-option>
        </b-form-select>
      </b-col>

      <b-col class="col-3">
        <b-form-input
          placeholder=" 아파트명으로검색"
          v-model.trim="keyword"
          @keyup.enter="searchByName"
        ></b-form-input>
      </b-col>
      <div class="col-1">
        <b-button variant="outline-primary" @click="searchByName"
          >검색</b-button
        >
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const aptStore = "aptStore";

export default {
  computed: {
    ...mapState(aptStore, ["sidocodeList", "guguncodeList", "dongcodeList"]),
  },

  data() {
    return {
      selectedSidocode: null,
      selectedGuguncode: null,
      selectedDongcode: null,
      keyword: "",
    };
  },

  methods: {
    ...mapActions(aptStore, [
      "setSido",
      "setGugun",
      "setDong",
      "setAptList",
      "setConvenienceStorePositions",
      "setAptByName",
    ]),

    setGuguncode() {
      this.setGugun(this.selectedSidocode);
    },

    setDongcode() {
      this.setDong(this.selectedGuguncode);
    },

    setAptcode() {
      this.setAptList(this.selectedDongcode);
      this.setConvenienceStorePositions(this.selectedDongcode);
    },

    searchByName() {
      if (this.keyword) {
        this.setAptByName(this.keyword);
      }
    },
  },

  created() {
    this.setSido();
    if (this.$route.params.searchKeyword) {
      this.setAptByName(this.$route.params.searchKeyword);
    }
  },
};
</script>

<style></style>
