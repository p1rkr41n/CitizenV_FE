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
              style="border:1px solid green"
            ></v-select>
            <v-select
              :options="city"
              label="title"
              placeholder="Số thành viên"
              class="
                md-dropdown-vselector
                md-layout-item
                md-medium-size-100
                md-xsmall-size-100
                md-size-15
              "
              style="border:1px solid green"
            ></v-select>
            </div>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Mã hộ</label>
                <md-input v-model="cc" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-75">
              <md-field>
                <label>Họ và tên chủ hộ</label>
                <md-input v-model="cname" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-raised md-success">Tạo</md-button>
            </div>
          </div>
        </md-card-content>
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
                <md-input v-model="cc" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Họ và tên</label>
                <md-input v-model="cname" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Ngày sinh</label>
                <md-input v-model="birth" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Giới tính</label>
                <md-input v-model="gender" type="email"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Tôn giáo</label>
                <md-input v-model="religion" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Quê quán</label>
                <md-input v-model="hometown" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Địa chỉ thường trú</label>
                <md-input v-model="addresss" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
            </div>

            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Trình độ văn hoá</label>
                <md-input v-model="edulevel" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-66">
              <md-field>
                <label>Nghề nghiệp</label>
                <md-input v-model="job" type="text"></md-input>
              </md-field>
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
    };
  },

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
<style></style>
