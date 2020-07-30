<template>
  <div class="wrapper">
    <div class="container-fluid">
      <nav id="sidebar" class="shadow-sm">
        <div id="sidebar-header">
          <h3>Header</h3>
        </div>
        <ul class="list-unstyled components">
          <p class="myHeader">Hey</p>
          <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
              ><font-awesome-icon :icon="['fas', 'home']" />
              <span class="ml-3">Accueil</span></a
            >
          </li>
          <li>
            <a href="#"
              ><font-awesome-icon :icon="['fas', 'smile-beam']" /><span
                class="ml-3"
                >Statisfaction</span
              ></a
            >
          </li>
          <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
              ><font-awesome-icon :icon="['fas', 'file-alt']" /><span
                class="ml-3"
                >Documentation</span
              ></a
            >
          </li>
          <li>
            <a href="#"
              ><font-awesome-icon :icon="['fas', 'question']" /><span
                class="ml-3"
                >Préoccupation</span
              ></a
            >
          </li>
          <li>
            <a href="#"
              ><font-awesome-icon :icon="['fas', 'lightbulb']" /><span
                class="ml-3"
                >Suggestions</span
              ></a
            >
          </li>
        </ul>
      </nav>

      <div id="content">
        <TheNavbar :connected="true" />
        <div class="container-fluid ">
          <!-- <div v-if="longtime"> -->
          <!-- <div class="row">
            <div class="col text-center my-5">
              <p class="display-4">
                Bonjour Mr Adon Patrick,
              </p>
              <p class="lead">bienvenue dans Feedback Customer</p>
            </div>
          </div> -->
          <!-- </div> -->
          <!-- <Menu /> -->
          <TheProfile />
          <!-- <div class="row align-self-center align-items-center">
            <div class="col-4 shadow-sm compo">Faire des suggestions</div>
            <div class="col-4 shadow-sm compo">
              Soumettre votre préoccupation
            </div>
          </div> -->
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
import TheProfile from "../components/TheProfile";
export default {
  name: "UserPage",
  components: {
    TheNavbar,
    Menu,
    TheProfile,
  },
  // data() {
  //   return {
  //     // longtime: {
  //     //   type: [Boolean],
  //     //   default: true,
  //     // },
  //   };
  // },
};
</script>

<style lang="css" scoped>
/* .compo {
  margin: 10px;
  padding: 10px;
  border: none;
  background-color: #fff;
  border-radius: 3px;
  color: black;
} */

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

#sidebar ul.components {
  padding: 20px 0;
}

#sidebar ul p {
  color: black;
  padding: 10px;
}

#sidebar ul li a {
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
}

a[data-toggle="collapse"] {
  position: relative;
}

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
