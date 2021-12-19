<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Chào mừng đến với ứng dụng CitizenV</h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100">
                <p>
                  <img :src="imgLogo" alt="" />
                </p>
              </div>
              <div class="md-layout-item md-medium-size-100">
                <h5>Xin chào,</h5>
                <div>
                  <p>
                    <a
                      href="https://drive.google.com/file/d/1Wb8sjtNAFTmR0LMbUxrWWbT3g52hV7Va/view"
                      >Link: Mấu điều tra dân số</a
                    >
                  </p>
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
