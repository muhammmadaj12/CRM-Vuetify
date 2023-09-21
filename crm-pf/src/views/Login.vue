<template>
    <v-app>
      <v-main>
        <v-container fluid fill-height>
            <center><v-img :width="180" class="my-5" aspect-ratio="16/9" cover src="../assets/Images/logo.png"></v-img></center>
            <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card>
                <v-card-title class="headline">Login</v-card-title>
                <v-card-text>
                  <v-form @submit.prevent="login">
                    <v-text-field v-model="email" label="Email" required :rules="emailRules"></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                    <v-btn color="primary" type="submit" class="mr-4" :disabled="!email || !password">Login</v-btn>
                  </v-form>
                </v-card-text>
                <center><p>Already have an account? <router-link to="/Signup">Login</router-link></p></center>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>

<script setup>

    import { ref} from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios'; // Import Axios
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const emailRules = 
    [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be in xyz@domian.com fromat', // Simple email format validation
    ];
    


    const login = async (e) => {
    e.preventDefault();

    try 
    {
        const response = await axios.post('http://10.0.10.114:8000/api/users/login',
        {
            email: email.value,
            password: password.value,
        },
        {
            headers: {'Content-Type': 'application/json'},
        });
        
        if (response.status === 200)
        {
            const { token } = response.data; // Assuming your API returns a token
            localStorage.setItem('authToken', token); // Store the token in local storage
            router.push({ path: '/dashboard/user-managment' });
            email.value = '';
            password.value = '';
        }
        else
        {
            // Handle non-2xx HTTP response status codes here
            console.log('HTTP error:', response.status);
            alert("Login Failed");
            return;
        }

        // router.push({ path: "/dashboard/user-managment", });

        alert("Login successfully");
        // Handle the response data as needed
        } catch (error) {
            // Handle other types of errors, e.g., network issues
            console.error('Error:', error);
            alert("User not found");
        }
    };
    
</script>

<style scoped>
.v-main
{
    display: flex;
    align-items: center;
}
</style>