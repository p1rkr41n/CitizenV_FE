<template>
  <form>
    <md-field>
      <label>Ten tai khoan</label>
      <md-input v-model="username"></md-input>
    </md-field>
    <md-field>
      <label>Khu vuc</label>
      <md-input v-model="areaName"></md-input>
    </md-field>
    <md-field>
      <md-input type="checkbox" id="declarable" v-model="declarable"></md-input>
    </md-field>
    <md-button class="md-raised md-success" @click="submit" value="submit"
      >Sửa tài khoản</md-button
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
      declarable: "",
      areaName: "",
      username: "",
    };
  },
  async created() {
    axios.get(`http://localhost:3000/api/user/all`).then((response) => {
      (this.account = response.data), null, 2;
    });
  },

  methos: {
    submit() {
      axios
        .put(
          `http://localhost:3000/api/user/change-declare-permission?id=
${this.area.id}`,
          {
            declarable: this.declarable,
            areaName: this.areaName,
          }
        )
        .then((response) => (this.responseData = response.data));
    },
  },
};
</script>
