<template>
  <div>
    <form
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
    >
      <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
          <h4 class="title">Hộ gia đình</h4>
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
              label="title"
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
            >Tạo</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
    <form>
      <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
          <h4 class="title">Thành viên</h4>
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
              <md-button class="md-raised md-success">Save Profile</md-button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>
<script>
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
      city: [
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
  methods: {},

  //   methods:{
  //     user(){
  //       fetch("http://localhost:3000/login",{
  //         method: "POST",
  //         headers:{
  //           "header":"app/json",
  //         },
  // body: JSON.stringify({ cc:this.cc,
  //       cname: "abiqbidq",
  //       birth: "01/09/2000",
  //       gender: "nam",
  //       hometown: "qwdqwdwq",
  //       addresss:"qqefeq",
  //       addressx: null,
  //       religion:"Kinh",
  //       edulevel:"9/12",
  //       job:"sinh vien",
  // })

  //       })
  //     }
  //   }
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
