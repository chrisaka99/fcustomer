<template>
  <div
    class="nav-link dropdown-toggle"
    id="navbarDropdownMenuLink"
    role="button"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <img
      style="height: 40px;"
      src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
      class="rounded-circle img-fluid"
    />
    <span class="ml-2">Adon Patrick</span>
    <div
      class="dropdown-menu"
      id="dropdMenu"
      aria-labelledby="navbarDropdownMenuLink"
    >
      <a class="dropdown-item" id="edit" href="#">Modifier mon profil</a>
      <a class="dropdown-item" id="logout" href="#">Se deconnecter</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheActiveDropdown",
};
</script>

<style lang="css">
#dropdMenu {
  z-index: 999;
}
#edit:hover {
  background-color: rgb(180, 180, 180);
}

#logout {
  color: red;
}

#logout:hover {
  background-color: rgb(238, 94, 94);
  color: #fff;
}
</style>
