<template>
  <div>
    <p>Salut l'admin {{ admin.admin_id }}</p>
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
  mounted() {
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
