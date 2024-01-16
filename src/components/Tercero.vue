<template>
  <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>        
    </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            to: { name: 'inicio' }
          },
          {
            text: 'Main',
            to: { name: 'main' }
          },
          {
            text: 'RentSpace',
            to: { name: 'rentSpace' }
          },
          {
            text: 'Tercero',
            active: true
          }
        ]
      }
    }
  }
</script>

<style>

</style>