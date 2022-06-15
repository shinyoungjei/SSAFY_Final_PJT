<template>
  <b-container v-if="aptList" class="bv-example-row">
    <b-row>
      <b-col><h3>아파트이름</h3></b-col>
    </b-row>
    <b-row class="mb-2 mt-1"> </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary"
          >일련번호 : {{ aptlist.aptCode }}</b-alert
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="primary"
          >아파트 이름 :{{ aptList.aptName }}
        </b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="info">법정동 : {{ aptList.dongName }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="warning">평수 : {{ aptList.lat }}</b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

const aptStore = "aptStore";

export default {
  computed: {
    ...mapState(aptStore, ["aptList"]),
    // house() {
    //   return this.$store.state.house;
    // },
  },
};
</script>

<style></style>
