<template>
  <form>
    <md-field>
      <label>headOfHouseholdName</label>
      <md-input v-model="headOfHouseholdName"></md-input>
    </md-field>

    <md-field>
      <label>idCardOfHeadOfHousehold</label>
      <md-input v-model="idCardOfHeadOfHousehold"></md-input>
    </md-field>
    <md-field>
      <label>idAddressRef</label>
      <md-input v-model="idAddressRef"></md-input>
    </md-field>
    <md-field>
      <label>householdCode</label>
      <md-input v-model="householdCode"></md-input>
    </md-field>
    <md-button class="md-raised md-success" @click="submit" value="submit"
      >Khai bao</md-button
    >
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
      headOfHouseholdName: "",
      idCardOfHeadOfHousehold: "",
      idAddressRef: "",
      householdCode: "",
    };
  },

  methods: {
    submit() {
      axios
        .post(`http://localhost:3000/api/family`, {
          family: {
            headOfHouseholdName: this.headOfHouseholdName,
            idCardOfHeadOfHousehold: this.idCardOfHeadOfHousehold,
            idAddressRef:this.idAddressRef,
            householdCode: this.householdCode,
          },
        })
        .then((response) => (this.responseData = response.data));
      // console.log(Math.floor(100000 + Math.random() * 900000)); sinh mat khau random 6 kitu
      window.location.reload();
    },
  },
};
</script>
