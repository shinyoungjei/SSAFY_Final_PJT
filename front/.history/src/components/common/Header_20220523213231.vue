<template>
  <b-container fluid>
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
    <div class="container-fluid bg-secondary py-5">
      <div class="container py-5">
        <div class="row align-items-center py-4">
          <div class="col-md-6 text-center text-md-left">
            <h1 class="mb-4 mb-md-0 text-primary text-uppercase">
              Blog Detail
            </h1>
          </div>
          <div class="col-md-6 text-center text-md-right">
            <div class="d-inline-flex align-items-center">
              <a class="btn btn-outline-primary" href="">Home</a>
              <i class="fas fa-angle-double-right text-primary mx-2"></i>
              <a class="btn btn-outline-primary disabled" href=""
                >Blog Detail</a
              >
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
.lb-loader,
.lightbox {
  text-align: center;
  line-height: 0;
}
.lb-dataContainer:after,
.lb-outerContainer:after {
  content: "";
  clear: both;
}
html.lb-disable-scrolling {
  overflow: hidden;
  position: fixed;
  height: 100vh;
  width: 100vw;
}
.lightboxOverlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: #000;
  filter: alpha(Opacity=80);
  opacity: 0.8;
  display: none;
}
.lightbox {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 10000;
  font-weight: 400;
}
.lightbox .lb-image {
  display: block;
  height: auto;
  max-width: inherit;
  max-height: none;
  border-radius: 3px;
  border: 4px solid #fff;
}
.lightbox a img {
  border: none;
}
.lb-outerContainer {
  position: relative;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: #fff;
}
.lb-loader,
.lb-nav {
  position: absolute;
  left: 0;
}
.lb-outerContainer:after {
  display: table;
}
.lb-loader {
  top: 43%;
  height: 25%;
  width: 100%;
}
.lb-cancel {
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 auto;
  background: url(../images/loading.gif) no-repeat;
}
.lb-nav {
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
}
.lb-container > .nav {
  left: 0;
}
.lb-nav a {
  outline: 0;
  background-image: url(data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);
}
.lb-next,
.lb-prev {
  height: 100%;
  cursor: pointer;
  display: block;
}
.lb-nav a.lb-prev {
  width: 34%;
  left: 0;
  float: left;
  background: url(../images/prev.png) left 48% no-repeat;
  filter: alpha(Opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.6s;
  -moz-transition: opacity 0.6s;
  -o-transition: opacity 0.6s;
  transition: opacity 0.6s;
}
.lb-nav a.lb-prev:hover {
  filter: alpha(Opacity=100);
  opacity: 1;
}
.lb-nav a.lb-next {
  width: 64%;
  right: 0;
  float: right;
  background: url(../images/next.png) right 48% no-repeat;
  filter: alpha(Opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.6s;
  -moz-transition: opacity 0.6s;
  -o-transition: opacity 0.6s;
  transition: opacity 0.6s;
}
.lb-nav a.lb-next:hover {
  filter: alpha(Opacity=100);
  opacity: 1;
}
.lb-dataContainer {
  margin: 0 auto;
  padding-top: 5px;
  width: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.lb-dataContainer:after {
  display: table;
}
.lb-data {
  padding: 0 4px;
  color: #ccc;
}
.lb-data .lb-details {
  width: 85%;
  float: left;
  text-align: left;
  line-height: 1.1em;
}
.lb-data .lb-caption {
  font-size: 13px;
  font-weight: 700;
  line-height: 1em;
}
.lb-data .lb-caption a {
  color: #4ae;
}
.lb-data .lb-number {
  display: block;
  clear: left;
  padding-bottom: 1em;
  font-size: 12px;
  color: #999;
}
.lb-data .lb-close {
  display: block;
  float: right;
  width: 30px;
  height: 30px;
  background: url(../images/close.png) top right no-repeat;
  text-align: right;
  outline: 0;
  filter: alpha(Opacity=70);
  opacity: 0.7;
  -webkit-transition: opacity 0.2s;
  -moz-transition: opacity 0.2s;
  -o-transition: opacity 0.2s;
  transition: opacity 0.2s;
}
.lb-data .lb-close:hover {
  cursor: pointer;
  filter: alpha(Opacity=100);
  opacity: 1;
}

/*
#navi {
  line-height: 100px;
  height: 100px;
  position: fixed;
  top: 30px;
  border-bottom: 0.5px solid rgb(3, 101, 248);
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
