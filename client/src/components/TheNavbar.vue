<template>
  <nav class="navbar fixed navbar-expand-lg navbar-light bg-light shadow-none">
    <div v-if="connected" class="my-md-0 mr-md-3">
      <button type="button" id="sidebarCollapse" class="btn">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>

    <img
      src="../assets/logo1.png"
      class="my-0 mr-md-auto img-fluid"
      style="height: 50px"
      alt="Logo"
    />
    <div v-if="connected" class="my-md-0 mr-md-3">
      <TheActiveDropdown />
    </div>
    <div v-else>
      <router-link class="p-2 text-dark" to="#">A propos de nous</router-link>
    </div>
  </nav>
</template>

<script>
import TheActiveDropdown from "../components/TheActiveDropdown";
export default {
  name: "TheNavbar",
  components: {
    TheActiveDropdown,
  },
  props: {
    connected: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="css" scoped>
nav {
  background-color: #fff !important;
}

nav .text-dark:hover {
  padding-bottom: 20px !important;
  text-decoration-color: #348def;
  color: #348def !important;
}
</style>
