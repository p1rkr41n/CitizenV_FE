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
              <!--  -->
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label id="whiter">Số định danh cá nhân(CCCD)</label>
                  <md-input id="whiter" v-model="cc" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label id="whiter">Họ và tên</label>
                  <md-input id="whiter" v-model="cname" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label id="whiter">Ngày sinh</label>
                  <md-input id="whiter" v-model="birth" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label id="whiter" for="movie">Giới tính</label>
                  <md-select v-model="movie" name="movie" id="movie">
                    <md-option value="fight-club">Nam</md-option>
                    <md-option value="godfather">Nữ</md-option>
                    <md-option value="godfather-ii">Khác</md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-field>
                  <label id="whiter">Quê quán</label>
                  <md-input
                    id="whiter"
                    v-model="hometown"
                    type="text"
                  ></md-input>
                </md-field>
              </div>
              <div></div>
              <div
                class="
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-100
                "
                data-background-color="green"
                style="
                  border: 1px solid #ccc;
                  border-radius: 4px;
                  padding: 10px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
              >
                <p>Địa chỉ thường trú:</p>
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
              </div>
              <div
                class="
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-100
                "
              ></div>
              <div
                class="
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-100
                "
                data-background-color="green"
                style="
                  border: 1px solid #ccc;
                  border-radius: 4px;
                  padding: 10px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
              >
                <p>Địa chỉ tạm trú:</p>
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
              </div>
              <div
                class="
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-100
                "
                data-background-color="green"
              ></div>
              <div
                class="
                  md-layout-item
                  md-medium-size-100
                  md-xsmall-size-100
                  md-size-100
                "
                data-background-color="green"
                style="
                  border: 1px solid #ccc;
                  border-radius: 4px;
                  padding: 10px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
              >
                <p>Thông tin thêm:</p>
                <v-select
                  :options="city"
                  label="title"
                  placeholder="Tôn giáo"
                  class="
                    md-dropdown-vselector
                    md-layout-item
                    md-medium-size-100
                    md-xsmall-size-100
                    md-size-25
                  "
                ></v-select>

                <v-select
                  :options="city"
                  label="title"
                  placeholder="Trình độ văn hóa"
                  class="
                    md-dropdown-vselector
                    md-layout-item
                    md-medium-size-100
                    md-xsmall-size-100
                    md-size-30
                  "
                ></v-select>

                <v-select
                  :options="city"
                  label="title"
                  placeholder="Nghề nghiệp"
                  class="
                    md-dropdown-vselector
                    md-layout-item
                    md-medium-size-100
                    md-xsmall-size-100
                    md-size-30
                  "
                ></v-select>
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
      >
        <nav-tabs-card>
          <template v-slot:content>
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
import {
  // StatsCard,
  // ChartCard,
  NavTabsCard,
  NavTabsTable,
  // OrderedTable,
} from "@/components";

export default {
  components: {
    // StatsCard,
    // ChartCard,
    NavTabsCard,
    NavTabsTable,
    // OrderedTable,
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
    };
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
