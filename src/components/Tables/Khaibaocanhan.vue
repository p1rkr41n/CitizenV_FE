<template>
  <form>
    <md-field>
      <label>Họ và tên</label>
      <md-input v-model="name"></md-input>
    </md-field>

    <md-field>
      <label>CCCD</label>
      <md-input v-model="cardId"></md-input>
    </md-field>
    <md-field>
      <label>Nghề nghiệp</label>
      <md-input v-model="job"></md-input>
    </md-field>
    <md-field>
      <label>Tôn giáo</label>
      <md-input v-model="religion"></md-input>
    </md-field>
    <md-field>
      <label>Địa chỉ thường trú</label>
      <md-input v-model="idPermanentAddressRef"></md-input>
    </md-field>
    <md-field>
      <label>Quê quán</label>
      <md-input v-model="hometown"></md-input>
    </md-field>
    <md-field>
      <label>Giới tính</label>
      <md-input v-model="male"></md-input>
    </md-field>
    <md-field>
      <label>Ngày sinh</label>
      <md-input v-model="birth"></md-input>
    </md-field>
    <md-field>
      <label>Trình độ văn hoá</label>
      <md-input v-model="educationalLeve"></md-input>
    </md-field>
    <md-button class="md-raised md-success" @click="submit" value="submit"
      >Khai bao ca nhann</md-button
    >
    <md-button class="md-raised md-success" @click="sua" value="sua"
      >sua</md-button
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
      name: "",
      cardId: "",
      job: "",
      religion: "",
      idPermanentAddressRef: "",
      hometown: "",
      gender: "",
      birth: "",
      educationalLevel: "",
      idFamily:"123456789",
    };
  },

  methods: {
    submit() {
      axios
        .post(`http://localhost:3000/api/human?idFamily=${this.idFamily}`, {
          human: {
            name: this.name,
            cardId: this.cardId,
            job: this.job,
            religion: this.religion,
            idPermanentAddressRef: this.idPermanentAddressRef,
            hometown: this.hometown,
            gender: this.gender,
            birth: this.birth,
            educationalLevel: this.educationalLevel,
          },
        })
        .then((response) => (this.responseData = response.data));
      // console.log(Math.floor(100000 + Math.random() * 900000)); sinh mat khau random 6 kitu
      // window.location.reload();
    },
    sua() {
      axios
        .put(
          `http://localhost:3000/api/human/61ba378ca7ef91278c1428db/?idFamily=${this.idFamily}`,
          {
            human: {
              name: this.name,
              cardId: this.cardId,
              job: this.job,
              religion: this.religion,
              idPermanentAddressRef: this.idPermanentAddressRef,
              hometown: this.hometown,
              gender: this.gender,
              birth: this.birth,
              educationalLevel: this.educationalLevel,
            },
          }
        )
        .then((response) => (this.responseData = response.data));
    },
  },
};
</script>
