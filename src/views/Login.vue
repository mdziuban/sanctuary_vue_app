<template>
  <div class="row justify-content-center img_container">
    <div class="">
      <img :src="SiteImages.image" class="img-fluid Min100 " alt="Waterfall" />
    </div>
            <div class="row mb-3 text-center top">
          <h1 class="my-3 display-1">Welcome to Sanctuary</h1>
        </div>
    <div class="centered">

    <div class="d-flex  align-items-center  justify-content-center">
      <div class="row h-50 col-4 ">
        <h4 v-if="incorrectAuth">
          The username or password you entered was incorrect.
        </h4>
        <form v-on:submit.prevent="login()" class="">
          <div class="row mb-3 d-flex justify-content-center">
            <div class="col-sm-10">
              <input
                type="text"
                name="username"
                class="form-control"
                id="user"
                v-model="username"
                placeholder="Username"
              />
            </div>
          </div>
          <div class="row mb-3 d-flex justify-content-center">
            <div class="col-sm-10">
              <input
                type="password"
                name="password"
                class="form-control"
                id="pass"
                v-model="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="row d-flex justify-content-center">
          <div class="mb-3 ">
            <div class="col-1"></div>
            <input type="submit" class="col-4 btn btn-outline-dark bg-success bg-gradient btn-lg mb-1" value="Login" />
            <div class="col-1"></div>
            <div class="col-1"></div>
            <router-link
                :to="{ name: 'register' }"
                class="col-4 btn btn-outline-light btn-lg"
                >Register</router-link
            >
            <div class="col-1"></div>
          </div>
          </div>
        </form>
        <div class="row h-50 d-flex justify-content-center">
         
            <div class="col-sm-10 mb-3">

            </div>
       
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getAPI } from "../axios-api";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      incorrect: false,
    };
  },
  computed: mapState(["SiteImages"]),
  methods: {
    login() {
      this.$store
        .dispatch("userLogin", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "posts" });
        })
        .catch((err) => {
          console.log(err);
          this.incorrect = true;
        });
    },
    GetImages() {
      getAPI
        .get("/images/")
        .then((response) => (this.$store.state.SiteImages = response.data[0]));
    },
  },
  created() {
    this.GetImages();
  },
};
</script>

<style>
.img_container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.top {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.Min100 {
  min-height: 100vh;
}
</style>