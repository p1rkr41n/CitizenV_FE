<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="id">id</label>
          <input
            v-model="user.id"
            v-validate="'required'"
            type="text"
            class="form-control"
            name="id"
          />
          <div
            v-if="errors.has('id')"
            class="alert alert-danger"
            role="alert"
          >id is required!</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="user.password"
            v-validate="'required'"
            type="password"
            class="form-control"
            name="password"
          />
          <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert"
          >Password is required!</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
      </form>
    </div>
  </div>



   <!-- <v-container class="page-login" fill-height>
    <v-row>
      <v-col :cols="12">
        <v-card class="pa-3 page-login__card" tile>
          <v-card-title>
            <img src="/static/vue_logo.svg" alt="Vue Material Admin" height="48" contain />
            <div class="primary--text display-1">Citizen V</div>
          </v-card-title>
          <v-card-text>
            
            <v-form ref="form" v-model="formValid" class="my-10" lazy-validation>
              <v-text-field
                v-model="formModel.id"
                append-icon="mdi-email"
                autocomplete="off"
                name="login"
                :label="$t('id')"
                :placeholder="$t('id')"
                type="text"
                required
                outlined
                :rules="formRule.id"
              />
              <v-text-field
                v-model="formModel.password"
                append-icon="mdi-lock"
                autocomplete="off"
                name="password"
                :label="$t('password')"
                :placeholder="$t('password')"
                type="password"
                :rules="formRule.password"
                required
                outlined
                @keyup.enter="handleLogin"
              />
            </v-form>
            
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn large text @click="handleRegister">
              {{ $t('register') }}
            </v-btn>
            <v-btn large tile color="primary" :loading="loading" @click="handleLogin">
              {{ $t('login') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
import User from '../models/user';

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.id && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/profile');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>