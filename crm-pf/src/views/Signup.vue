<template>
    <v-app>
      <v-main>
        
        <v-container fluid fill-height>
            <center><v-img :width="180" class="my-5" aspect-ratio="16/9" cover src="../assets/Images/logo.png"></v-img></center>
            <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card>
                <center><v-card-title class="headline">Sign Up</v-card-title></center>
                <v-card-text>
                  <v-form @submit.prevent="Signup">
                    <v-text-field v-model="name" label="Username" required></v-text-field>
                    <v-text-field v-model="email" label="Email" required :rules="emailRules"></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                    <v-text-field v-model="confirm_password" label="Confirm Password" type="password" required></v-text-field>                   
                    <v-btn color="primary" type="submit" class="mr-4" :disabled="!name || !password">Sign Up</v-btn>
                  </v-form>
                </v-card-text>
                <center><p>Already have an account? <router-link to="/login">Login</router-link></p></center>
              </v-card>
              
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
    
    
    
    
    
  
  
  <script>
  export default
    {
      name: "Login"
    }
  </script>
  
  <script setup>
  
  
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios'; // Import Axios
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const confirm_password = ref("");
  const router = useRouter();


  const emailRules = 
  [
    (v) => !!v || 'Email is required',
    (v) => /.+@.+\..+/.test(v) || 'Email must be in xyz@domian.com fromat', // Simple email format validation
  ];
  
  

const Signup = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://10.0.10.114:8000/api/users/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      confirm_password: confirm_password.value,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      // Handle non-2xx HTTP response status codes here
      console.log('HTTP error:', response.status);
      alert("Sign Up Failed");
      return;
    }
    router.push({ name: 'Login' });
    name.value = "";
    email.value = "";
    password.value = "";
    confirm_password.value = "";
    alert("Sign Up Successful");
  } catch (error) {
    console.error('Error:', error);
    console.error('Response Data:', error.response.data); // Log the response data for debugging
    alert("Sign Up Failed");
  }
};

</script>
<style>
.v-main
{
    display: flex;
    align-items: center;
}
</style>