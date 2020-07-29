<template>
  <div class="cmargin">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-12 offset-sm-0 col-md-6 offset-md-0 text-center align-self-center"
        >
          <img
            src="../assets/welcome.svg"
            class="img-fluid"
            height="400"
            width="400"
          />
        </div>
        <div class="col-sm-12 col-md-4 offset-md-1 half-part">
          <div class="row">
            <h3 class="lead title">Inscription</h3>
          </div>
          <div class="row">
            <div class="col typing-part">
              <form
                @submit.prevent="submitForm"
                action="/something"
                method="post"
              >
                <div class="form-group">
                  <label for="identif">Identifiant</label>
                  <input
                    type="text"
                    class="form-control"
                    autocomplete="off"
                    id="identif"
                    name="identifiant"
                    v-model="identifiant"
                  />
                </div>
                <div class="form-group">
                  <label for="mdp">Mot de passe</label>
                  <input
                    type="password"
                    class="form-control"
                    autocomplete="off"
                    id="mdp"
                    name="mdp"
                    v-model="mdp"
                  />
                </div>
                <div class="form-group">
                  <label for="remdp">Retapez le mot de passe</label>
                  <input
                    type="password"
                    class="form-control"
                    autocomplete="off"
                    id="remdp"
                    name="remdp"
                  />
                </div>
                <div class="form-group">
                  <button type="submit" class="button btn-block">
                    S'inscrire
                  </button>
                </div>
                <div class="form-group">
                  <p>
                    Vous possedez déjà un compte ?
                    <router-link to="/connexion">Connectez-vous</router-link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TheInput from "../components/TheInput";
export default {
  name: "RegisterPage",
  components: {
    // TheInput,
  },
  data() {
    return { identifiant: null, mdp: null, errors: [] };
  },
  methods: {
    submitForm: function() {
      if (this.identifiant && this.mdp) {
        console.log("success");
        return true;
      }
      this.errors = [];

      if (!this.identifiant) {
        this.errors.push("Identifiant requis");
      }
      if (!this.mdp) {
        this.errors.push("Mot de passe requis");
      }
    },
  },
};
</script>

<style lang="css">
.cmargin {
  margin: 15px !important;
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

.button:active {
  background-color: #fff;
  border: 1px solid #06f;
  color: #06f;
}
</style>
