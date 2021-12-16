<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Hello  this.username</h4>
            <p class="category">https://drive.google.com/file/d/1Wb8sjtNAFTmR0LMbUxrWWbT3g52hV7Va/view</p>
          </md-card-header>
          <md-card-content>
            <div id="typography">
              <div class="title">
               <div class="logo">
      <a href="#" class="simple-text logo-mini">
        <div class="logo-img">     
          <img :src="imgLogo" alt="" />
        </div>
      </a>


    </div>
              </div>
             
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },

    imgLogo: {
      type: String,
      default: require("@/assets/img/logo.png"),
    },
  },
};
</script>
