<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <div class="container">
      <!-- Brand -->
      <a class="navbar-brand" href="#">BEA</a>

      <!-- Toggler/collapsibe Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Inventory</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Expenses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Income</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Reports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Accounting</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "NavBar",
};
</script>
