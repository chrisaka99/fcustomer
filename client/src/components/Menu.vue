<template>
  <div>
    <div class="row align-self-center align-items-center">
      <div class="col-md-6 col-sm-12 mb-3">
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
      <div class="col-md-6 col-sm-12">
        <div class="text-center shadow-sm p-2 bg-white">
          <img
            class="img-fluid"
            width="200px"
            src="../assets/files_and_folder_isometric.svg"
          />
          <div class="row">
            <div class="col">
              <p class="sub">Documentation</p>
            </div>
          </div>

          <div class="text-black-50">
            Accedez aux fichiers qui ont été partagés.
          </div>
          <div class="col"><button class="boutton">Aller</button></div>
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
export default {
  name: "Menu",
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
