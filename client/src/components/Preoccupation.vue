<template>
  <div>
    <h1 class="mb-5">Poser des préoccupations</h1>
    <div class="col-md-8 col-sm-12 m-3 mx-auto">
      <div class="text-center shadow-sm p-2 bg-white p-5">
        <form action="/someW" @submit.prevent>
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <div class="col my-4">
            <p class="sub">Saisissez votre préoccupation</p>
          </div>
          <div>
            <b-form-textarea
              id="textarea-rows"
              placeholder="Message ici"
              rows="8"
            ></b-form-textarea>
          </div>
          <div class="col"><button class="boutton">Soumettre</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preoccupation",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Choisir une option" },
        { value: "it", text: "Departement IT" },
        { value: "com", text: "Service Commercial" },
        { value: "ens", text: "Enseignement" },
      ],
    };
  },
};
</script>
