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
                label="title"
                placeholder="Tỉnh/thành phố"
                class="
                  md-dropdown-vselector
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-20
                "
              ></v-select>

              <v-select
                :options="city"
                label="title"
                placeholder="Huyện/quận"
                class="
                  md-dropdown-vselector
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-20
                "
              ></v-select>

              <v-select
                :options="city"
                label="title"
                placeholder="Xã/phường/thị trấn"
                class="
                  md-dropdown-vselector
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-20
                "
              ></v-select>

              <v-select
                :options="city"
                label="title"
                placeholder="Thôn/xóm/địa phương"
                class="
                  md-dropdown-vselector
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-20
                "
              ></v-select>
              <!--  -->
              <div
                class="md-layout-item md-size-10 text-left md-vertical-center"
              >
                <md-button class="md-raised md-success md-round"
                  >Tìm kiếm</md-button
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
              Cập nhật theo ngày
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-=50"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Tỉ lệ phần trăm tôn giáo</h4>
            <p class="category">
              Phần trăm các tôn giáo trong khu vực
            </p>
          </md-card-header>
          <md-card-content>
            <ReligionTable table-header-color="purple"></ReligionTable>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Trình độ phát triển giáo dục</h4>
            <p class="category">Bằng cấp và trình độ của cư dân trong khu vực</p>
          </md-card-header>
          <md-card-content>
            <EducationTable table-header-color="purple"></EducationTable>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
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
import axios from 'axios';
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
      city: [
        { title: "Old Man's War" },
        { title: "The Lock Artist" },
        { title: "HTML5" },
        { title: "Right Ho Jeeves" },
        { title: "The Code of the Wooster" },
        { title: "Thank You Jeeves" },
        { title: "Thank You Jees" },
      ],
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
      maleonfemale:"",
      population:"",
      outofjob:"",
      illiteracy:"",//mù chữ
      educationalData:[],
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
    axios.get(`http://localhost:3000/api/address/city/statistics?idCityRef=${this.getidarea}`).then(res => {
      this.maleonfemale = ((res.data.populationData[3].count/res.data.populationData[4].count)*100).toFixed(0);
      this.population = res.data.populationData[3].count+res.data.populationData[4].count;
      this.outofjob= ((res.data.employmentAndUnemploymentData[0].count/this.population)*100).toFixed(0);
      this.illiteracy = (res.data.educationalData[0].count/ this.population).toFixed(0);
      this.educationalData=JSON.stringify(res.data.educationalData, null, 2);
      // console.log(this.educationalData);

    });
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
