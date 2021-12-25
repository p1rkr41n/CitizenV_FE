<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Chào mừng đến với ứng dụng CitizenV</h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100">
                <p>
                  <img :src="imgLogo" alt="" />
                </p>
              </div>
              <div class="md-layout-item md-medium-size-100 text-left">
                <p><br/><br/><br/><br/><br/></p>
                <h4>Xin chào,</h4>
                <div>
                  <p>ID của bạn: {{ getareaCode }}</p>
                  <p>Đây là tài khoản thuộc quyền quản lý của {{ getarea }}</p>
                  <p>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1Wb8sjtNAFTmR0LMbUxrWWbT3g52hV7Va/view"
                      >Link: Mấu điều tra dân số</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
    imgLogo: {
      type: String,
      default: require("@/assets/img/logo.png"),
    },
  },
  data() {
    return {};
  },
  computed: mapGetters(["getarea", "getareaCode"]), // get from store
  //check if user is logged in
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
