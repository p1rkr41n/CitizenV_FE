<template>
  <form>
    <md-field>
      <label>Họ và tên chủ hộ</label>
      <md-input v-model="headOfHouseholdName"></md-input>
    </md-field>
    <md-field>
      <label>ID của chủ hộ</label>
      <md-input v-model="idCardOfHeadOfHousehold"></md-input>
    </md-field>
    <md-field>
      <label>ID khu vực</label>
      <md-input v-model="getidarea"></md-input>
    </md-field>
    <md-field>
      <label>Mã hộ</label>
      <md-input v-model="householdCode"></md-input> </md-field
    ><md-field>
      <label>ID Family</label>
      <md-input v-model="idboss"></md-input>
    </md-field>
    <md-button class="md-raised md-success" @click="submit" value="submit"
      >Khai bao</md-button
    >
    <md-button class="md-raised md-success" @click="suadoi" value="suadoi"
      >SUa
    </md-button>
  </form>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "khaibao",
  computed: mapGetters(["getidarea"]),
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
      family: [],
      headOfHouseholdName: "",
      idCardOfHeadOfHousehold: "",
      idAddressRef: "",
      householdCode: "",
      idboss: "",
    };
  },

  methods: {
    submit() {
      axios
        .post(`http://localhost:3000/api/family`, {
          family: {
            headOfHouseholdName: this.headOfHouseholdName,
            idCardOfHeadOfHousehold: this.idCardOfHeadOfHousehold,
            idAddressRef: this.idAddressRef,
            householdCode: this.householdCode,
          },
        })
        .then((response) => (this.responseData = response.data));
      // console.log(Math.floor(100000 + Math.random() * 900000)); sinh mat khau random 6 kitu
      // window.location.reload();
    },

    suadoi() {
      axios
        .put(`http://localhost:3000/api/family?idFamily=${this.idboss}`, {
          family: {
            headOfHouseholdName: this.headOfHouseholdName,
            idCardOfHeadOfHousehold: this.idCardOfHeadOfHousehold,
            idAddressRef: this.idAddressRef,
            householdCode: this.householdCode,
          },
        })
        .then((response) => (this.responseData = response.data));
    },
  },
};
</script>
