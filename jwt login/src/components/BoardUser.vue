<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>
  </div>

   <div class="row"> acqudvqwkudvqwydqwd</div>
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
          <template v-slot:header>
            <md-icon>people_alt</md-icon>
          </template>

          <template v-slot:content>
            <p class="category">Dân số</p>
            <h3 class="title">9900000</h3>
          </template>

          <template v-slot:footer>
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
          <template v-slot:header>
            <md-icon>wc</md-icon>
          </template>

          <template v-slot:content>
            <p class="category">Tỉ lệ nam/nữ</p>
            <h3 class="title">10%</h3>
          </template>

          <template v-slot:footer>
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Chưa kể giới tính "khác"</a>
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template v-slot:header>
            <md-icon>work_off</md-icon>
          </template>

          <template v-slot:content>
            <p class="category">Tỉ lệ thất nghiệp</p>
            <h3 class="title">10%</h3>
          </template>

          <template v-slot:footer>
            <div class="stats">
              <md-icon>local_offer</md-icon>
              10% dân cư không có việc làm
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template v-slot:header>
            <md-icon>local_library</md-icon>
          </template>

          <template v-slot:content>
            <p class="category">Tỉ lệ mù chữ</p>
            <h3 class="title">20%</h3>
          </template>

          <template v-slot:footer>
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-=50"
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
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Tỉ lệ phần trăm tôn giáo</h4>
            <p class="category">Phần trăm các tôn giáo trong khu vực</p>
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
            <h4 class="title">Tỉ lệ nam/nữ theo độ tuổi</h4>
            <!-- <p class="category">Phần trăm các tôn giáo trong khu vực</p> -->
          </md-card-header>
          <md-card-content>
            <!-- <ReligionTable table-header-color="green"></ReligionTable> -->
            <age-chart-card ></age-chart-card>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "User",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
