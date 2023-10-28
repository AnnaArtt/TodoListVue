<template>
    <div class="container">
        <div class="wrapper">
            <div class="forms" :class="{ new_left_form: !state }">
                <div class="wrapper_forms" :class="{ new_left_wrapper_form: !state }" ref="forms">
                    <LoginAccount></LoginAccount>
                    <CreateAccount @regestrationResult = 'getRegestrationResult'></CreateAccount>
                </div>
            </div>
            <div class="post" :class="{ new_left: state }">
                <div class="wrapper_post" :class="{ new_left_wrapper: state }" ref="posts">
                    <WelcomeBlock @changeState="slider"></WelcomeBlock>
                    <HelloBlock @changeState="slider"></HelloBlock>
                </div>
            </div>
        </div>
        <MessageRegistration v-model:message="messageRegistration" v-model = 'messageRegistrationVisible'/>
    </div>
</template>

<script>
import LoginAccount from '@/components/authorithation/models/LoginAccount.vue';
import CreateAccount from '@/components/authorithation/models/CreateAccount.vue';
import WelcomeBlock from '@/components/authorithation/models/WelcomeBlock.vue';
import HelloBlock from '@/components/authorithation/models/HelloBlock.vue';
import MessageRegistration from '@/components/authorithation/models/MessageRegistration.vue'
export default{
components:{
    LoginAccount,
    CreateAccount,
    WelcomeBlock,
    HelloBlock,
    MessageRegistration
},
data(){
    return{
        state: true,
        messageRegistrationVisible: false,
        messageRegistration: ''
    }
},
methods:{
    slider(){
        this.state = !this.state;
    },
    getRegestrationResult(message){
        this.messageRegistrationVisible = true;
        this.messageRegistration = message
    }
}
}
</script>

<style lang="scss">
.container{
position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 width: 100vw;
    .wrapper{
        position: relative;
        width: 50vw;
        display: flex;
        flex-wrap:nowrap;
        overflow: hidden;
        height: 400px;
        .forms{
            position: absolute;
            bottom: 0;
            left: 0vw;
            width: 25vw;
            height: 400px;
            display: flex;
            flex-wrap:nowrap;
            overflow: hidden;

            transition: all 1s 0s ease-in;
            .wrapper_forms{
                position: absolute;
                bottom: 0;
                left: 0vw;
                width: 50vw;
                height: 400px;
                display: flex;
                flex-wrap:nowrap;
                overflow: hidden;

                transition: all 1s 0s ease-in;

            }
            z-index: 2;
        }
        .post{
            position: absolute;
            bottom: 0;
            left: 0vw;
            width: 25vw;
            height: 400px;
            display: flex;
            flex-wrap:nowrap;
            justify-content: flex-end;
            overflow: hidden;

            transition: all 1s 0s ease-in;

            .wrapper_post{
                position: absolute;
                bottom: 0;
                left: 0vw;
                width: 50vw;
                height: 400px;
                display: flex;
                flex-wrap:nowrap;
                justify-content: flex-end;
                overflow: hidden;

                transition: all 1s 0s ease-in;

                background: linear-gradient(to right, #F08080, #FFD6D6);    

            }

            z-index: 20;
        }
        .new_left{
            left: 25vw;

            transition: all 1s 0s ease-in;

            .new_left_wrapper{
            left: -25vw;

            transition: all 1s 0s ease-in;
            }
        }

        .new_left_form{
            left: 25vw;

            transition: all 1s 0s ease-in;
            .new_left_wrapper_form{
                left: -25vw;

                transition: all 1s 0s ease-in;


            }
        }
    }
}

</style>