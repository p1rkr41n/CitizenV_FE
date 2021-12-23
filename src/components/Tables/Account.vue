<template>
  <div>
    <md-table v-model="account" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Username">
          <!-- {{ item.username }} -->
          <input type="text" v-model="cname" name="" />{{ cname }}
        </md-table-cell>
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
      account: [
        {
          username: "wfewfe",
          password: "16454453",
          scopeName: "",
          name: "",
        },
      ],
      // account[],
    };
  },
  async accountcreated() {
    axios.post(`http://localhost:3000/api/user`).then((res) => {
    });
  },

  

};
</script>
