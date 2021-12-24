<template>
  <div>
    <md-table
      v-show="show[0].state"
      v-model="data"
      :table-header-color="tableHeaderColor"
    >
      <md-table-row
        @click.native="Render1(1, item.areaCode, item.name)"
        slot="md-table-row"
        slot-scope="{ item }"
      >
        <md-table-cell md-label="STT">{{ item.stt }}</md-table-cell>
        <md-table-cell md-label="Địa phương">{{ item.name }}</md-table-cell>
        <!-- <md-table-cell md-label="scopeName">{{ item.areaCode }}</md-table-cell> -->
        <md-table-cell md-label="Số dân">{{
          item.populationData
        }}</md-table-cell>
        <md-table-cell md-label="Nam">{{ item.male }}</md-table-cell>
        <md-table-cell md-label="Nữ">{{ item.female }}</md-table-cell>
      </md-table-row>
    </md-table>
    <!-- subtable  1 -->
    <md-table
      v-show="show[1].state"
      v-model="data1"
      :table-header-color="tableHeaderColor"
    >
      <md-table-row
        @click.native="Render2(2, item.areaCode, item.name)"
        slot="md-table-row"
        slot-scope="{ item }"
      >
        <md-table-cell md-label="STT">{{ item.stt }}</md-table-cell>
        <md-table-cell :md-label="item.pre"> {{ item.name }}</md-table-cell>
        <!-- <md-table-cell md-label="scopeName">{{ item.areaCode }}</md-table-cell> -->
        <md-table-cell md-label="Số dân">{{
          item.populationData
        }}</md-table-cell>
        <md-table-cell md-label="Nam">{{ item.male }}</md-table-cell>
        <md-table-cell md-label="Nữ">{{ item.female }}</md-table-cell>
      </md-table-row>
    </md-table>
    <!-- subtable  2 -->
    <md-table
      v-show="show[2].state"
      v-model="data2"
      :table-header-color="tableHeaderColor"
    >
      <md-table-row
        @click.native="Render3(3, item.areaCode, item.name)"
        slot="md-table-row"
        slot-scope="{ item }"
      >
        <md-table-cell md-label="STT">{{ item.stt }}</md-table-cell>
        <md-table-cell :md-label="item.pre"> {{ item.name }}</md-table-cell>
        <!-- <md-table-cell md-label="scopeName">{{ item.areaCode }}</md-table-cell> -->
        <md-table-cell md-label="Số dân">{{
          item.populationData
        }}</md-table-cell>
        <md-table-cell md-label="Nam">{{ item.male }}</md-table-cell>
        <md-table-cell md-label="Nữ">{{ item.female }}</md-table-cell>
      </md-table-row>
    </md-table>

    <md-table
      v-show="show[3].state"
      v-model="data3"
      :table-header-color="tableHeaderColor"
    >
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="STT">{{ item.stt }}</md-table-cell>
        <md-table-cell :md-label="item.pre"> {{ item.name }}</md-table-cell>
        <!-- <md-table-cell md-label="scopeName">{{ item.areaCode }}</md-table-cell> -->
        <md-table-cell md-label="Số dân">{{
          item.populationData
        }}</md-table-cell>
        <md-table-cell md-label="Nam">{{ item.male }}</md-table-cell>
        <md-table-cell md-label="Nữ">{{ item.female }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "simple-table",
  computed: mapGetters(["getidarea", "getareaCode"]), // get from store
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      show: [
        { state: true },
        { state: false },
        { state: false },
        { state: false },
      ],
      apireq: "",
      roleAcc: [
        { value: "cities" },
        { value: "districts" },
        { value: "communes" },
        { value: "villages" },
      ],
      // role: "",
      users: [
        {
          username: "010102",
          password: "159753",
          scopeName: "",
          name: "",
        },
      ],
      data: [],
      data1: [],
      data2: [],
      data3: [],
      counter: 0,
    };
  },
  async created() {
    // this.Checker();
    // this.role=this.roleAcc[this.getareaCode.length/2-1].value;
    this.counter = this.getareaCode.length / 2;
    if (this.counter == 4) {
      return;
    }
    axios
      .get(
        `http://localhost:3000/api/address/${
          this.roleAcc[this.counter].value
        }/statistics?idArea=${this.getidarea}&statisticsField=populationData`
      )
      .then((res) => {
        (this.data = res.data.filter((b) => b.data.length)), null, 2;
        //console.log(this.data);
        this.data = this.data.map((item, index) => {
          return {
            stt: index + 1,
            name: item.areaName,
            areaCode: item._id,
            male: item.data[0].count,
            female: item.data[1].count,
            populationData: item.data[0].count + item.data[1].count,
          };
        });
      });
  },
  methods: {
    // render more table
    Render1(i, code, prename) {
      console.log(code);
      console.log(this.show[i].state);
      this.show[i].state = !this.show[i].state;
      if (this.show[i].state == true) {
        this.counter = this.counter + 1;
      } else {
        this.counter = this.counter - 1;
      }
      if (this.counter == 4) {
        return;
      }
      console.log("render more");
      axios
        .get(
          `http://localhost:3000/api/address/${
            this.roleAcc[this.counter].value
          }/statistics?idArea=${code}&statisticsField=populationData`
        )
        .then((res) => {
          (this.data1 = res.data.filter((b) => b.data.length)), null, 2;
          console.log(this.data1);
          this.data1 = this.data1.map((item, index) => {
            return {
              stt: index + 1,
              name: item.areaName,
              areaCode: item._id,
              male: item.data[0].count,
              female: item.data[1].count,
              populationData: item.data[0].count + item.data[1].count,
              pre: prename,
            };
          });
          // this.data1.pre=prename;
        });
    },
    Render2(i, code, prename) {
      console.log(code);
      console.log(this.show[i].state);
      this.show[i].state = !this.show[i].state;
      if (this.show[i].state == true) {
        this.counter = this.counter + 1;
      } else {
        this.counter = this.counter - 1;
      }
      if (this.counter == 4) {
        return;
      }
      console.log("render more");
      axios
        .get(
          `http://localhost:3000/api/address/${
            this.roleAcc[this.counter].value
          }/statistics?idArea=${code}&statisticsField=populationData`
        )
        .then((res) => {
          (this.data2 = res.data.filter((b) => b.data.length)), null, 2;
          console.log(this.data2);
          this.data2 = this.data2.map((item, index) => {
            return {
              stt: index + 1,
              name: item.areaName,
              areaCode: item._id,
              male: item.data[0].count,
              female: item.data[1].count,
              populationData: item.data[0].count + item.data[1].count,
              pre: prename,
            };
          });
        });
    },
    Render3(i, code, prename) {
      console.log(code);
      console.log(this.show[i].state);
      this.show[i].state = !this.show[i].state;
      if (this.show[i].state == true) {
        this.counter = this.counter + 1;
      } else {
        this.counter = this.counter - 1;
      }
      if (this.counter == 4) {
        return;
      }
      console.log("render more");
      axios
        .get(
          `http://localhost:3000/api/address/${
            this.roleAcc[this.counter].value
          }/statistics?idArea=${code}&statisticsField=populationData`
        )
        .then((res) => {
          (this.data3 = res.data.filter((b) => b.data.length)), null, 2;
          console.log(this.data3);
          this.data3 = this.data3.map((item, index) => {
            return {
              stt: index + 1,
              name: item.areaName,
              areaCode: item._id,
              male: item.data[0].count,
              female: item.data[1].count,
              populationData: item.data[0].count + item.data[1].count,
              pre: prename,
            };
          });
        });
    },
  },
};
</script>
