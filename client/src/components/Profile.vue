<template>
  <div class="row justify-content-center">
    <div
      class="col-md-11 rounded-sm wrapper mb-4"
      style="background-color: #fff;"
    >
      <div class="row">
        <div class="col-md-12 p-5 bg-white">
          <div class="row">
            <div class="col-md-3 col-sm-12 text-sm-center text-md-center">
              <b-avatar text="JD" fluid size="10rem"></b-avatar>
              <div class="row mt-3 d-flex flex-column">
                <b-button
                  variant="light"
                  @click="$bvModal.show('bv-modal-example')"
                >
                  <font-awesome-icon :icon="['fas', 'edit']" /> Modifier le mot
                  de passe
                </b-button>
                <b-modal id="bv-modal-example" hide-footer>
                  <template v-slot:modal-title>
                    Changer votre de passe
                  </template>
                  <div class="d-block text-center">
                    <b-form-group label="Saisir mot de passe" label-for="mdp">
                      <b-form-input
                        id="mdp"
                        name="mdp"
                        v-model="mdp"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label="Saisir à nouveau le mot de passe"
                      label-for="remdp"
                    >
                      <b-form-input
                        id="remdp"
                        name="remdp"
                        v-model="remdp"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <b-button
                    class="mt-3 btn-success"
                    block
                    @click="$bvModal.hide('bv-modal-example')"
                    >Valider</b-button
                  >
                </b-modal>
                <!-- <b-button
                  v-show="!disabled"
                  variant="success"
                  v-on:click="switchEdit"
                  class="mt-2"
                >
                  <font-awesome-icon :icon="['fas', 'save']" /> Sauvegarder
                </b-button> -->
              </div>
            </div>

            <div class="col-md">
              <b-form class="ml-4">
                <h3>Informations relatives au compte</h3>
                <b-form-group label="Identifiant" label-for="identif">
                  <b-form-input
                    id="identif"
                    v-model="user.user_id"
                    readonly
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Email" label-for="email">
                  <b-form-input
                    id="email"
                    type="email"
                    v-model="user.email"
                    readonly
                  ></b-form-input>
                </b-form-group>
                <!-- 
                <b-form-group label="Mot de passe" label-for="mdp">
                  <b-form-input
                    id="mdp"
                    name="mdp"
                    v-model="user.mdp"
                    readonly
                  ></b-form-input>
                </b-form-group> -->
                <hr />

                <h3>Informations personnelles</h3>

                <b-form-group label="Nom" label-for="nom">
                  <b-form-input
                    id="nom"
                    v-model="user.nom"
                    readonly
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Prénoms" label-for="prenoms">
                  <b-form-input
                    id="prenoms"
                    v-model="user.prenom"
                    readonly
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Date de naissance"
                  label-for="dateNais-etu"
                >
                  <b-form-datepicker
                    id="dateNais-etu"
                    v-model="user.dateNais"
                    class="mb-2"
                    locale="fr"
                    readonly
                  ></b-form-datepicker>
                </b-form-group>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      token: "",
      user: "",
      mdp: "",
      remdp: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.user = res.data;
      })
      .catch((error) => console.log(error));
  },
  created() {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === undefined
    ) {
      this.$router.push("/connexion");
    } else {
      this.token = localStorage.getItem("token");
    }
  },
  methods: {
    switchEdit() {
      this.disabled = !this.disabled;
    },
  },
  computed: {
    getInitials() {
      if (this.user.prenom === null) return this.user.nom.charAt(0);
      return this.user.nom.charAt(0) + this.user.prenom.charAt(0);
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

.form-control {
  border-radius: 0;
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
  width: 180px;
  height: 200px;
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
  font-size: 20px;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%) scale(4);
  border-radius: 50px;
  padding: 2px 6px 0px 6px;
  transition: 0.2s;
  pointer-events: none;
  opacity: 0;
}

.radio-btn .status-icon {
  width: 130px;
  height: 130px;
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
  font-size: 16px;
  font-weight: 400;
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
