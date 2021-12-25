<template>
  <div>
    <!-- Table for search info tab -->
    <md-table :table-header-color="tableHeaderColor">
      <md-table-row>
        <md-table-head>Đặc điểm cá nhân</md-table-head>
        <md-table-head>Thông tin</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Mã định danh</md-table-cell>
        <md-table-cell>{{ idSearch[0].cardId }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Họ và tên</md-table-cell>
        <md-table-cell>{{ idSearch[0].name }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Giới tính</md-table-cell>
        <md-table-cell>{{ idSearch[0].gender }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Ngày sinh</md-table-cell>
        <md-table-cell>{{ idSearch[0].birth }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Tôn giáo</md-table-cell>
        <md-table-cell>{{ idSearch[0].religion }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Giáo dục</md-table-cell>
        <md-table-cell>{{ idSearch[0].educationalLevel }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Nghề nghiệp</md-table-cell>
        <md-table-cell>{{ idSearch[0].job }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Quê quán</md-table-cell>
        <md-table-cell>{{ idSearch[0].hometown }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Địa chỉ thường trú</md-table-cell>
        <md-table-cell>{{ idSearch[0].permanentAddress }}</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Địa chỉ tạm trú</md-table-cell>
        <md-table-cell>{{
          idSearch[0].idTemporaryResidenceAddressRef
        }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "finder-table",
  computed: mapGetters(["getidarea", "getareaCode"]), // get from store
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
    idSearch: {
      default: [],
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
      data: this.idSearch,
    };
  },
  async created() {
    this.data = this.idSearch;
  },
  methods: {},
};
</script>

