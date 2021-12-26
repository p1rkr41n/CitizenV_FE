<template>
  <form>
    <md-field>
      <label>Tên tài khoản</label>
      <md-input v-model="username" v-bind:placeholder="getareaCode"></md-input>
    </md-field>

    <md-field>
      <label>Mật khẩu</label>
      <md-input v-model="password" ></md-input>
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
  computed: mapGetters(["getidarea", "getareaCode"]),
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
    index: {
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
      window.location.reload();
    },
  },
};
</script>
