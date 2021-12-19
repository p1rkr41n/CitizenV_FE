import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Login from "@/pages/Login.vue";


import Notifications from "@/pages/Notifications.vue";

// import Login from "@views/Login.vue"


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: "/app",
    name: "DashboardLayout",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        name: "Thống kê",
        component: Dashboard,
      },
  
      {
        path: "user",
        name: "Khai bao",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Intro",
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
