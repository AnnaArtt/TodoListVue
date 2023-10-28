<template>
    <dialog-window v-model="isOpnened">
        <form @submit.prevent="">
            <h3>Name</h3>
            <new-input v-model="user.userName" :class="{ error: errorUserName }"/>
            <h3>Status</h3>
            <new-select v-model="user.status" :array_values = 'array_status' :class="{ error: errorStatus }"/>
            <div class="button_wrapper">
                <new-button type="submite" @click="sendRequest">Add</new-button>
            </div>
        </form>
    </dialog-window>
</template>

<script>
import ManageAccounts from '@/components/user/api/api.js'
export default{
    data(){
        return{
            user:{
                userName: '',
                status: ''
            },
            array_status: ['mather', 'father', 'son', 'daughter'],
            errorUserName: false,
            errorStatus: false,
            isOpnened: false
        }
    },
    props:{
        modelValue:{
            type: Boolean,
            required: true
        }
    },
    watch:{
        modelValue(){
            this.isOpnened = this.modelValue;
        },
        isOpnened(){
            this.clearFormData();
            this.$emit('update:modelValue',this.isOpnened);
        }
    },
    methods:{
        closeDialog(){
            this.isOpnened = false;
        },
        checkValue(){
            let name_rex = /\w+/;
            if(this.user.status == "" || !name_rex.test(this.user.userName)){
                if(!name_rex.test(this.user.userName)){
                    this.errorUserName = true
                }

                if(this.user.status == ""){
                    this.errorStatus = true
                    console.log("OK nono")
                }
                return false
            }    
            else{
                return true
            }
        },
        clearFormData(){
            this.user = {
                userName: '',
                status: ''
            },
            this.errorUserName = false;
            this.errorStatus = false;
        },
        async sendRequest(){
            if(this.checkValue()){
                console.log("OK");
                const response = await ManageAccounts.addUserProfile(this.user, this.closeDialog);
                console.log(response);
                this.$emit(response.event_name, response.data)
            }
        }
    }
}
</script>

<style>
h3{
    margin: 10px 0;
}
.button_wrapper{
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
.error{
    border: 2px solid brown;
}
</style>