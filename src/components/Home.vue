<template>
<div>
<h3 v-if="user">Hi, {{user.first_name}} {{user.last_name}}</h3>
 <h3 v-if="!user">You are not logged in</h3>

</div>
     
</template>

<script>
import axios from 'axios'

export default{
    name: 'Home',

  data(){
      return{
          user : null
      } 
  },

    async created(){
        const response = await axios.get('user',);

        this.user= response.data;
    }
}
</script>
