<template>
  <div>
    <form
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
    >
      <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
          <h4 class="title">Mẫu khai báo theo hộ gia đình</h4>
          <p class="category">Thông tin cơ bản về hộ gia đình đó</p>
        </md-card-header>
        <md-card-content>
          <div
            class="
              md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100
            "
          >
            <v-select
              :options="city"
              label="name"
              v-model="selectedCity.name"
              placeholder="Thôn/xóm/địa phương"
              class="
                md-dropdown-vselector
                md-layout-item
                md-medium-size-100
                md-xsmall-size-100
                md-size-75
              "
              style="border: 1px solid #c9c9c9"
            ></v-select>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Số thành viên</label>
                <md-input v-model="cc" type="number" required></md-input>
              </md-field>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Mã hộ</label>
                <md-input v-model="cc" type="number" required></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-75">
              <md-field>
                <label>Họ và tên chủ hộ</label>
                <md-input
                  v-model="cname"
                  type="text"
                  onkeyup="this.value = this.value.toUpperCase();"
                  required
                ></md-input>
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button
            type="submit"
            class="md-raised md-success"
            :disabled="sending"
            @click="submithogiadinh"
            >Tạo</md-button
          >
          <md-button
            type="submit"
            class="md-raised md-success"
            :disabled="sending"
            @click="replacehogiadinh"
            >Thay doi</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
    <form>
      <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
          <h4 class="title">Mẫu khai báo theo thành viên</h4>
          <p class="category">Thông tin cá nhân mỗi người trong hộ</p>
        </md-card-header>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Số định danh cá nhân(CCCD)</label>
                <md-input v-model="cc" type="number"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Họ và tên</label>
                <md-input
                  v-model="cname"
                  type="text"
                  onkeyup="this.value = this.value.toUpperCase();"
                  required
                ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Ngày sinh</label>
                <md-input v-model="birth" type="date" required></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <div class="md-autocomplete">
                <md-autocomplete
                  required
                  class="gender"
                  v-model="selectedEmployee"
                  :md-options="employees"
                >
                  <label>Giới tính</label>
                </md-autocomplete>
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <div class="md-autocomplete">
                <md-autocomplete
                  required
                  class="religion"
                  v-model="selectedEmployee"
                  :md-options="employees"
                >
                  <label>Tôn giáo</label>
                </md-autocomplete>
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <p style="color: #c9c9c9">Địa chỉ thường trú</p>
              <div>
                <v-select
                  :options="city"
                  label="title"
                  placeholder="Tỉnh/thành phố"
                  class="
                    md-dropdown-vselector
                    md-layout-item
                    md-medium-size-100
                    md-xsmall-size-100
                    md-size-25
                    underline
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
                    md-size-25
                    underline
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
                    underline
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
                    underline
                  "
                ></v-select>
              </div>
              <!--  -->
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Quê quán</label>
                <md-input v-model="hometown" type="text" required></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-100"></div>

            <div class="md-layout-item md-small-size-100 md-size-33">
              <div class="md-autocomplete">
                <md-autocomplete
                  required
                  class="edulevel"
                  v-model="selectedEmployee"
                  :md-options="employees"
                >
                  <label>Trình độ văn hóa</label>
                </md-autocomplete>
              </div>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-66">
              <div class="md-autocomplete">
                <md-autocomplete
                  required
                  class="job"
                  v-model="selectedEmployee"
                  :md-options="employees"
                >
                  <label>Nghề nghiệp</label>
                </md-autocomplete>
              </div>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-raised md-success" @click="submitcanhan"
                >Save Profile</md-button
              >
              <md-button class="md-raised md-success" @click="replacecanhan"
                >Thay doi Profile</md-button
              >
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
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

      city2: [
        { title: "Old Man's War" },
        { title: "The Lock Artist" },
        { title: "HTML5" },
        { title: "Right Ho Jeeves" },
        { title: "The Code of the Wooster" },
        { title: "Thank You Jeeves" },
        { title: "Thank You Jees" },
      ],
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone",
      ],
      birth: "01/01/2000",
    };
  },

  async created() {
    this.area = this.$store.getters.getarea.area;
    axios.get(`http://localhost:3000/api/address/city`).then((res) => {
      (this.city = res.data), null, 2;
      this.sortedArray = this.city.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    });
  },
  methods: {
    //get data from api
    getDistrict() {
      console.log(this.selectedCity.name._id);
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
          console.log(this.district);
        });
    },

    getCommune() {
      console.log(this.selectedDistrict.name);
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
    submithogiadinh() {
      axios
        .post(`http://localhost:3000/api/family`, {
          headOfHouseholdName: "this.headOfHouseholdName",
          idCardOfHeadOfHousehold: "125852548",
          idAddressRef: "61ba30987c66d98010a92763",
          householdCode: "00121304205",
        })
        .then((response) => (this.responseData = response.data));
    },
    replacehogiadinh() {
      axios
        .put(`http://localhost:3000/api/family?idFamily=`, {
          family: {
            cardIdOfHost: "123456789541579",
            householdCode: "1252367891578",
            headOfHouseholdName: "nguyen van d",
          },
        })
        .then((response) => (this.responseData = response.data));
    },
    submitcanhan() {
      axios
        .post(`http://localhost:3000/api/human?idFamily=)`, {
          human: {
            name: "Hoang Van D",
            cardId: "1234567895215",
            job: "giao vien",
            religion: "Phat giao",
            idPermanentAddressRef: "61ba30987c66d98010a92765",
            hometown: "abcder",
            gender: "male",
            birth: "2021-12-11T13:40:32.422Z",
            educationalLevel: "Dai Hoc",
          },
        })
        .then((response) => (this.responseData = response.data));
    },
    replacecanhan() {
      axios
        .put(`http://localhost:3000/api/family/edit-member/:id?idFamily=`, {
          human: {
            name: "Nguyen Van C",
            cardId: "1234567895410",
            job: "Giao vien",
            religion: "Thiên chúa giáo",

            idPermanentAddressRef: "61bc3c9cbfd8f603a4f8eb2d",

            hometown: "abc",
            gender: "female",
            birth: "2021-12-11T13:40:32.422Z",
            educationalLevel: "Dai hoc",
          },
        })
        .then((response) => (this.responseData = response.data));
    },
  },
};
</script>
<style>
.v-select input::placeholder {
  color: #c9c9c9;
}
.underline {
  border-bottom: 1px solid #c9c9c9 !important;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
