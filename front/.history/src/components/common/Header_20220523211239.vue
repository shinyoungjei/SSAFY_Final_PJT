<template>
  <b-container fluid id="navi">
    <div id="top">
      <router-link to="/notice" class="link">공지사항</router-link>
      <router-link to="/aptDeal" class="link">매매정보</router-link>
      <router-link to="/area" class="link">관심목록</router-link>
      <img
        src="@/assets/heartRed.png"
        @click="goHome"
        style="padding-right: 200px; height: 100px"
      />
      <router-link to="/question" class="link2">질문하기</router-link>
    </div>
  </b-container>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* #navi {
  line-height: 100px;
  height: 100px;
  position: fixed;
  top: 30px;
  border-bottom: 0.3px solid rgb(214, 212, 207);
}

#navi:hover {
  background-color: white;
  transition-duration: 0.5s;
}

#navi:hover .link {
  color: black;
}
#navi:hover .link2 {
  color: black;
}

.link {
  color: white;
  margin-left: 50px;
  font-weight: 600;
  font-size: 20px;
  float: left;
}

.link2 {
  color: white;
  margin-right: 50px;
  font-weight: 600;
  font-size: 20px;
  float: right;
}

#top {
  margin-left: 0;
  margin-right: 50px;
}

#img {
  cursor: pointer;
} */
</style>
