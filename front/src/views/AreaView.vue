<template>
  <b-container fluid class="text-center">
    <navi-bar style="z-index: 100" />

    <b-row>
      <b-col></b-col>
      <b-col>
        <div style="height: 150px"></div>
        <h1>관심지역</h1>
      </b-col>
      <b-col></b-col>
    </b-row>
    <br />
    <b-row>
      <b-col sm="2"></b-col>
      <b-col>
        <div>
          <b-table
            striped
            hover
            sticky-header="500px"
            :items="interestList"
            :fields="fields"
          >
            <template #cell(aptName)="data">
              <router-link :to="`/aptDetail/${data.item.aptCode}`">
                {{ data.item.aptName }}
              </router-link>
            </template>
            <template #cell(sidoName)="data">
              {{
                `${data.item.sidoName} ${data.item.gugunName} ${data.item.dongName} ${data.item.jibun}`
              }}
            </template>
            <template #cell(aptCode)="data">
              <b-button @click.stop="removeInterest(data.item)">제거</b-button>
            </template>
          </b-table>
        </div>
      </b-col>
      <b-col sm="2"></b-col>
    </b-row>
    <div style="height: 150px"></div>
  </b-container>
</template>

<script>
import NaviBar from "@/components/common/NaviBar.vue";
import { mapState, mapActions } from "vuex";

const aptStore = "aptStore";
const userStore = "userStore";

export default {
  components: {
    NaviBar,
  },

  computed: {
    ...mapState(userStore, ["loginUserInfo", "interest"]),
    ...mapState(aptStore, ["aptDetailInfo"]),
  },

  data() {
    return {
      fields: [
        { key: "aptName", label: "아파트명" },
        { key: "sidoName", label: "주소" },
        { key: "aptCode", label: "" },
      ],

      interestList: [],
    };
  },

  async created() {
    await this.setUserInterest(this.loginUserInfo.id);

    this.interest.forEach(async (aptCode) => {
      console.log(aptCode);
      await this.setAptDetailInfo(aptCode);
      this.interestList.push(this.aptDetailInfo);
    });
  },
  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    ...mapActions(userStore, ["deleteUserInterest", "setUserInterest"]),
    ...mapActions(aptStore, ["setAptDetailInfo"]),

    async removeInterest(apt) {
      const interestInfo = {
        userId: this.loginUserInfo.id,
        aptCode: apt.aptCode,
      };
      await this.deleteUserInterest(interestInfo);

      const index = this.interestList.indexOf(apt);
      this.interestList.splice(index, 1);
    },
  },
};
</script>

<style></style>
