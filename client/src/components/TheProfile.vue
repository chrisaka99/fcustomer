<template>
  <div class="row justify-content-center">
    <div class="col-11 bg-danger wrapper">
      <div class="row">
        <div class="col-4 p-2 bg-white">
          <div class="radio-buttons">
            <label class="custom-radio">
              <input type="radio" name="radio" />
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
              <input type="radio" name="radio" />
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
        <div class="col-md-8 p-3">
          <form
            @submit.prevent="submitForm"
            class="form-inline "
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
              <label for="nom">Nom</label>
              <input
                type="password"
                class="form-control"
                autocomplete="off"
                id="nom"
                name="nom"
              />
            </div>
            <!-- <div class="form-row">
              <div class="col">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" />
              </div>
              <div class="col">
                <label for="nom">Prenom</label>
                <input type="text" class="form-control" id="prenom" />
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" />
              </div>
              <div class="col-md-6">
                <label for="prenom">Prenom</label>
                <input type="text" class="form-control" id="prenom" />
              </div>
            </div> -->
          </form>

          <form
            @submit.prevent="submitForm"
            class="form-inline "
            action="/something"
            method="post"
          >
            <div class="form-group">
              <label for="email">Matricule</label>
              <input
                type="email"
                class="form-control"
                autocomplete="off"
                id="email"
                name="email"
              />
            </div>
            <div class="form-group">
              <label for="nom">Nom</label>
              <input
                type="password"
                class="form-control"
                autocomplete="off"
                id="nom"
                name="nom"
              />
            </div>
            <div class="form-group">
              <label for="nom">Prenom</label>
              <input
                type="password"
                class="form-control"
                autocomplete="off"
                id="nom"
                name="nom"
              />
            </div>
            <div class="form-group">
              <label for="nom">Date Naissance</label>
              <input
                type="password"
                class="form-control"
                autocomplete="off"
                id="nom"
                name="nom"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheProfileVue",
  data() {
    return {
      selected: "A",
      options: [
        { item: "client", name: "Client" },
        { item: "etudiant", name: "Etudiant" },
      ],
    };
  },
  computed: {
    isClient() {
      return this.current == 1;
    },
    isEtudiant() {
      return this.current == 2;
    },
  },
};
</script>

<style lang="css" scoped>
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
