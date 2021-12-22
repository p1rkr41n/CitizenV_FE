<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
    </div>

 
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg"),
    },
  },
  data() {
    return {};
  },
};
</script>
<style></style>
