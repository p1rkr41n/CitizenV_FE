<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
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
                  @input="getDistrict"
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
                  @input="getCommune"
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
                  @input="getVillage"
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
                @click="updateData"
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
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
        style="z-index: 0"
        v-show="showlist"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Danh sách tìm kiếm</h4>
            <p class="category">Chọn tên để xem thông tin chi tiết bên cạnh</p>
          </md-card-header>
          <md-card-content>
            <!-- / -->
            <!-- v-show="show[0].state" -->

            <md-table
              v-model="info"
              :table-header-color="tableHeaderColor"
              @click.native="Extender()"
            >
              <!-- @click.native="Render1(1, item.areaCode, item.name)" -->
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Đinh danh cá nhân">{{
                  item.cardId
                }}</md-table-cell>
                <md-table-cell md-label="Họ và tên">{{
                  item.name
                }}</md-table-cell>
              </md-table-row>
            </md-table>
            <!-- / -->
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
        v-show="showdata"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Thông tin chi tiết</h4>
            <p class="category">Thông tin chi tiết của 01 người dân</p>
          </md-card-header>
          <md-card-content>
            <finder-table
              table-header-color="green"
              :idSearch="texttest"
            ></finder-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { FinderTable } from "@/components";

export default {
  components: { FinderTable },
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
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
      idFinder: "",
      tracker: "",
      info: [],
      texttest: [],
      showlist: false,
      showinfo: false,
      type: ["", "info", "success", "warning", "danger"],
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
    //alert
    notifyVue(verticalAlign, horizontalAlign, mess, type) {
      this.$notify({
        message: mess,
        icon: "error_outline",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: type,
      });
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    sortedArray() {}, // sort
    //get data from api
    getDistrict() {
      console.log(this.selectedCity.name._id);
      this.selectedDistrict = {};
      this.selectedCommune = {};
      this.selectedVillage = {};
      this.idFinder = this.selectedCity.name._id;
      this.tracker = `&idCityRef=${this.idFinder}`;

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
      this.selectedCommune = {};
      this.selectedVillage = {};
      this.idFinder = this.selectedDistrict.name._id;
      this.tracker = `&idDistrictRef=${this.idFinder}`;
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
      this.selectedVillage = {};
      this.idFinder = this.selectedCommune.name._id;
      this.tracker = `&idCommuneRef=${this.idFinder}`;
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
    getVillageData() {
      console.log(this.selectedVillage.name);
      this.idFinder = this.selectedVillage.name._id;
      this.tracker = `&idVillageRef=${this.idFinder}`;
    },
    //update response data staistic
    updateData() {
      console.log(this.tracker);
      console.log(this.cname);
      axios
        .get(
          `http://localhost:3000/api/human/search?page=1${this.tracker}&name=${this.cname}`
        )
        .then((res) => {
          (this.info = res.data), null, 2;
          console.log(this.info);
          this.showlist = true;
        })
        .catch((error) => {
          console.warn(error.response.status );
          if(error.response.status==404){
            this.notifyVue("top", "center", "Không tìm thấy người phù hợp hoặc ngoài phạm vi quản lí.",this.type[3]);
          } else {
            this.notifyVue("top", "center", "Ngoài phạm vi quản lý",this.type[4]);
          }
        });
    },
    //collect name of human
    Extender() {
      this.texttest = this.info;
      this.showdata = true;
    },
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
