<template>
  <b-container fluid>
    <navi-bar style="z-index: 1000" />
    <div style="height: 150px"></div>
    <b-row>
      <b-col></b-col>
      <b-col cols="7">
        <b-row>
          <b-col>
            <b-row>
              <h4 class="font-weight-bold">아파트 상세정보</h4>
            </b-row>
            <hr class="border border-primary" />
            <b-row>
              <b-col cols="3" class="font-weight-bold"> 아파트명</b-col>
              <b-col cols="7"> {{ aptDetailInfo.aptName }}</b-col>
            </b-row>
            <hr class="border border-primary" />
            <b-row>
              <b-col cols="3" class="font-weight-bold"> 주소 </b-col>
              <b-col cols="7">
                {{
                  `${aptDetailInfo.sidoName} ${aptDetailInfo.gugunName} ${aptDetailInfo.dongName} ${aptDetailInfo.jibun}`
                }}</b-col
              >
            </b-row>
            <hr class="border border-primary" />
            <b-row>
              <b-col cols="3" class="font-weight-bold"> 건축년도 </b-col>
              <b-col cols="7"> {{ `${aptDetailInfo.buildYear}년` }}</b-col>
            </b-row>
            <hr class="border border-primary" />

            <br />
            <br />

            <b-row>
              <h4 class="font-weight-bold">최근 거래 내역</h4>
            </b-row>
            <hr class="border border-primary" />
            <b-row class="text-center">
              <b-col cols="3" class="font-weight-bold"> 매매 일자</b-col>
              <b-col cols="3" class="font-weight-bold"> 매매 가격(만원)</b-col>
              <b-col cols="3" class="font-weight-bold"> 평수</b-col>
              <b-col cols="3" class="font-weight-bold"> 층수</b-col>
            </b-row>
            <hr class="border border-primary" />
            <b-row
              class="text-center"
              v-for="(aptDealInfo, index) in recentlyAptDealInfo"
              :key="index"
            >
              <b-col cols="3">
                {{
                  `${aptDealInfo.dealYear}.${aptDealInfo.dealMonth}.${aptDealInfo.dealDay}`
                }}</b-col
              >
              <b-col cols="3"> {{ aptDealInfo.dealAmount }}</b-col>
              <b-col cols="3">{{ aptDealInfo.area }}</b-col>
              <b-col cols="3">{{ aptDealInfo.floor }}</b-col>
            </b-row>

            <hr class="border border-primary" />

            <br />
            <br />

            <b-row>
              <h4 class="font-weight-bold">위치 및 주변시설</h4>
            </b-row>
            <hr class="border border-primary" />
            <apt-map :position="position" />
            <hr class="border border-primary" />
            <b-row>
              <b-col></b-col>
              <b-col cols="2">
                <b-row>
                  <b-col>
                    <img
                      fluid
                      src="@/assets/convenience_store.png"
                      alt="편의점"
                      width="75px"
                    />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div>
                      <b-button variant="outline-primary">편의점</b-button>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col></b-col>
            </b-row>
          </b-col>
          <b-col cols="4">
            <b-row>
              <h4 class="font-weight-bold">모아보기</h4>
            </b-row>
            <b-row class="border border-primary">
              <b-col cols="1"></b-col>
              <b-col class="font-weight-bold">
                <div style="height: 20px"></div>
                <div>
                  <p>
                    {{ `평균 매매가(만원): ${averageDealAmount}` }}
                  </p>
                </div>
                <div>
                  <p>
                    {{ `조회수: ${aptDetailInfo.hit}` }}
                  </p>
                </div>
                <hr class="border border-primary" />
                <b-row>
                  <b-col cols="7">
                    <div style="height: 5px"></div>
                    <p>편의시설</p>
                    <div v-if="nearestConvenienceStoreDistance == 2147483647">
                      편의점 : 없음
                    </div>
                    <div v-else-if="nearestConvenienceStoreDistance > 1000">
                      편의점 : 1km이내 없음
                    </div>
                    <div v-else>
                      편의점 : {{ `${nearestConvenienceStoreDistance}m` }}
                    </div>
                  </b-col>
                </b-row>
                <hr class="border border-primary" />
                <b-row>
                  <b-col cols="7">
                    <p>관심지역</p>
                  </b-col>
                  <b-col v-if="isInterest">
                    <b-button
                      variant="outline-white"
                      @click="isInterest = !isInterest"
                    >
                      <img
                        src="@/assets/heartRed.png"
                        style="display: inline-block; height: 30px; width: 30px"
                      />
                    </b-button>
                  </b-col>
                  <b-col v-else>
                    <b-button
                      variant="outline-white"
                      @click="isInterest = !isInterest"
                    >
                      <img
                        src="@/assets/heart.png"
                        style="display: inline-block; height: 30px; width: 30px"
                      />
                    </b-button>
                  </b-col>
                </b-row>

                <div style="height: 20px"></div>
              </b-col>
              <b-col cols="1"></b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NaviBar from "@/components/common/NaviBar.vue";
import AptMap from "@/components/apt/aptMap.vue";

const aptStore = "aptStore";
const userStore = "userStore";

export default {
  components: {
    AptMap,
    NaviBar,
  },

  watch: {
    isInterest() {
      // 관심지역 등록
      if (this.isInterest == true) {
        this.insertUserInterest(this.interestInfo);
      }
      // 관심지역 제거
      else {
        this.deleteUserInterest(this.interestInfo);
      }
    },
  },

  data() {
    return {
      position: [],
      isInterest: false,
      interestInfo: {},
    };
  },

  computed: {
    ...mapState(userStore, ["loginUserInfo", "interest"]),
    ...mapState(aptStore, [
      "aptDetailInfo",
      "recentlyAptDealInfo",
      "nearestConvenienceStoreDistance",
    ]),
    averageDealAmount() {
      let average = 0;
      let cnt = 0;
      this.recentlyAptDealInfo.map(({ dealAmount }) => {
        average = average + parseInt(dealAmount.replace(",", ""));
        cnt++;
      });
      return (average / cnt)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
  },

  async created() {
    const detailAptCode = this.$route.params.aptCode;
    await this.setAptDetailInfo(detailAptCode);
    await this.setRecentlyAptDealInfo(detailAptCode);
    await this.setConvenienceStorePositions(this.aptDetailInfo.dongCode);
    this.position = [[this.aptDetailInfo.lat, this.aptDetailInfo.lng]];

    await this.setUserInterest(this.loginUserInfo.id);
    this.interest.forEach(async (aptCode) => {
      if (aptCode == detailAptCode) {
        this.isInterest = true;
      }
    });

    this.interestInfo = {
      userId: this.loginUserInfo.id,
      aptCode: detailAptCode,
    };

    this.updateAptHit(detailAptCode);

    await this.setConvenienceStoreDistance(this.aptDetailInfo);
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    ...mapActions(aptStore, [
      "setAptDetailInfo",
      "setRecentlyAptDealInfo",
      "updateAptHit",
      "setConvenienceStorePositions",
      "setConvenienceStoreDistance",
    ]),
    ...mapActions(userStore, [
      "setUserInterest",
      "deleteUserInterest",
      "insertUserInterest",
    ]),
  },
};
</script>
