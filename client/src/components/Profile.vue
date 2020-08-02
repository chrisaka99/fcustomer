<template>
  <div class="row justify-content-center">
    <div
      class="col-md-11 rounded-sm wrapper mb-4"
      style="background-color: #fff;"
    >
      <div class="row">
        <div class="col-md-12 p-5 bg-white">
          <div class="row">
            <div class="col-md-3">
              <b-avatar text="JD" size="10rem"></b-avatar>
              <div class="row">
                <div class="col text-center m-5">
                  <font-awesome-icon :icon="['fas', 'edit']" /> Modifier
                </div>
              </div>
            </div>
            <div class="col-md">
              <b-form class="ml-4">
                <h3>Informations relatives au compte</h3>
                <label for="nom">Identifiant</label>
                <b-form-input-group class="mb-3">
                  <b-form-input
                    id="identif"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Jane Doe"
                    name="identifiant"
                    readonly
                  ></b-form-input>
                </b-form-input-group>

                <label for="email">Email</label>
                <b-form-input-group class="mb-3">
                  <b-form-input
                    id="email"
                    type="email"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Jane Doe"
                    name="email"
                    readonly
                  ></b-form-input>
                </b-form-input-group>

                <label for="mdp">Mot de passe</label>
                <b-form-input-group class="mb-3">
                  <b-form-input
                    id="mdp"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Jane Doe"
                    name="mdp"
                    readonly
                  ></b-form-input>
                </b-form-input-group>
                <hr />
                <h3>Informations personnelles</h3>
                <label for="nom">Nom</label>
                <b-form-input-group class="mb-3">
                  <b-form-input
                    id="nom"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Jane Doe"
                    name="nom"
                    readonly
                  ></b-form-input>
                </b-form-input-group>
                <label for="prenom">Prenom</label>
                <b-form-input-group class="mb-3">
                  <b-form-input
                    id="prenom"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Jane Doe"
                    name="prenom"
                    readonly
                  ></b-form-input>
                </b-form-input-group>

                <label for="dateNais">Date de naissance</label>
                <b-form-datepicker
                  id="dateNais"
                  v-model="value"
                  class="mb-2"
                  name="dateNais"
                  disabled
                ></b-form-datepicker>
              </b-form>
            </div>
          </div>
        </div>

        <!-- <div class="col-md-6 p-3">
          <div v-show="status === 'client'">
            <div class="col-md-12 offset-sm-2 p-sm-5">
              <div class="mb-sm-5 text-center text-uppercase">
                <h1>Welcome cher client</h1>
              </div>
              <form
                @submit.prevent="submitForm"
                class="justify-content-center"
                action="/something"
                method="post"
              >
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    autocomplete="off"
                    id="email"
                    name="email"
                  />
                </div>
                <div class="form-group">
                  <label for="nom">Nom de la société</label>
                  <input
                    type="password"
                    class="form-control"
                    autocomplete="off"
                    id="nom"
                    name="nom"
                  />
                </div>
                <div class="form-group">
                  <button type="submit" tag="button" class="button btn-block">
                    Valider
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div v-show="status === 'etudiant'">
            <div class="col-md-12 offset-sm-2 p-sm-5">
              <div class="mb-sm-5 text-center text-uppercase">
                <h1>Welcome cher étudiant</h1>
              </div>
              <form
                @submit.prevent="submitForm"
                class="justify-content-center"
                action="/something"
                method="post"
              >
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    autocomplete="off"
                    id="email"
                    name="email"
                  />
                </div>
                <div class="form-group">
                  <label for="nom">Nom </label>
                  <input
                    type="password"
                    class="form-control"
                    autocomplete="off"
                    id="nom"
                    name="nom"
                  />
                </div>
                <div class="form-group">
                  <label for="nom">Prénom</label>
                  <input
                    type="password"
                    class="form-control"
                    autocomplete="off"
                    id="nom"
                    name="nom"
                  />
                </div>
                <div class="form-group">
                  <label for="nom">Date de naissance</label>
                  <input
                    type="date"
                    class="form-control"
                    autocomplete="off"
                    id="date_nais"
                    name="date_nais"
                    max="2002"
                  />
                </div>
                <b-form-group label="Sexe">
                  <b-form-radio-group
                    id="radio-group-sexe"
                    v-model="selected"
                    :options="options"
                    name="sexe"
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFirstProfile",
  data() {
    return {
      status: "etudiant",
    };
  },
  computed: {},
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
