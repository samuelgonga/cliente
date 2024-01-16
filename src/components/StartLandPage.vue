<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>          
        <h1>Inicio Landpage</h1>         
        <div class="mt-2">          
          <b-button variant="outline-success" :to="{ name: 'rentYouSpace'}">Renta tu espacio</b-button>  
        </div>             
        <div class="mt-2">
          <b-button variant="outline-danger" :to="{ name: 'rentSpace'}" >Rentar espacio</b-button>               
        </div> 
    </div>    
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'StartLandPage',
            active: true
          }
        ]
      }
    }
  }
</script>

<style>

</style>