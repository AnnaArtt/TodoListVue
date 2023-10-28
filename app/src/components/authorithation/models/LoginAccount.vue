<template>
<div class="login-form">
    <h2>Sign in</h2>
    <h3>Email</h3>
    <new-input v-model="personalData.login" :class="{error: error}"/>
    <h3>Password</h3>
    <new-input v-model="personalData.password" type="password" :class="{error: error}"/>
    <a href="">Forgot Password?</a>
    <h3 style="color: red;">{{ message }}</h3>
    <new-button @click="sign_in">Sign in</new-button>
</div>
</template>

<script>
import Authorithation from '@/components/authorithation/api/api.js'
export default{
    data(){
        return{
            personalData: {
                login: '',
                password: '',
            },
            error: false,
            message: ''
        }
    },
    methods:{
        sign_in(){
            let request = true
            for (const key in this.personalData) {
                if (this.personalData[key] == "" ) {
                    this.error = true;
                    this.message = 'Some fields are empty'
                    request = false
                    break;                   
                }
            }
            if(request){
                let body = {
                    "login": this.personalData.login,
                    "password": this.personalData.password
                }
                Authorithation.login_request.call(this, body);
            }
        },
        // async login_request(body){
        //     try {

        //         let tokenValue = await axios.post('http://localhost:8081/authorization/login', body);

        //         localStorage.setItem('token', tokenValue.data.token);
        //         localStorage.setItem('tokenExpiration', new Date().getTime() + 24 * 60 * 60 * 1000);
        //         console.log(this.$route.path);
        //         this.$router.push('/');

        //     } 
        //     catch (error) {
        //         console.log(error)
        //         if(error.message=='Network Error'){
        //             this.$router.push('/error505');
        //         }
        //         else{
        //             this.error = true;
        //             this.message = error.response.data.message
        //         }
        //     }
        // }
    }
}
</script>

<style lang="scss">
.login-form{
    display: block;
    width: 25vw;

    padding: 15px;

    height: 400px;

    flex-shrink:0;

    background-color: #ffffff;
    a{
        display: block;

        margin: 10px 0px;
    }
}
.error{
    border: 1px solid red;
}
</style>