<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>       
        <h1>Informacion de espacio</h1>
        <b-container>
          <b-button variant="outline-success" :to="{ name: 'offerSpace'}">Ofertar espacio</b-button>
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
            text: 'Rentar tu espacio',
            to: { name: 'rentYouSpace' }
          },
          {
            text: 'Informacion de espacio',
            active: true
          }
        ]
      }
    }
  }
</script>

<style>

</style>