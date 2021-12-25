<template>
<!-- form on moblie -->
  <ul class="nav nav-mobile-menu">
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">person</i>
          <p>Tài khoản</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li>
            <a href="#/app/home" style="text-overflow: ellipsis ellipsis"
              >ID: {{ getareaCode }}</a
            >
          </li>
          <li>
            <a value="Logout" @click="logout" href="#">Logout</a>
          </li>
        </ul>
      </drop-down>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: null,
      selectedEmployee: null,
      employees: [],
    };
  },
  computed: mapGetters(["getarea", "getareaCode"]), // get from store
};
</script>
