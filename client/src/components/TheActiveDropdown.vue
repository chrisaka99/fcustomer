<template>
  <div>
    <b-dropdown variant="text" toggle-class="text-decoration-none">
      <template v-slot:button-content>
        <b-avatar text="JD" fluid size="3rem"></b-avatar
        ><span class="ml-2">Adon Patrick</span>
      </template>
      <b-dropdown-item to="/profil">Profil</b-dropdown-item>
      <b-dropdown-item variant="danger" to="/">Se deconnecter</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "TheActiveDropdown",
};
</script>
