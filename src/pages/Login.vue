<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">
      <div class="title">
        <img
          class="md-round"
          style="box-shadow:  3px 3px 3px #c8c8c8; border-radius: 100px; padding:10px; background-color: #FFFFE6;"
          src="@/assets/img/logo.png"
        />
        <div class="md-title">CitizenV</div>
        <div class="md-body-1">Ứng dụng điều tra dân số Việt Nam</div>
      </div>

      <div class="form">
        <md-field>
          <label>Tài khoản</label>
          <md-input v-model="login.username" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Mật khẩu</label>
          <md-input v-model="login.password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <a></a>
        <md-button class="md-raised md-primary md-round" @click="auth"
          >Đăng nhập</md-button
        >
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner
          md-mode="indeterminate"
          :md-stroke="2"
        ></md-progress-spinner>
      </div>
    </md-content>
    <div class="background" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: false,
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    auth() {
      // your code to login user
      // this is only for example of loading
      window.location = "/#/app/dashboard/";
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
  },
};
</script>

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .background {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>