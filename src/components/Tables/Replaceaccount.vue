<template>
  <form>
    <md-field>
      <label>ID</label>
      <md-input v-model="username"></md-input>
    </md-field>
    <md-field>
      <label>Tên khu vực</label>
      <md-input v-model="areaName"></md-input>
    </md-field>
    <md-field>
      <label>ID của người quản lý</label>
      <md-input v-model="idboss"></md-input>
    </md-field>
    <md-field>
      <md-input type="checkbox" v-model="declarable"></md-input>
    </md-field>
    <md-button class="md-raised md-success" @click="submit" value="submit"
      >Sửa khu vực</md-button
    >
    <md-button class="md-raised md-success" @click="suadoi" value="suadoi"
      >Sửa quyền</md-button
    >
  </form>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "replace",
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
      idboss: "",
    };
  },
  methos: {
    submit() {
      axios
        .put(
          `http://localhost:3000/api/address/change-info-area?id=${this.areaName}`,
          {
            areaName: this.areaName,
          }
        )
        .then((response) => (this.responseData = response.data));
    },
    suadoi() {
      axios
        .put(
          `http://localhost:3000/api/user/change-declare-permission?id=${this.idboss}`,
          {
            declarable: this.declarable,
          }
        )
        .then((response) => (this.responseData = response.data));
    },
   
  },
};
</script>
