<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>        
        <h1>Catalogo de espacios</h1>
        <b-container>
          <b-button variant="outline-danger" :to="{ name: 'spaceDetails'}">Detalle de espacios</b-button>
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
            to: { name: 'rentSpace' }
          },
          {
            text: 'Catalogo de espacios',
            active: true
          }
        ]
      }
    }
  }
</script>

<style>

</style>