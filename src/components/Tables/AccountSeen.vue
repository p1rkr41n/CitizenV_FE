<template>
  <div>
    <md-table v-model="account" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Username">{{ item.username }}</md-table-cell>
        <md-table-cell md-label="ManagedArea">{{
          item.managedArea
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
    };
  },
  async accountcreated() {
    axios.get(`http://localhost:3000/api/user/all`).then((res) => {
   
      this.account = this.res.account.map((item) => {
        return {
          username: item.username,
          username: item.name,
          managedArea: item.managedArea,
        };
      });
  
    });
  },
};
</script>
