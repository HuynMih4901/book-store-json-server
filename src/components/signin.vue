<template>
  <div class="vue-tempalte mx-5">
    <b-container fluid>
      <b-row class="flex-row">
        <b-col class="col-sm-6">
          <div class="img">
            <img src="../assets/img/banner.png">
          </div>
        </b-col>
        <b-col class="col-sm-6 justify-content-center align-center">
          <form class="vertical-center ">
            <h1>OnBooker</h1>
            <div class="header">
              <router-link to="/signup">Sign Up</router-link>
            </div>
            <div class="form-group">
              <label>Email address</label>
              <input v-model="email" type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group mb-5">
              <label>Password</label>
              <input v-model="password" type="password" class="form-control form-control-lg" />
            </div>
            <button v-on:click="signin" type="submit" class="btn btn-dark btn-lg btn-block">
            Sign In
            </button>
            <p class="forgot-password text-right mt-2 mb-4">
              <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
            <div class="social-icons">
              <ul>
                <li><a href="#">
                    <b-icon icon="google" aria-hidden="true"></b-icon>
                  </a></li>
                <li><a href="#">
                    <b-icon icon="facebook" aria-hidden="true"></b-icon>
                  </a></li>
                <li><a href="#">
                    <b-icon icon="twitter" aria-hidden="true"></b-icon>
                  </a></li>
              </ul>
            </div>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "signin",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async signin() {
      let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]))
        this.$router.push({ name: "Home" })
      }
      console.warn(result)
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

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}

.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}
</style>