<template>
  <div>
    <div class="row align-self-center align-items-center">
      <div class="col-md-12 col-sm-12 mb-3">
        <div class="text-center shadow-sm p-2 bg-white">
          <img
            class="img-fluid"
            width="200px"
            src="../assets/user_interface.svg"
          />
          <div class="col">
            <p class="sub">Enquête de statisfaction</p>
          </div>
          <div class="text-black-50">
            Donnez votre avis sur nos services.
          </div>
          <div class="col">
            <button class="boutton">Aller</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row align-self-center align-items-center my-3">
      <div class="col-md-6 col-sm-12 mb-3">
        <div class="text-center shadow-sm p-2 bg-white">
          <img
            class="img-fluid"
            width="200px"
            src="../assets/question_isometric.svg"
          />
          <div class="col">
            <p class="sub">Préoccupation</p>
          </div>
          <div class="text-black-50">
            Vous rencontrez des problèmes ? Faites nous en part.
          </div>
          <div class="col"><button class="boutton">Aller</button></div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="text-center shadow-sm p-2 bg-white">
          <img
            class="img-fluid"
            width="200px"
            src="../assets/receptionist_isometric.svg"
          />
          <div class="col">
            <p class="sub">Suggestions</p>
          </div>
          <div class="text-black-50">
            Vous avez des suggestions ? Veuillez nous les soumettre.
          </div>
          <div class="col"><button class="boutton">Aller</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Menu",
  data() {
    return {
      token: "",
      user: "",
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
    if (localStorage.getItem("token") === null) {
      this.$router.push("/connexion");
    } else {
      this.token = localStorage.getItem("token");
    }
  },
  methods: {},
};
</script>

<style lang="css" scope>
.sub {
  font-weight: 500;
  font-size: 20px;
}
.boutton {
  margin: 15px 0px;
  padding: 10px 30px;
  color: #fff;
  border: none;
  background: #06f;
  border-radius: 2px;
}
</style>
