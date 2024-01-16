<script setup>
</script>

<template>
  <div id="app">
    <header>
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item href="#">Inicio</b-nav-item>

            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Idioma" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Usuario" right>
              <b-dropdown-item href="#">Cuenta</b-dropdown-item>
              <b-dropdown-item href="#">Configuracion</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </header>

    <main>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <!-- aqui debe de ir el sidebar -->
          <div class="bg-dark col-auto col-md2 min-vh-100" >              
            <div class="bg-dark p-2">              
              <a class="d-flex text-decoration-none align-item-center text-white">
                <span>
                  SIDEBAR
                </span>                        
              </a>
              <b-nav-item>
                <b-link :to="{name:'inicio'}">
                  Opcion1
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{name:'main'}">
                  Opcion2
                </b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{name:'tercero'}">
                  Opcion3
                </b-link>
              </b-nav-item>
              
              <!-- <ul class="nav nav-pills flex-column mt-4">
                <li class="nav-item">
                  <a href="" class="nav-link text-white" aria-current="page">sidebarN</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link text-white" aria-current="page">sidebarX</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link text-white" aria-current="page">sidebarC</a>                
                </li>
              </ul> -->
            </div>
        </div>

          <!-- BODY -->
          <div class="col-10">
            <b-col>
              <router-view></router-view>
            </b-col>   
          </div>
        </div>
      </div>
      
      <TheWelcome />
    </main>

    

  </div>
</template>

<style scoped>
</style>
