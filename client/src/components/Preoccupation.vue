<template>
  <div>
    <h1 class="mb-5">Poser des préoccupations</h1>
    <div class="col-md-8 col-sm-12 m-3 mx-auto">
      <div class="text-center shadow-sm bg-white p-5">
        <form @submit.prevent="submit">
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <div class="col my-4">
            <p class="sub">Saisissez votre préoccupation</p>
          </div>
          <div>
            <b-form-textarea
              id="textarea-rows"
              placeholder="Message ici"
              rows="8"
              v-model="text"
            ></b-form-textarea>
          </div>
          <div class="col">
            <button type="submit" class="boutton">Soumettre</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Preoccupation",
  data() {
    return {
      token: "",
      user: "",
      text: "",
      selected: null,
      options: [
        { value: null, text: "Choisir une option" },
        { value: "it", text: "Departement IT" },
        { value: "commercial", text: "Service Commercial" },
        { value: "enseignement", text: "Enseignement" },
      ],
    };
  },
  methods: {
    async submit() {
      try {
        let preo = {
          user_id: this.user.user_id,
          service: this.selected,
          text: this.text,
        };
        await axios
          .post("http://localhost:3000/api/preoccupation", preo)
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error));
      } catch (err) {
        console.log(err);
      }

      this.text = "";
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.user = res.data;
        console.log(this.user);
      })
      .catch((error) => console.log(error));
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/connexion");
    } else {
      this.token = localStorage.getItem("token");
    }
  },
};
</script>
