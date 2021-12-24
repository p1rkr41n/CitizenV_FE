<template>
  <div>
    <md-table v-model="educationalData" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="STT">{{ item.stt }}</md-table-cell>
        <md-table-cell md-label="Trình độ">{{
          item.educationalLevel
        }}</md-table-cell>
        <md-table-cell md-label="Số dân">{{ item.count }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "edu-table",
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
      educationalData: [],
    };
  },
  async created() {
    axios
      .get(
        `http://localhost:3000/api/address/statistics`
      )
      .then((res) => {
        (this.educationalData = res.data.educationalData), null, 2;
        this.educationalData = this.educationalData.map((item, index) => {
          return {
            ...item,
            stt: index + 1,
          };
        });
      });
  },
};
</script>
