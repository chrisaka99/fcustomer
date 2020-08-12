<template>
  <div class="row justify-content-center">
    <div
      class="col-md-11 rounded-sm wrapper mb-4"
      style="background-color: #fff;"
    >
      <div class="row">
        <div class="col-md-4 p-2 bg-white">
          <div class="radio-buttons">
            <label class="custom-radio">
              <input type="radio" value="client" v-model="status" />
              <span class="radio-btn">
                <span class="icon"
                  ><font-awesome-icon :icon="['fas', 'check']"
                /></span>
                <div class="status-icon text-center">
                  <img class="img-fluid" src="../assets/businessman.svg" />
                  <h3>Client</h3>
                </div>
              </span>
            </label>

            <label class="custom-radio">
              <input type="radio" value="etudiant" v-model="status" />
              <span class="radio-btn">
                <span class="icon"
                  ><font-awesome-icon :icon="['fas', 'check']"
                /></span>
                <div class="status-icon text-center">
                  <img class="img-fluid" src="../assets/school.svg" />
                  <h3>Etudiant</h3>
                </div>
              </span>
            </label>
          </div>
        </div>

        <div class="col-md-6 p-3">
          <div v-show="status === 'client'">
            <div class="col-md-12 offset-md-2 p-sm-5">
              <div class="mb-sm-5 text-center text-uppercase">
                <h1>Welcome</h1>
              </div>
              <form
                @submit.prevent="submitForm"
                class="justify-content-center"
                action="/something"
                method="post"
                key="form-1"
              >
                <b-form-group label="Email" label-for="email-cli">
                  <b-form-input
                    id="email-cli"
                    autocomplete="off"
                    type="email"
                    v-model="form1.emailSociete"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Nom de la société" label-for="nom-cli">
                  <b-form-input
                    id="nom-cli"
                    autocomplete="off"
                    type="text"
                    v-model="form1.nomSociete"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Adresse" label-for="adresse-cli">
                  <b-form-input
                    id="adresse-cli"
                    autocomplete="off"
                    type="text"
                    v-model="form1.adresseCli"
                    required
                  ></b-form-input>
                </b-form-group>

                <div class="form-group">
                  <button type="submit" tag="button" class="button btn-block">
                    Valider
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div v-show="status === 'etudiant'">
            <div class="col-md-12 offset-md-2 p-sm-5">
              <div class="mb-sm-5 text-center text-uppercase">
                <h1>Welcome</h1>
              </div>
              <form
                @submit.prevent="submitForm"
                class="justify-content-center"
                action="/something"
                method="post"
                key="form-2"
              >
                <b-form-group label="Email" label-for="email-etu">
                  <b-form-input
                    id="email-etu"
                    autocomplete="off"
                    type="email"
                    v-model="form2.email"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Nom" label-for="nom-etu">
                  <b-form-input
                    id="nom-etu"
                    autocomplete="off"
                    type="text"
                    v-model="form2.nom"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Prénoms" label-for="prenoms-etu">
                  <b-form-input
                    id="prenoms-etu"
                    autocomplete="off"
                    type="text"
                    v-model="form2.prenom"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Date de naissance"
                  label-for="dateNais-etu"
                >
                  <b-form-datepicker
                    id="dateNais-etu"
                    v-model="form2.dateNais"
                    class="mb-2"
                  ></b-form-datepicker>
                </b-form-group>

                <b-form-group label="Sexe">
                  <b-form-radio-group
                    id="sexe-etu"
                    v-model="selected"
                    :options="options"
                  ></b-form-radio-group>
                </b-form-group>

                <div class="form-group">
                  <button type="submit" tag="button" class="button btn-block">
                    Valider
                  </button>
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
export default {
  name: "TheFirstProfile",
  data() {
    return {
      selected: [],
      options: [
        { text: "Masculin", value: "M" },
        { text: "Feminin", value: "F" },
      ],
      status: "",
      form1: {
        emailSociete: "",
        nomSociete: "",
        adresseCli: "",
      },
      form2: {
        email: "",
        nom: "",
        prenom: "",
        dateNais: "",
        matiere: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.status === "client") {
        alert(JSON.stringify(this.form1));
      } else {
        alert(
          JSON.stringify(this.form2) + " " + this.selected + " " + this.status
        );
      }
    },
  },
  computed: {
    // isClient() {
    //   return this.current == 1;
    // },
    // isEtudiant() {
    //   return this.current == 2;
    // },
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
