<template>
<div class="create-account-form">
    <h2>Create Account</h2>
    <h3>Email</h3>
    <new-input v-model="personalData.login" :class="{error: errorEmail}"/>
    <h3>Password</h3>
    <new-input v-model="personalData.password" type="password" :class="{error: error}"/>
    <h3>Confirm password</h3>
    <new-input v-model="personalData.password_submit" type="password" :class="{error: error}"/>
    <h3 style="color: red;">{{ messageForForm }}</h3>
    <new-button @click="create_account" class="button">Sign in</new-button>
</div>
</template>

<script>
import Authorithation from '@/components/authorithation/api/api.js'
import validator from 'validator';
export default{
    data(){
        return{
            personalData: {
                login: '',
                password: '',
                password_submit: ''
            },
            errorEmail: false,
            error: false,
            message: '',
            messageForForm: '',
        }
    },
    methods:{
        validateData() {
        const { login, password, password_submit } = this.personalData;
            if (!validator.isEmail(login)) {
                this.errorEmail = true;
                this.messageForForm = 'Email is required'
                return false;
            }

            if (!password) {
                this.error = true;
                this.messageForForm = 'Password is required'
                return false;
            }

            if (password !== password_submit) {
                this.messageForForm = 'Passwords do not match'
                this.error = true
                return false;
            }

            return true;
        },
        async create_account(){
            if(this.validateData()){
                let body = {
                    "login": this.personalData.login,
                    "password": this.personalData.password
                }
                console.log(body)
                this.message = await Authorithation.registration_request(body, this.clean_form);

                console.log(this.message)

                this.$emit('regestrationResult', this.message)
            }
        },
        clean_form(){
            this.personalData = {
                login: '',
                password: '',
                password_submit: ''
            }
            this.messageForForm = ''
        }
    }
}
</script>

<style lang="scss">
.create-account-form{
    display: block;
    width: 25vw;

    padding: 15px;

    height: 400px;

    flex-shrink:0;

    background-color: #ffffff;
    .button{
        margin-top: 10px;
    }
}
</style>