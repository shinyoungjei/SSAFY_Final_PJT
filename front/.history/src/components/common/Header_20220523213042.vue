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
    <div class="container-fluid position-relative nav-bar p-0">
      <div class="container position-relative" style="z-index: 9">
        <nav
          class="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5"
        >
          <a href="" class="navbar-brand">
            <h1 class="m-0 display-5 text-white">
              <span class="text-primary">i</span>DESIGN
            </h1>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between px-3"
            id="navbarCollapse"
          >
            <div class="navbar-nav ml-auto py-0">
              <a href="index.html" class="nav-item nav-link">Home</a>
              <a href="about.html" class="nav-item nav-link">About</a>
              <a href="service.html" class="nav-item nav-link">Service</a>
              <a href="project.html" class="nav-item nav-link">Project</a>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle active"
                  data-toggle="dropdown"
                  >Pages</a
                >
                <div class="dropdown-menu rounded-0 m-0">
                  <a href="blog.html" class="dropdown-item">Blog Grid</a>
                  <a href="single.html" class="dropdown-item">Blog Detail</a>
                </div>
              </div>
              <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="container-fluid bg-white py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 text-left mb-3 mb-lg-0">
            <div class="d-inline-flex text-left">
              <h1
                class="flaticon-office font-weight-normal text-primary m-0 mr-3"
              ></h1>
              <div class="d-flex flex-column">
                <h5>Our Office</h5>
                <p class="m-0">123 Street, New York, USA</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 text-left text-lg-center mb-3 mb-lg-0">
            <div class="d-inline-flex text-left">
              <h1
                class="flaticon-email font-weight-normal text-primary m-0 mr-3"
              ></h1>
              <div class="d-flex flex-column">
                <h5>Email Us</h5>
                <p class="m-0">info@example.com</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 text-left text-lg-right mb-3 mb-lg-0">
            <div class="d-inline-flex text-left">
              <h1
                class="flaticon-telephone font-weight-normal text-primary m-0 mr-3"
              ></h1>
              <div class="d-flex flex-column">
                <h5>Call Us</h5>
                <p class="m-0">+012 345 6789</p>
              </div>
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
