<template>
  <form>
    <!-- <md-table v-model="account" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Tên đăng nhập">
          <md-input type="text" name="username" v-model="username">{{ item.username }}</md-input>
        </md-table-cell>
        <md-table-cell md-label="Mật khẩu">
          <md-input type="text" name="password" >{{ item.password }}</md-input></md-table-cell
        >
        <md-table-cell md-label="scopeName"
          ><md-input type="text">{{ item.scopeName }}</md-input></md-table-cell
        >
        <md-button class="md-raised md-success" @click="submit" value="submit"
          >Cấp tài khoản</md-button
        >
      </md-table-row>
    </md-table> -->
    <md-field>
      <label>Tên tài khoản</label>
      <md-input v-model="username"></md-input>
    </md-field>

    <md-field>
      <label>Mật khẩu</label>
      <md-input v-model="password"></md-input>
    </md-field>
    <md-field>
      <label>Địa phương</label>
      <md-input v-model="scopeName"></md-input>
    </md-field>
    <md-button class="md-raised md-success" @click="submit" value="submit"
      >Cấp tài khoản</md-button
    >
  </form>
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
      username: "",
      password: "",
      scopeName: "",
      responseData: "",
    };
  },

  methods: {
    submit() {
      axios
        .post(`http://localhost:3000/api/user`, {
          username: this.username,
          password: this.password,
          scopeName: this.scopeName,
        })
        .then((response) => (this.responseData = response.data));
      // console.log(Math.floor(100000 + Math.random() * 900000)); sinh mat khau random 6 kitu
    },

    // add() {
    //   username = this.responseData.username;
    //   scopeName= this.responseData.scopeName;
    // },
  },
};
</script>
