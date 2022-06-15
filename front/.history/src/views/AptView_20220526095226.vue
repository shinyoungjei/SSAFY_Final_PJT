<template>
  <b-container fluid class="text-center">
    <navi-bar style="z-index: 100" />

    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <b-row>
          <b-col>
            <div style="height: 150px"></div>
            <b-row style="text-align: center">
              <b-col class="text-dark font-weight-bold">
                <h1>아파트 매매정보</h1>
              </b-col>
            </b-row>

            <hr />
            <search-apt-bar></search-apt-bar>
            <hr />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <search-apt-list></search-apt-list>
          </b-col>
          <b-col>
            <apt-map></apt-map>
          </b-col>
        </b-row>
      </b-col>
      <b-col></b-col>
    </b-row>
    <div style="height: 150px"></div>
  </b-container>
</template>

<script>
import NaviBar from "@/components/common/NaviBar.vue";
import searchAptBar from "@/components/apt/searchAptBar.vue";
import searchAptList from "@/components/apt/searchAptList.vue";
import aptMap from "@/components/apt/aptMap.vue";
export default {
  components: {
    NaviBar,
    searchAptBar,
    searchAptList,
    aptMap,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style></style>
