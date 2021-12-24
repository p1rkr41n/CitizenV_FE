<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Username">{{ item.username }}</md-table-cell>
        <md-table-cell md-label="Password">{{ item.password }}</md-table-cell>
        <md-table-cell md-label="scopeName">{{ item.scopeName }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "simple-table",
  computed: mapGetters(["getidarea"]), // get from store
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      users: [
        {
          username: "010102",
          password: "159753",
          scopeName: "",
          name: "",
        },
      ],
    };
  },
  async created() {
    axios.get(`http://localhost:3000/api/address/statistics`).then((res) => {
      (this.ReligionData = res.data.ReligionData), null, 2;
      this.ReligionData = this.ReligionData.map((item, index) => {
        return {
          stt: index + 1,
          religion: item.religion,
          count: item.count,
        };
      });
    });
  },
};
</script>
