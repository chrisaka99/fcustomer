<template>
  <div class="wrapper">
    <div class="container-fluid">
      <nav id="sidebar" class="shadow-sm">
        <div id="sidebar-header">
          <h3>Header</h3>
        </div>
        <ul class="list-unstyled components">
          <p class="myHeader">Hey</p>
          <ListItems url="/menu" link="menu" iIcon="home" iText="Acceuil" />
          <ListItems
            url="/rating"
            link="rating"
            iIcon="smile-beam"
            iText="Statisfaction"
          />
          <ListItems
            url="/preoccupation"
            link="preoccupation"
            iIcon="question"
            iText="Préoccupation"
          />
          <ListItems
            url="/suggestions"
            link="suggestions"
            iIcon="lightbulb"
            iText="Suggestions"
          />
        </ul>
      </nav>

      <div id="content">
        <TheNavbar :connected="true" />
        <div class="container-fluid ">
          <!-- <TheFirstProfile /> -->
          <router-view></router-view>
          <!-- <RatingPage /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script
  src="https://cdn.jsdelivr.net/npm/vivid-icons@1.0.10"
  type="text/javascript"
></script>

<script>
import TheNavbar from "../components/TheNavbar";
import Menu from "../components/Menu";
import Profile from "../components/Profile";
import RatingPage from "./RatingPage";
import ListItems from "../components/ListItems";
import axios from "axios";

export default {
  name: "UserPage",
  components: {
    TheNavbar,
    Menu,
    Profile,
    RatingPage,
    ListItems,
  },
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
      .catch((err) => console.log(err));
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/connexion");
    } else {
      this.token = localStorage.getItem("token");
      this.$router.push("/menu");
    }
  },
};
</script>

<style lang="css" scoped>
body {
  /* font-family: "Poppins", sans-serif; */
  background: #fafafa;
}
.wrapper {
  display: flex;
  width: 100%;
}
a,
a:hover,
a:focus {
  color: black;
  text-decoration: none;
  transition: all 0.3s;
}
.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

#sidebar {
  width: 215px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: #fff;
  color: black;
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -215px;
}

#sidebar-header {
  color: #fff;
}

.myHeader {
  color: black;
}
/* #sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
} */

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386d5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: calc(100% - 215px);
  margin-left: 0;
  padding: 2px;
  min-height: 100vh;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f6f7fb;
}

#content.active {
  width: 100%;
}
#content.active {
  width: 100%;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -215px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
  }
  #content.active {
    width: calc(100% - 215px);
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>
