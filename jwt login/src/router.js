import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
//
// import Dashboard from "./components/Dashboard.vue";
// import UserProfile from "./components/UserProfile.vue";
// import TableList from "./components/TableList.vue";
// import Typography from "./components/Typography.vue";
// import Icons from "./components/Icons.vue";
// import Notifications from "./components/Notifications.vue";



// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
  // {
  //   path: '/app',
      
      
  //   children: [
  //     {
  //       path: "dashboard",
  //       name: "Thống kê",
  //       component: Dashboard,
  //     },
  //     {
  //       path: "user",
  //       name: "Khai báo dân cư",
  //       component: UserProfile,
  //     },
  //     {
  //       path: "table",
  //       name: "Quản lý tài khoản",
  //       component: TableList,
  //     },
  //     {
  //       path: "typography",
  //       name: "Giới thiệu",
  //       component: Typography,
  //     },
  //     {
  //       path: "icons",
  //       name: "Tìm kiếm",
  //       component: Icons,
  //     },
     
  //     {
  //       path: "notifications",
  //       name: "Notifications",
  //       component: Notifications,
  //     },
     
  //   ],
  // },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;