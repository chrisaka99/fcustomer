<template>
  <div class="row justify-content-center">
    <div class="col-11 bg-danger wrapper">
      <div class="row">
        <div class="col-2">
          <img
            style="height: 120px;"
            src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
            class="rounded-circle img-fluid"
          />
        </div>
        <div class="col-10">
          <form @submit.prevent="submitForm" action="/something" method="post">
            <!-- <div class="error">
                  Field A is required.
                </div> -->
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
</template>

<script>
export default { name: "TheProfileVue" };
</script>

<style lang="css" scoped></style>
