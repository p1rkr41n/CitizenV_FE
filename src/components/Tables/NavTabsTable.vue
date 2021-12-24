<template>
  <div>
    <md-table v-model="users" md-card @md-selected="onSelect">
      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
        :class="getClass(item)"
        md-selectable="single"
      >
        <md-table-cell
          class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-25"
          >{{ item.name }}</md-table-cell
        >
        <md-table-cell
          class="
            splitter
            md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-75
          "
        >
          {{ item.name }}
        </md-table-cell>
      </md-table-row>
    </md-table>
    <p>Selected:</p>
    {{ selected }}
  </div>
</template>

<script>
export default {
  name: "nav-tabs-table",
  data() {
    return {
      selected: {},
      users: [
        {
          name: 'Sign contract for "What are conference organizers afraid of?"',
        },
        {
          name: "Lines From Great Russian Literature? Or E-mails From My Boss?",
        },
        {
          name: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
        },
      ],
    };
  },
  methods: {
    getClass: ({ name }) => ({
      // "md-primary": name === 2,
      // "md-accent": name === 3,
    }),
    onSelect: function (items) {
      this.selected = items;
    },
  },
};
</script>
<style>
.splitter {
  border-left: 1px solid rgba(0, 0, 0, 0.12) !important;
}
</style>
