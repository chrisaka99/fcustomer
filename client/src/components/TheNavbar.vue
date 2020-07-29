<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center p-1 px-md-4 mb-1 bg-white border-bottom"
    id="nav"
  >
    <img
      src="../assets/logo1.png"
      class="my-0 mr-md-auto img-fluid"
      style="max-height: 50px"
      alt="Logo"
    />
    <!-- <h5 class="">Company name</h5> -->
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link class="p-2 text-dark" to="#">A propos de nous</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style lang="css" scoped>
#nav {
  border-bottom: 1px solid #fff !important;
}

nav .text-dark:hover {
  padding-bottom: 20px !important;
  text-decoration-color: #348def;
  color: #348def !important;
}
</style>
