<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Tài khoản</h4>
            <p class="category">Danh sách những tài khoản đã được cấp</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-size-100 text-right">
        <md-button class="md-raised md-success">Save tai khoan</md-button>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Table on Plain Background</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <ReligionTable></ReligionTable>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <div class="md-layout-item md-size-100 text-right">
      <md-button class="md-raised md-success">Save gi do</md-button>
    </div>
  </div>
</template>

<script>
import { SimpleTable, ReligionTable } from "@/components";

export default {
  components: {
    ReligionTable,
    SimpleTable,
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
    // this.secretMessage = await AuthService.getSecretContent();
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
