<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/images/iconBEA.png" alt="Avatar Logo"> 
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        
          <!-- <li><a :to="{ name: 'Dashboard' }" class="nav-item nav-link">Dashboard</a></li> -->
          <li><router-link :to="{ name: 'Dashboard' }" class="nav-item nav-link">Dashboard</router-link></li>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Manage</a>
          <ul class="dropdown-menu"> 
            <!-- <li><router-link :to="{ name: 'Products' }" class="dropdown-item" target="_blank">Products</router-link></li> -->
            <li><a class="dropdown-item" href="/bea-vue-vite/products/">Products</a></li>
            <li><a class="dropdown-item" href="#">Inventory</a></li>
            <li><a class="dropdown-item" href="#">Sales</a></li>
            <li><a class="dropdown-item" href="#">Income</a></li>
            <li><a class="dropdown-item" href="#">Expenses</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Reports</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Monthly Balance</a></li>
            <li><a class="dropdown-item" href="#">Other</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Account</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Log out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>


export default {
  name: "NavBar",
};
</script>
