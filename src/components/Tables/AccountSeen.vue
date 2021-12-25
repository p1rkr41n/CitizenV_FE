<template>
  <div>
    <md-table v-model="account" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.username }}</md-table-cell>
        <md-table-cell md-label="Khu vực">{{ item.managedArea }}</md-table-cell>
        <md-table-cell md-label="Hoàn thành">{{
          item.completede
        }}</md-table-cell>
        <md-table-cell md-label="declarable">{{
          item.declarable
        }}</md-table-cell>
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
      account: [],
      username: "",
      name: "",
      managedArea: "",
    };
  },
  async created() {
    axios.get(`http://localhost:3000/api/user/all`).then((response) => {
      (this.account = response.data), null, 2;
    });
  },
};
</script>