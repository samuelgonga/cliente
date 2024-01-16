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
            text: 'Tercero',
            to: { name: 'tercero' }
          },
          {
            text: 'Main',
            to: { name: 'main' }
          },
          {
            text: 'Inicio',
            //atributo que indica al usuario en donde se encuentra actualmente
            active: true
          }
        ]
      }
    }
  }
</script>

<style>

</style>