<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container> 
        <h1>Detalles de espacios</h1>
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
            to: { name: 'rentSpace' }
          },
          {
            text: 'Destalles de espacios',
            active: true
          }
        ]
      }
    }
  }
</script>

<style>

</style>