<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <form v-on:submit.prevent="register" method="POST">
          <h1>Inscription</h1>
          {{ msg }}
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
              autocomplete="off"
              v-model="mdp"
              required
            ></b-form-input>
          </div>
          <div class="form-group">
            <label for="remdp">Saisir le mot de passe à nouveau</label>
            <b-form-input
              id="remdp"
              type="password"
              autocomplete="off"
              v-model="remdp"
              required
            ></b-form-input>
          </div>
          <div class="form-group">
            <label for="email">Email :</label>
            <b-form-input
              id="email"
              type="email"
              autocomplete="off"
              v-model="email"
              required
            ></b-form-input>
          </div>
          <div class="form-group">
            <label for="nom">Votre nom (ou nom de la strucutre)</label>
            <b-form-input
              id="nom"
              type="text"
              autocomplete="off"
              v-model="nom"
              required
            ></b-form-input>
          </div>
          Vous êtes :
          <div class="form-group">
            <div class="radio-buttons">
              <label class="custom-radio">
                <input type="radio" value="client" v-model="statut" />
                <span class="radio-btn">
                  <span class="icon"><b-icon icon="check"></b-icon></span>
                  <div class="status-icon text-center">
                    <img class="img-fluid" src="../assets/businessman.svg" />
                    <h3>Client</h3>
                  </div>
                </span>
              </label>

              <label class="custom-radio">
                <input type="radio" value="etudiant" v-model="statut" />
                <span class="radio-btn">
                  <span class="icon"><b-icon icon="check"></b-icon></span>
                  <div class="status-icon text-center">
                    <img class="img-fluid" src="../assets/school.svg" />
                    <h3>Etudiant</h3>
                  </div>
                </span>
              </label>
            </div>
          </div>

          <div v-if="statut == 'etudiant'">
            <div class="form-group">
              <label for="prenoms">Prenoms</label>
              <b-form-input
                id="prenoms"
                type="text"
                autocomplete="off"
                v-model="prenoms"
                required
              ></b-form-input>
            </div>
            <div>
              <label for="dateNais">Date de naissance</label>
              <b-form-datepicker
                locale="fr"
                id="dateNais"
                v-model="dateNais"
                class="mb-2"
              ></b-form-datepicker>
            </div>

            <div>
              <label for="promotion">Promotion :</label>
              <b-form-select
                id="promotion"
                class="mb-4"
                v-model="promotion"
                :options="options"
              ></b-form-select>
            </div>
            <b-form-group label="Sexe : ">
              <b-form-radio v-model="sexe" name="sexe" value="f"
                >Femme</b-form-radio
              >
              <b-form-radio v-model="sexe" name="sexe" value="m"
                >Homme</b-form-radio
              >
            </b-form-group>
          </div>

          <div class="form-group">
            <button type="submit" tag="button" class="button btn-block">
              S'inscrire
            </button>
          </div>
          <div class="form-group">
            <p>
              Vous possedez déjà un compte ?
              <router-link to="/connexion">Connectez-vous</router-link>
            </p>
          </div>
          <p v-if="msg">{{ msg }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      user_id: "",
      mdp: "",
      remdp: "",
      email: "",
      statut: "",
      msg: "",
      nom: "",
      prenoms: "",
      dateNais: "",
      promotion: "",
      sexe: "",
      options: [
        { value: null, text: "Selectionnez une option" },
        { value: "2020", text: "2020" },
        { value: "2019", text: "2019" },
        { value: "2018", text: "2018" },
        { value: "2017", text: "2017" },
        { value: "2016", text: "2016" },
        { value: "2015", text: "2015" },
        { value: "2014", text: "2014" },
        { value: "2013", text: "2013" },
        { value: "2012", text: "2012" },
      ],
    };
  },
  methods: {
    async register() {
      try {
        let newUser = {
          user_id: this.user_id,
          mdp: this.mdp,
          nom: this.nom,
          remdp: this.remdp,
          email: this.email,
          statut: this.statut,
          prenom: this.prenoms,
          dateNais: this.dateNais,
          sexe: this.sexe,
          promotion: this.promotion,
        };

        await axios
          .post("http://localhost:3000/api/register", newUser)
          .then((res) => {
            this.msg = res.data.msg;
          })
          .catch((error) => {
            this.msg = error.response.data.msg;
            console.log(error.response);
          });
        // const credentials = {
        //   user_id: this.user_id,
        //   mdp: this.mdp,
        //   nom: this.nom,
        //   remdp: this.remdp,
        //   email: this.email,
        //   statut: this.statut,
        //   prenom: this.prenoms,
        //   dateNais: this.dateNais,
        //   sexe: this.sexe,
        //   promotion: this.promotion,
        // };
        // const response = await AuthServices.register(credentials);
        // this.msg = response.msg;
      } catch (error) {
        // this.msg = error.response.data.msg;
      }
    },
  },
};
</script>

<style lang="css" scoped>
.button {
  background-color: #06f;
  border: none;
  border-radius: 0;
  color: white;
  padding: 10px 15px;
  transition: all 0.1s;
}
.radio-buttons {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.custom-radio input {
  display: none;
}
.radio-btn {
  margin: 10px;
  width: 100px;
  height: 100px;
  border: 3px solid transparent;
  display: inline-block;
  border-radius: 10px;
  position: relative;
  text-align: center;
  box-shadow: 0 0 20px #c3c3c367;
  cursor: pointer;
}

.radio-btn > .icon {
  color: #fff;
  background-color: #348def;
  font-size: 15px;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%) scale(4);
  border-radius: 50px;
  padding: 2px 6px 0px 6px;
  transition: 0.2s;
  pointer-events: none;
  opacity: 0;
  z-index: 100;
}

.radio-btn .status-icon {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* .radio-btn .status-icon img {
  height: 60px;
} */

.radio-btn .status-icon h3 {
  color: #348def;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
}

.custom-radio input:checked + .radio-btn {
  border: 3px solid #348def;
}

.custom-radio input:checked + .radio-btn > .icon {
  border: 3px solid #348def;
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
</style>
