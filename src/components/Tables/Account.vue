<template>
  <div>
    <md-table v-model="account" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Tên đăng nhập">
          <md-input type="text">{{ item.username }}</md-input>
        </md-table-cell>
        <md-table-cell md-label="Mật khẩu">
          <md-input type="text">{{ item.password }}</md-input></md-table-cell
        >
        <md-table-cell md-label="scopeName"
          ><md-input type="text">{{ item.scopeName }}</md-input></md-table-cell
        >
        <md-button class="md-raised md-success" @click="submit" value="submit"
          >Cấp tài khoản</md-button
        >
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "account",
  computed: mapGetters(["getidarea"]),
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      account: [
        {
          username: "",
          password: "",
          scopeName: "",
        },
      ],
    };
  },

  methods: {
    async submit() {
      axios
        .post(`http://localhost:3000/api/user`, {
          // username: this.account.username,
          // password: this.account.password,
          // password: this.account.scopeName,

          username: "01010218",
          password: "123456",
          scopeName: "tổ dân phố/làng 6",
        })
        .then((response) => (this.responseData = response.data));
      // console.log(Math.floor(100000 + Math.random() * 900000)); sinh mat khau random 6 kitu

      console.log(account.username);
    },
  },
};
</script>
