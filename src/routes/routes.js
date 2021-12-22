import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Population from "@/pages/Population.vue";
import Login from "@/pages/Login.vue";

const routes = [
    {
    path:"/login",
    name: Login,
    component: Login,
  },

  {
    path: "/app",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
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
        path: "typography",
        name: "Giới thiệu",
        component: Typography,
      },
      {
        path: "icons",
        name: "Tìm kiếm",
        component: Icons,
      },
     
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
     
    ],
  },
];

export default routes;
