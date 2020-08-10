<template>
  <div id="app">
    <Nav />
    <div id="cont-contenido">
      <Contenido />
      <div id="cont-view">
        <router-view />
      </div>
      <div id="footer">
        Matías Pineda - 2020
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from "@/components/Nav";
  import Contenido from "@/components/Contenido";
  import FarmaciaTurno from "@/views/FarmaciaTurno";

  export default {
    name: 'app',
    components: {
      Contenido,
      Nav,
    },
    views: {
      FarmaciaTurno
    }
  }
</script>

<style lang="scss">
  @import 'assets/css/app';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
