import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NoticeView from "@/views/NoticeView.vue";
import AptView from "@/views/AptView.vue";
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
    // Q&A
    path: "/question",
    name: "question",
    component: () => import("@/views/QuestionView.vue"),
    redirect: "/question/list",
    children: [
      {
        // 리스트 정보 반환
        path: "list",
        name: "questionList",
        component: () => import("@/components/faq/QuestionList.vue"),
      },
    ],
  },
  {
    //공지사항
    path: "/notice",
    name: "notice",
    component: NoticeView,
  },
  {
    //매매정보
    path: "/building",
    name: "building",
    component: AptView,
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
