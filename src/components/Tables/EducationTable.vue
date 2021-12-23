<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="STT">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Trình độ">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Số dân">{{ item.salary }}</md-table-cell>
        <md-table-cell md-label="Tỉ lệ">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="N/A">{{ item.city }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "edu-table",
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
          id: 1,
          name: "Dakotdqwdqice",
          salary: "34576",
          country: "Niger",
          city: "Oud-Turnhout",
        },
        {
          id: 1,
          name: "Dakotdqwdqice",
          salary: "34576",
          country: "Niger",
          city: "Oud-Turnhout",
        },
      
      
        
      ],
    };
  },
};
</script>
