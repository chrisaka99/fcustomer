<template>
  <div class="container-fluid pt-5">
    <div>
      <div class="col-md-6 mx-auto my-auto">
        <div class="row">
          <h3 class="lead mx-auto my-5 title">Connexion Administrateur</h3>
        </div>
        <div class="row">
          <div class="col-md-7 mx-auto my-auto">
            <form v-on:submit.prevent="submit" method="POST" novalidate>
              <p v-if="msg" class="text-center">
                <b-alert show variant="danger">{{ msg }}</b-alert>
              </p>
              <div class="form-group">
                <label for="identif">Identifiant</label>
                <b-form-input
                  id="identif"
                  type="text"
                  autocomplete="off"
                  v-model="admin_id"
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

              <div class="form-group">
                <button type="submit" tag="button" class="button btn-block">
                  Se connecter
                </button>
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
  name: "AdminLogin",
  data() {
    return {
      admin_id: "",
      mdp: "",
      msg: "",
    };
  },
  methods: {
    async submit() {
      const credentials = {
        admin_id: this.admin_id,
        mdp: this.mdp,
      };

      await axios
        .post("http://localhost:3000/api/loginAdmin", credentials)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            localStorage.setItem("tokenAdmin", res.data.tokenAdmin);
            this.$router.push("/dashboard");
          }
        })
        .catch((err) => {
          this.msg = err.response.data.msg;
          console.log(err.response);
        });
    },
  },
  created() {
    // if (
    //   localStorage.getItem("tokenAdmin") !== null ||
    //   localStorage.getItem("tokenAdmin") !== undefined
    // ) {
    //   this.$router.push("/dashboard");
    // } else {
    //   this.tokenAdmin = localStorage.getItem("tokenAdmin");
    // }
  },
};
</script>

<style lang="css">
.wrap {
  border: 1px solid rgba(0, 0, 0, 0.199);
}
.button {
  background-color: #06f;
  border: none;
  border-radius: 0;
  color: white;
  padding: 10px 15px;
  transition: all 0.1s;
}
</style>
