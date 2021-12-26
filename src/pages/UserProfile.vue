<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <edit-profile-form data-background-color="green"> </edit-profile-form>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Khai báo theo hộ gia đình</h4>
            <p class="category">Khai báo theo hộ gia đình</p>
          </md-card-header>
          <md-card-content>
            <Khaibao></Khaibao>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Khai báo cá nhân</h4>
            <p class="category">Khai báo theo các nhân</p>
          </md-card-header>

          <md-card-content>
            <Khaibaocanhan></Khaibaocanhan>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm } from "@/pages";
import Khaibao from "../components/Tables/Khaibao.vue";
import Khaibaocanhan from "../components/Tables/Khaibaocanhan.vue";

export default {
  components: {
    EditProfileForm,
    Khaibaocanhan,
    Khaibao,
  },
  data() {
    return {
      area: "",
    };
  },
  //check if user is logged in
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    }
    this.area = this.$store.getters.getarea.area;
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    //get data from api
  },
};
</script>
