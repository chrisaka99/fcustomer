<template>
  <div class="container-fluid">
    <div class="row" id="row-layer">
      <div class="a col-md-6">__A</div>
      <div class="b col-md-6">
        <div class="row">
          <h3 class="lead mx-auto my-5 title">Connexion</h3>
        </div>
        <div class="row">
          <div class="col-md-10 mx-auto">
            <form v-on:submit.prevent="login" method="POST">
              <div class="form-group">
                <label for="identif">Identifiant</label>
                <b-form-input
                  id="identif"
                  type="text"
                  autocomplete="off"
                  v-model="user_id"
                  required
                ></b-form-input>
              </div>
              <div class="form-group">
                <label for="mdp">Mot de passe</label>
                <b-form-input
                  id="mdp"
                  type="password"
                  v-model="mdp"
                  required
                ></b-form-input>
              </div>

              <p v-if="msg">{{ msg }}</p>

              <div class="form-group">
                <router-link to="/password-forgotten"
                  >Mot de passe oublié ?</router-link
                >
              </div>
              <div class="form-group">
                <button type="submit" tag="button" class="button btn-block">
                  Se connecter
                </button>
              </div>

              <div class="form-group">
                <p>
                  Vous n'avez pas de compte ?
                  <router-link to="/inscription">Inscrivez-vous</router-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      user_id: "",
      mdp: "",
      msg: "",
    };
  },
  methods: {
    async login() {
      const credentials = {
        user_id: this.user_id,
        mdp: this.mdp,
      };

      await axios
        .post("http://localhost:3000/api/login", credentials)
        .then((res) => {
          this.msg = res.data.msg;
          localStorage.setItem("token", res.data.token);
          this.$router.push("/user");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css" scoped>
.a {
  background: url("../assets/startup-593327_1920.jpg") no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#row-layer {
  min-height: 100vh;
}
.title {
  font-size: 50px;
  letter-spacing: 2;
  font-weight: bold;
}
.cmargin {
  margin: 40px !important;
}

img {
  width: 100% \9;
}
.title {
  font-size: 50px;
  letter-spacing: 2;
  font-weight: bold;
}

.form-control {
  border-radius: 0;
}

.typing-part {
  margin-top: 20px;
  padding: 0;
}

.half-part {
  padding-top: 40px;
}

.button {
  background-color: #06f;
  border: none;
  border-radius: 0;
  color: white;
  padding: 10px 15px;
  transition: all 0.1s;
}
.error {
  color: white;
  background-color: red;
}
</style>
