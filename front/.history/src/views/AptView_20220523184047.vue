<template>
  <b-container class="text-center">
    <div style="height: 80px">
      <h2>아파트 매매정보</h2>
      <hr />
    </div>
    <b-row>
      <b-col>
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
    <div style="height: 1000px"></div>
  </b-container>
</template>

<script>
import searchAptBar from "@/components/apt/searchAptBar.vue";
import searchAptList from "@/components/apt/searchAptList.vue";
import aptMap from "@/components/apt/aptMap.vue";
export default {
  components: {
    searchAptBar,
    searchAptList,
    aptMap,
  },
};
</script>

<style></style>
