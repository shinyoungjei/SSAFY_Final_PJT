<template>
  <b-container>
    <div class="container-fluid bg-dark py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center">
              <a class="text-white pr-3" href="">FAQs</a>
              <span class="text-white">|</span>
              <a class="text-white px-3" href="">Help</a>
              <span class="text-white">|</span>
              <a class="text-white pl-3" href="">Support</a>
            </div>
          </div>
          <div class="col-md-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
              <a class="text-white px-3" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-white px-3" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-white px-3" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="text-white px-3" href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="text-white pl-3" href="">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
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
#navi {
  line-height: 100px;
  height: 100px;
  position: fixed;
  top: 30px;
  border-bottom: 0.5px solid rgb(3, 101, 248);
}

/*
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
