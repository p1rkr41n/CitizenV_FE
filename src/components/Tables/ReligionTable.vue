<template>
  <div>
    <md-table v-model="ReligionData" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="STT">{{ item.stt }}</md-table-cell>
        <md-table-cell md-label="Tôn giáo">{{ item.religion }}</md-table-cell>
        <md-table-cell md-label="Số dân">{{ item.count }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "legion-table",
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
      ReligionData: [],
      index: [],
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
