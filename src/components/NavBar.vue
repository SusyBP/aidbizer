<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class=" ">
    <div>
    <a class="navbar-brand" href="/">
      <img src="/images/iconBEA.png" alt="Avatar Logo"> 
    </a>
  </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <div class="navbar-nav flex-navbar">
        
          <!-- <li><a :to="{ name: 'Dashboard' }" class="nav-item nav-link">Dashboard</a></li> -->
          <li><router-link :to="{ name: 'Dashboard' }" class="nav-item nav-link">Dashboard</router-link></li>
      <div>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Manage</a>
          <ul class="dropdown-menu"> 
            <li><router-link to="/bea-vue-vite/products/" class="dropdown-item" >Products</router-link></li>
            <!-- <li><a class="dropdown-item" href="/bea-vue-vite/products/">Products</a></li> -->
            <li><a class="dropdown-item" href="#">Inventory</a></li>
            <li><a class="dropdown-item" href="#">Sales</a></li>
            <li><a class="dropdown-item" href="#">Income</a></li>
            <li><a class="dropdown-item" href="#">Expenses</a></li>
          </ul>
        </li>
      </div>
    <div>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Reports</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Monthly Balance</a></li>
            <li><a class="dropdown-item" href="#">Other</a></li>
          </ul>
        </li>
      </div>
    <div>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Account</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Log out</a></li>
          </ul>
        </li>
      </div>
    </div>
    </div>
  </div>
</nav>
</template>

<script>


export default {
  name: "NavBar",
};
</script>
<style scope>
.flex-navbar{
@media (min-width:600px){
		display: flex;
		flex-direction: columns;
		/* flex: 1 1 0; */
		/* padding: 2rem; */
	}
}
</style>
