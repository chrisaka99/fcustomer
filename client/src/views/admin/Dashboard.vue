<template>
  <div>
    hey
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      admin: "",
      tokenAdmin: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/admin");
      console.log("logged out!");
    },
  },
  mounted() {
    const plugin1 = document.createElement("script");
    plugin1.setAttribute("src", "./jquery.min.js");
    plugin1.async = true;
    document.head.appendChild(plugin1);

    const plugin3 = document.createElement("script");
    plugin3.setAttribute("src", "./bootstrap.bundle.min.js");
    plugin3.async = true;
    document.head.appendChild(plugin3);

    const plugin2 = document.createElement("script");
    plugin2.setAttribute("src", "./jquery.easing.min.js");
    plugin2.async = true;
    document.head.appendChild(plugin2);

    const plugin = document.createElement("script");
    plugin.setAttribute("src", "./sb-admin-2.min.js");
    plugin.async = true;
    document.head.appendChild(plugin);

    // console.log(localStorage.getItem("tokenAdmin"));
    axios
      .get("http://localhost:3000/api/admin", {
        headers: { token: localStorage.getItem("tokenAdmin") },
      })
      .then((res) => {
        console.log(res.data);
        this.admin = res.data;
        console.log(res.data.msg);
      })
      .catch((error) => console.log(error));
  },
  created() {
    if (
      localStorage.getItem("tokenAdmin") === null ||
      localStorage.getItem("tokenAdmin") === undefined
    ) {
      this.$router.push("/admin");
    } else {
      this.tokenAdmin = localStorage.getItem("tokenAdmin");
    }
  },
};
</script>

<style scoped></style>
