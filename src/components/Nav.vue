<template>
  <div id="nav">
    <b-navbar toggleable="lg">
      <b-navbar-brand>
        <router-link class="nav-link" to="/">
          Farmacias de Turno
        </router-link>
      </b-navbar-brand>

    </b-navbar>
  </div>
</template>

<script>

  export default {
    name: "Nav",
    props: {
      msg: String
    }
  }
</script>

<style>

</style>