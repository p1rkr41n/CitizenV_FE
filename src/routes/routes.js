import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Statistics from "@/pages/Statistics.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Home from "@/pages/Home.vue";
import Searcher from "@/pages/Searcher.vue";
import Population from "@/pages/Population.vue";
import Login from "@/pages/Login.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
    {
    path:"/",
    name: Login,
    component: Login,
  },
  {
    path: "/app",
    component: DashboardLayout,
    children: [
      {
        path: "statistics",
        name: "Thống kê",
        component: Statistics,
      },
      {
        path: "Population",
        name: "Dân số",
        component: Population,
      },
      {
        path: "user",
        name: "Khai báo dân cư",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Quản lý tài khoản",
        component: TableList,
      },
      {
        path: "home",
        name: "Giới thiệu",
        component: Home,
      },
      {
        path: "searcher",
        name: "Tìm kiếm",
        component: Searcher,
      },
    ],
  },
  {
    path: "*",
    name: "NOT FOUND",
    component: NotFound,
  },
];

export default routes;
