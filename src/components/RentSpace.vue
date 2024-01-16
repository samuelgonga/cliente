<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>        
        <h1>Rentar espacio</h1>
        <b-container>
          <b-button variant="outline-danger" :to="{ name: 'spaceCatalog'}">Catalogo de espacios</b-button>
        </b-container>
        
    </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio LandPage',
            to: { name: 'startLandPage' }
          },
          {
            text: 'rentar espacio',
            active: true
          }
        ]
      }
    }
  }
</script>

<style>

</style>