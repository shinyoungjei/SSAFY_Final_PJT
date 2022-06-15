import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AreaView from "@/views/AreaView.vue";

Vue.use(VueRouter);

const routes = [
  //홈 화면
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/UserView.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/user/UserLogin.vue"),
      },
      {
        path: "regist",
        name: "regist",
        component: () => import("@/components/user/UserRegister.vue"),
      },
      {
        path: "mypage",
        name: "mypage",
        component: () => import("@/components/user/UserMyPage.vue"),
      },
      {
        path: "testmypage",
        name: "testmypage",
        component: () => import("@/components/user/TestMyPage.vue"),
      },
    ],
  },
  {
    // Q&A
    path: "/question",
    component: () => import("@/views/QuestionView.vue"),
    children: [
      {
        // 리스트 정보 반환
        path: "",
        name: "questionList",
        component: () => import("@/components/faq/QuestionList.vue"),
      },
      {
        // 질문 등록.
        path: "/regist",
        name: "questionRegist",
        component: () => import("@/components/faq/QuestionsRegister.vue"),
      },
      {
        // 상세화면
        path: ":qnaNo",
        name: "questionDetail",
        component: () => import("@/components/faq/QuestionDetail.vue"),
      },
      {
        // 수정
        path: "modify/:qnaNo",
        name: "questionModify",
        component: () => import("@/components/faq/QuestionModify.vue"),
      },
    ],
  },
  {
    //공지사항
    path: "/notice",
    name: "notice",
    component: () => import("@/views/NoticeView.vue"),
    children: [
      {
        // 공지사항 리스트
        path: "",
        name: "noticeList",
        component: () => import("@/components/notice/NoticeList.vue"),
      },
      {
        // 공지사항 등록하기.
        path: "/noticeRegist",
        name: "noticeRegist",
        component: () => import("@/components/notice/NoticeRegister.vue"),
      },
      {
        // 공지사항 상세화면
        path: ":noticeNo",
        name: "noticeDetail",
        component: () => import("@/components/notice/NoticeDetail.vue"),
      },
      {
        // 공지사항 수정하기.
        path: "modify/:noticeNo",
        name: "noticeModify",
        component: () => import("@/components/notice/NoticeModify.vue"),
      },
    ],
  },
  {
    //매매정보
    path: "/aptDeal",
    name: "aptDeal",
    component: () => import("@/views/AptView.vue"),
    children: [
      {
        path: "",
        name: "",
        component: () => import("@/components/apt/searchAptDetail.vue"),
      },
    ],
  },
  {
    //관심지역
    path: "/area",
    name: "area",
    component: AreaView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
