<template>
  <b-container fluid>
    <div style="height: 50px"></div>
    <div
      class="text-left text-dark font-weight-bold mb-2"
      style="font-size: 20px"
    >
      아파트 추천 리스트
    </div>
    <b-row class="mb-2">
      <b-col class="mr-2" v-for="index in first" :key="index">
        <router-link :to="`/aptDetail/${recommendAptList[index].aptCode}`">
          <b-row class="bg-light">
            <b-col class="bg-light">
              <div style="height: 20px"></div>
              <div class="font-weight-bold" style="font-size: 15px">
                {{
                  `${recommendAptList[index].sidoName} ${recommendAptList[index].gugunName} ${recommendAptList[index].dongName}`
                }}
              </div>
              <div class="font-weight-bold" style="font-size: 15px">
                {{ `${recommendAptList[index].aptName}` }}
              </div>
              <div style="font-size: 13px" class="mt-1">
                {{ `매물 조회수 ${recommendAptList[index].hit}회` }}
              </div>
              <br />
            </b-col>
          </b-row>
        </router-link>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col class="mr-2" v-for="index in second" :key="index">
        <router-link :to="`/aptDetail/${recommendAptList[index].aptCode}`">
          <b-row class="bg-light">
            <b-col class="bg-light">
              <div style="height: 20px"></div>
              <div class="font-weight-bold" style="font-size: 15px">
                {{
                  `${recommendAptList[index].sidoName} ${recommendAptList[index].gugunName} ${recommendAptList[index].dongName}`
                }}
              </div>
              <div class="font-weight-bold" style="font-size: 15px">
                {{ `${recommendAptList[index].aptName}` }}
              </div>
              <div style="font-size: 13px" class="mt-1">
                {{ `매물 조회수 ${recommendAptList[index].hit}회` }}
              </div>
              <br />
            </b-col>
          </b-row>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const aptStore = "aptStore";

export default {
  computed: {
    ...mapState(aptStore, ["recommendAptList"]),
  },

  data() {
    return {
      first: [0, 1, 2],
      second: [3, 4, 5],
    };
  },

  methods: {
    ...mapActions(aptStore, ["setHighestHitApt"]),
  },

  created() {
    this.setHighestHitApt();
  },
};
</script>

<style></style>
