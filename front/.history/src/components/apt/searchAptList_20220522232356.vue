<template>
  <b-row
    class="m-2"
    @click="selectHouse"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-table
      striped
      hover
      sticky-header="500px"
      :items="aptList"
      :fields="fields"
    >
      <template #cell(aptName)="data">
        <router-link :to="'#상세정보'">
          {{ data.item.aptName }}
        </router-link>
      </template>
    </b-table>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

const aptStore = "aptStore";

export default {
  computed: {
    ...mapState(aptStore, ["selectedAptcode", "aptList"]),
  },

  data() {
    return {
      fields: [
        { key: "aptName", label: "아파트명" },
        { key: "recentPrice", label: "거래금액(만원)" },
        { key: "gugunName", label: "구/군" },
        { key: "dongName", label: "법정동" },
        { key: "buildYear", label: "건축년도" },
      ],
    };
  },

  created() {
    this.$store.commit("aptStore/CLEAR_APTINFO");
  },

  methods: {
    ...mapActions(aptStore, ["setAptList"]),
  },
};
</script>
