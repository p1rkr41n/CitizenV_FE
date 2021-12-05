<template>
     <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>

        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-contrl" v-model="first_name" placeholder="First Name"/>
        </div>

         <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-contrl" v-model="last_name" placeholder="Last Name"/>
        </div>

          <div class="form-group">
            <label>Email</label>
            <input type="emmail" class="form-contrl" v-model="email" placeholder="Email"/>
        </div>
         <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-contrl" v-model="password" placeholder="Password"/>
        </div>

         <div class="form-group">
            <label>Confirm password</label>
            <input type="password" class="form-contrl" v-model="password_confirm" placeholder="Confirm password"/>
        </div>
        

        <button class="btn btn-primary btn-block">Sign Up</button>
     </form> 
</template>

<script>
import axios from 'axios'

export default{ 
    name :'Register',

    data(){
        return{
            first_name:'',
            last_name: '',
            email:'',
            password: '',
            password_confirm: ''
        }
    },

    methods: {
      async handleSubmit(){
        
       const  response = await axios.post('register', {
                first_name: this.first_name,
            last_name: this.last_name,
            email:this.email,
            password: this.password,
            password_confirm: this.password_confirm

           }); 
           console.log(response);   
           this.$router.push('/login');
        }
    }
}

</script>
