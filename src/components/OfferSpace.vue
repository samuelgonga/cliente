<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>        
        <h1>Ofertar Espacio</h1>
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
            text: 'Rentar tu espacio',
            to: { name: 'rentYouSpace' }
          },          
          {
            text: 'Informacion de espacio',
            to: { name: 'spaceInformation' }
          },
          {
            text: 'Ofertar Espacio',
            active: true
          }
        ]
      }
    }
  }
</script>

<style>

</style>