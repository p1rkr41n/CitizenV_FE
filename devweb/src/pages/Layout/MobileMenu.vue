<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">person</i>
          <!-- <span class="notification">5</span> -->
          <p>Tài khoản</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li><a href="#">ID:00000001</a></li>
          <li><a href="#">Logut</a></li>
        </ul>
      </drop-down>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone",
      ],
    };
  },
};
</script>
