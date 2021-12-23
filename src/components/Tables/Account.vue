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
export default {
  name: "Account",
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
          username: "0100155",
          password : "16454453",
         scopeName: "",
         name : "",
        },
       
       
      ],
    };
  },
};
</script>
