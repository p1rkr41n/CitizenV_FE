<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Khai bao</h4>
        <p class="category">dien vao ho so</p>
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
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Ngày sinh</label>
              <md-input v-model="birth" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Giới tính</label>
              <md-input v-model="gender" type="email"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-small-size-100 md-size-50">
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
            <md-field>
              <label>Địa chỉ tạm trú</label>
              <md-input v-model="addressx" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Tôn giáo</label>
              <md-input v-model="religion" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Trình độ văn hoá</label>
              <md-input v-model="edulevel" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nghề nghiệp</label>
              <md-input v-model="job" type="text"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>ghi chu</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Save Profile</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
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
      cc:"12556687",
      cname: "abiqbidq",
      birth: "01/09/2000",
      gender: "nam",
      hometown: "qwdqwdwq",
      addresss:"qqefeq",
      addressx: null,
      religion:"Kinh",
      edulevel:"9/12",
      job:"sinh vien",
     
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
