<template>
  <b-container fluid>
    <navi-bar style="z-index: 1" />
    <div id="main" style="padding: 0">
      <div style="height: 200px"></div>
      <!-- height:480px; 이 중앙-->

      <b-row>
        <b-col></b-col>
        <b-col>
          <div style="height: 50px"></div>
          <b-input-group class="mt-3">
            <b-form-input
              v-model.trim="word"
              @keyup.enter="search"
              placeholder="원하시는 아파트 이름을 검색해주세요."
            ></b-form-input>
            <b-input-group-append>
              <b-button
                variant="outline-light"
                text="Button"
                @click.prevent="search"
                >검색</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-col>
        <b-col></b-col>
      </b-row>
    </div>
    <b-row class="text-center">
      <b-col> </b-col>
      <b-col cols="8">
        <crawling />
        <best-apt-list></best-apt-list>
      </b-col>
      <b-col> </b-col>
    </b-row>
    <div style="height: 150px"></div>
  </b-container>
</template>

<script>
import NaviBar from "@/components/common/NaviBar.vue";
import BestAptList from "@/components/apt/BestAptList.vue";
import Crawling from "@/components/home/Crawling.vue";

export default {
  components: {
    NaviBar,
    BestAptList,
    Crawling,
  },

  data() {
    return {
      word: "",
    };
  },

  methods: {
    search() {
      this.$router.push({
        name: "aptDeal",
        params: { searchKeyword: this.word },
      });
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#main {
  height: 500px;
  background-image: url(@/assets/groundTwo.png);
  background-size: 100%;
  background-repeat: no-repeat;
}

#input {
  display: inline-block;
  width: 150%;
  height: 50px;
  z-index: 10;
}

#btn {
  height: 50px;
}
</style>
