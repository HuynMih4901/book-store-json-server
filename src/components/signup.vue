<template>
    <div class="vue-tempalte">
        <b-container fluid>
            <b-row class="flex-row">
                <b-col class="col-sm-6">
                    <div class="img">
                        <img src="../assets/img/banner.png">
                    </div>
                </b-col>
                <b-col class="col-sm-6 justify-content-center align-center">
                    <form class="vertical-center ">
                        <h1>Sign Up</h1>
                        <div class="form-group mb-3">
                            <label>Full Name</label>
                            <input type="text" v-model="name" required class="form-control form-control-lg" />
                        </div>
                        <div class="form-group mb-3">
                            <label>Email address</label>
                            <input type="email" v-model="email" required class="form-control form-control-lg" />
                        </div>
                        <div class="form-group mb-5">
                            <label>Password</label>
                            <input type="password" v-model="password" required class="form-control form-control-lg" />
                        </div>
                        <button v-on:click="signUp" class="btn btn-dark btn-lg btn-block">Sign Up</button>
                        <p class="forgot-password text-right">
                            Already registered
                            <router-link :to="{ name: 'signin' }">Sign in?</router-link>
                        </p>
                    </form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: "signup",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn(result);
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name: "Home"})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        if(user){
            this.$router.push({name: "Home"})
        }
    }
}
</script>
<style>
li {
    list-style: none;
}

a {
    text-decoration: none;
}

.img {
    width: 100%;
}

img {
    width: 100%;
}

.form-control:focus {
    border-color: #2554FF;
    box-shadow: none;
}

.vertical-center {
    display: flex;
    text-align: left;
    justify-content: center;
    flex-direction: column;
}

.header {
    text-align: end;
}

.inner-block {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
}

.vertical-center h1 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
}

label {
    font-weight: 500;
}

.forgot-password,
.forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7a7a7a;
    margin: 0;
}

.forgot-password a {
    color: #2554FF;
}
</style>