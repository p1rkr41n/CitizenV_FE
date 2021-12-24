<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <div
          class="
            md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100
          "
          style="z-index: 2"
        >
          <md-card class="md-card-plain">
            <md-card-header data-background-color="green">
              <h5 style="opacity: 0.85" class="title">
                Nhập thông tin bên dưới đề tìm kiếm một người bất kỳ:
              </h5>
              <div
                class="
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-100
                "
                data-background-color="green"
              >
                <p>Địa chỉ:</p>
                <v-select
                  :options="city"
                  label="name"
                  placeholder="Tỉnh/thành phố"
                  v-model="selectedCity.name"
                  @input ="getDistrict"
                  class="
                    md-dropdown-vselector
                    md-layout-item
                    md-medium-size-100
                    md-xsmall-size-100
                    md-size-20
                  "
                ></v-select>

                <v-select
                  :options="district"
                  label="name"
                  placeholder="Huyện/quận"
                  v-model="selectedDistrict.name"
                  @input ="getCommune"
                  class="
                    md-dropdown-vselector
                    md-layout-item
                    md-medium-size-100
                    md-xsmall-size-100
                    md-size-20
                  "
                ></v-select>

                <v-select
                  :options="commune"
                  label="name"
                  placeholder="Xã/phường/thị trấn"
                  v-model="selectedCommune.name"
                  @input ="getVillage"
                  class="
                    md-dropdown-vselector
                    md-layout-item
                    md-medium-size-100
                    md-xsmall-size-100
                    md-size-20
                  "
                ></v-select>

                <v-select
                  :options="village"
                  label="name"
                  placeholder="Thôn/xóm/địa phương"
                  v-model="selectedVillage.name"
                  class="
                    md-dropdown-vselector
                    md-layout-item
                    md-medium-size-100
                    md-xsmall-size-100
                    md-size-20
                  "
                ></v-select>
                <!--  -->
              </div>
              <!--  -->
              <!--  -->
              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-field>
                  <label id="whiter">Họ và tên</label>
                  <md-input
                    id="whiter"
                    v-model="cname"
                    type="text"
                    onkeyup="this.value = this.value.toUpperCase();"
                  ></md-input>
                </md-field>
              </div>
              <!--  -->
              <div
                class="md-layout-item md-size-100 text-right"
                style="padding-top: 10px"
              >
                <md-button class="md-raised md-primary md-round">
                  Tìm kiếm<md-icon>arrow_downward</md-icon></md-button
                >
              </div>
            </md-card-header>
          </md-card>
        </div>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        style="z-index: 0"
      >
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">MENU:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab
                id="tab-home"
                md-label="Danh sách"
                md-icon="manage_search"
              >
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab
                id="tab-pages"
                md-label="Cá nhân"
                md-icon="account_circle"
              >
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import { NavTabsCard, NavTabsTable } from "@/components";

export default {
  components: {
    NavTabsCard,
    NavTabsTable,
  },
  data() {
    return {
      cname: "",
      city: [],
      district: [],
      commune: [],
      village: [],
      area: "",
      event: "",
      selectedCity: {},
      selectedDistrict: {},
      selectedCommune: {},
      selectedVillage: {},
    };
  },
  computed: mapGetters(["getidarea"]), // get from store
  //check if user is logged in
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    }
    this.area = this.$store.getters.getarea.area;
    axios.get(`http://localhost:3000/api/address/city`).then((res) => {
      (this.city = res.data), null, 2;
      this.sortedArray = this.city.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    });
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    sortedArray() {}, // sort
    getDistrict() {
      console.log(this.selectedCity.name._id);
      axios
        .get(
          `http://localhost:3000/api/address/district?idCityRef=${this.selectedCity.name._id}`
        )
        .then((res) => {
          (this.district = res.data), null, 2;
          this.sortedArray = this.district.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          console.log(this.district);
        });
    },
    
      getCommune() {
      console.log(this.selectedDistrict.name);
      axios
        .get(
          `http://localhost:3000/api/address/commune?idDistrictRef=${this.selectedDistrict.name._id}`
        )
        .then((res) => {
          (this.commune = res.data), null, 2;
          this.sortedArray = this.commune.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        });
    },
    getVillage() {
      console.log(this.selectedCommune.name);
      axios
        .get(
          `http://localhost:3000/api/address/village?idCommuneRef=${this.selectedCommune.name._id}`
        )
        .then((res) => {
          (this.village = res.data), null, 2;
          this.sortedArray = this.village.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        });
    },
    //get data from api
  },
};
</script>
<style scoped>
#whiter {
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
}
p {
  font-size: 14px;
  font-weight: bold;
  padding-top: 10px;
}
</style>
