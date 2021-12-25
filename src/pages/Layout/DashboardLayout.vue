<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>

      <sidebar-link to="/app/home">
        <md-icon>home</md-icon>
        <p>GIỚI THIỆU</p>
      </sidebar-link>
      <sidebar-link to="/app/statistics">
        <md-icon>dashboard</md-icon>
        <p>THỐNG KÊ</p>
      </sidebar-link>
      <sidebar-link to="/app/population">
        <md-icon>people</md-icon>
        <p>DÂN SỐ</p>
      </sidebar-link>
      <sidebar-link to="/app/user">
        <md-icon>person</md-icon>
        <p>KHAI BÁO</p>
      </sidebar-link>
      <sidebar-link to="/app/table">
        <md-icon>content_paste</md-icon>
        <p>QUẢN LÝ TÀI KHOẢN</p>
      </sidebar-link>

      <sidebar-link to="/app/searcher">
        <md-icon>find_in_page</md-icon>
        <p>TÌM KIÊM</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>
