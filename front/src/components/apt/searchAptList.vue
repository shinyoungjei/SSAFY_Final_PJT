<template>
  <div>
    <b-table
      striped
      hover
      sticky-header="500px"
      :items="aptList"
      :fields="fields"
    >
      <template #cell(aptName)="data">
        <router-link :to="`/aptDetail/${data.item.aptCode}`">
          {{ data.item.aptName }}
        </router-link>
      </template>
      <template #cell(sidoName)="data">
        {{
          `${data.item.sidoName} ${data.item.gugunName} ${data.item.dongName}`
        }}
      </template>
    </b-table>
  </div>
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
        { key: "sidoName", label: "주소" },
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
