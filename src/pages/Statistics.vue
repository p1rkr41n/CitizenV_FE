<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        style="z-index: 2"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="purple">
            <h4 class="title">Tìm kiếm khu vực:</h4>
            <!--  -->
            <div
              class="
                md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100
              "
            >
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
                @input="getVillageData"
                class="
                  md-dropdown-vselector
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-20
                "
              ></v-select>
              <!--  -->
              <!--  -->
              <div
                class="md-layout-item md-size-10 text-left md-vertical-center"
              >
                <md-button
                  class="md-raised md-success md-round"
                  @click="updateData"
                >
                  Tìm kiếm</md-button
                >
              </div>
            </div>
          </md-card-header>
        </md-card>
      </div>
      <!-- </div> -->
      <!-- ================ -->
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>people_alt</md-icon>
          </template>

          <template slot="content">
            <p class="category">Dân số</p>
            <h3 class="title">{{ population }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              *Dữ liệu chỉ chính xác khi kết thúc khai báo.
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <md-icon>wc</md-icon>
          </template>

          <template slot="content">
            <p class="category">Tỉ lệ nam/nữ</p>
            <h3 class="title">{{ maleonfemale }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-info">tag</md-icon>
              <a href="#pablo">Chưa kể giới tính "khác"</a>
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>work_off</md-icon>
          </template>

          <template slot="content">
            <p class="category">Tỉ lệ thất nghiệp</p>
            <h3 class="title">{{ outofjob }}%</h3>
          </template>

          <template slot="footer">
            <div class="text-danger">
              <md-icon class="text-danger">warning</md-icon>
              {{ outofjob }}% dân cư không có việc làm
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>local_library</md-icon>
          </template>

          <template slot="content">
            <p class="category">Tỉ lệ mù chữ</p>
            <h3 class="title">{{ illiteracy }}%</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Demo: cập nhật dữ liệu mỗi giờ 01 lần
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Các tôn giáo</h4>
            <p class="category">Số dân theo các tôn giáo trong khu vực</p>
          </md-card-header>
          <md-card-content>
            <ReligionTable table-header-color="purple"></ReligionTable>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Trình độ phát triển giáo dục</h4>
            <p class="category">
              Bằng cấp và trình độ của cư dân trong khu vực
            </p>
          </md-card-header>
          <md-card-content>
            <EducationTable table-header-color="purple"></EducationTable>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Tỉ lệ nam/nữ theo độ tuổi</h4>
          </md-card-header>
          <md-card-content>
            <age-chart-card></age-chart-card>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import axios from "axios";
import { mapGetters } from "vuex";
import {
  StatsCard,
  ReligionTable,
  EducationTable,
  AgeChartCard,
} from "@/components";
export default {
  // props:[edudata],
  components: {
    StatsCard,
    ReligionTable,
    EducationTable,
    AgeChartCard,
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
      tracker: "/statistics",
      users: [
        {
          id: 1,
          name: "du",
          salary: "576",
          country: "Niger",
          city: "Oud-Turnhout",
        },
        {
          id: 1,
          name: "Dakotdqwdqice",
          salary: "34576",
          country: "Niger",
          city: "Oud-Turnhout",
        },
      ],
      maleonfemale: "",
      population: "",
      outofjob: "",
      illiteracy: "", //mù chữ
      educationalData: "",
      type: ["", "info", "success", "warning", "danger"],
    };
  },
  computed: mapGetters(["getidarea"]), // get from store
  //check if user is logged in
  // EducationTable(educationalData)
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    }
    this.area = this.$store.getters.getarea.area;
    axios.get(`http://localhost:3000/api/address/statistics`).then((res) => {
      this.maleonfemale = (
        (res.data.populationData[0].count / res.data.populationData[1].count) *
        100
      ).toFixed(0);
      this.population =
        res.data.populationData[0].count + res.data.populationData[1].count;
      this.outofjob = (
        (res.data.employmentAndUnemploymentData[0].count / this.population) *
        100
      ).toFixed(0);
      this.illiteracy = (
        res.data.educationalData[0].count / this.population
      ).toFixed(0);
    });
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
      this.idFinder = this.selectedCity.name._id;
      this.tracker = `/city/statistics?idCityRef=${this.idFinder}`;
      this.selectedDistrict = {};
      this.selectedCommune = {};
      this.selectedVillage = {};
      axios
        .get(
          `http://localhost:3000/api/address/district?idCityRef=${this.selectedCity.name._id}`
        )
        .then((res) => {
          (this.district = res.data), null, 2;
          this.sortedArray = this.district.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          // console.log(this.district);
        });
    },

    getCommune() {
      console.log(this.selectedDistrict.name);
      this.idFinder = this.selectedDistrict.name._id;
      this.tracker = `/district/statistics?idDistrictRef=${this.idFinder}`;
      this.selectedCommune = {};
      this.selectedVillage = {};
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
      this.idFinder = this.selectedCommune.name._id;
      this.tracker = `/commune/statistics?idCommuneRef=${this.idFinder}`;
      this.selectedVillage = {};
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
      this.tracker = `/village/statistics?idVillageRef=${this.idFinder}`;
    },
    // getData() {
    //   this.area = this.idFinder;
    // },
    //update response data staistic
    updateData() {
      console.log(this.tracker);
      axios
        .get(`http://localhost:3000/api/address${this.tracker}`)
        .then((res) => {
          if (this.population == null) {
            return;
          }
          this.maleonfemale = (
            (res.data.populationData[0].count /
              res.data.populationData[1].count) *
            100
          ).toFixed(0);
          this.population =
            res.data.populationData[0].count + res.data.populationData[1].count;
          this.outofjob = (
            (res.data.employmentAndUnemploymentData[0].count /
              this.population) *
            100
          ).toFixed(0);
          this.illiteracy = (
            res.data.educationalData[0].count / this.population
          ).toFixed(0);
        })
        .catch((error) => {
          console.warn(error.response.status);
          if (error.response.status == 404) {
            this.notifyVue(
              "top",
              "center",
              "Không tìm thấy địa phương phù hợp hoặc ngoài phạm vi quản lí.",
              this.type[3]
            );
          } else {
            this.notifyVue(
              "top",
              "center",
              "Ngoài phạm vi quản lý",
              this.type[4]
            );
          }
        });
    },
  },
};
</script>
