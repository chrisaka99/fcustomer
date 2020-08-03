<template>
  <li :class="[currentPage.includes(link) ? activeClass : '']">
    <b-link :to="url" data-toggle="collapse" aria-expanded="false"
      ><font-awesome-icon :icon="['fas', iIcon]" />
      <span class="ml-3">{{ iText }}</span></b-link
    >
  </li>
</template>

<script>
export default {
  name: "ListItems",
  props: {
    url: String,
    link: String,
    iIcon: String,
    iText: String,
  },
  data() {
    return {
      activeClass: "active",
    };
  },
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="css">
#sidebar ul.components {
  padding: 20px 0;
}

#sidebar ul p {
  color: black;
  padding: 10px;
}

#sidebar ul li a {
  text-decoration: none;
  margin: 20px;
  padding: 10px;
  font-size: 1em;
  display: block;
  color: #646369;
}

#sidebar ul li a:hover {
  color: #06f;
  background: #fff;
  background-color: #c4dafb;
  border-radius: 5px;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #06f;
  background: #c4dafb;
  border-radius: 5px;
  transition: all 0.25s;
}

a[data-toggle="collapse"] {
  position: relative;
}
</style>
