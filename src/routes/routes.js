import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Population from "@/pages/Population.vue";
import Login from "@/pages/Login.vue";

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
        component: Dashboard,
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
        component: Typography,
      },
      {
        path: "searcher",
        name: "Tìm kiếm",
        component: Icons,
      },
    ],
  },
];

export default routes;
