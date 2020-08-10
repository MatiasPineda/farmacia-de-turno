<template>
  <div class="cont-view">
    <div>
      <b-form @submit="onSubmit">
        <b-form-select v-model="selected.region" @change="resetProvincia" class="location-select">
          <option value="" disabled>Selecciona Región</option>
          <option v-for="(r, index) in regiones" :value="r" :key="index">{{ r.name }}</option>
        </b-form-select>

        <b-form-select v-model="selected.provincia" :disabled="!selected.region" @change="resetComuna" class="location-select">
          <option value="" disabled>Selecciona Provincia</option>
          <option v-for="(p, index) in selected.region.provincias" :value="p" :key="index">{{ p.name }}</option>
        </b-form-select>

        <b-form-select v-model="selected.comuna" :disabled="!selected.provincia" class="location-select">
          <option value="" disabled>Selecciona Comuna</option>
          <option v-for="(c, index) in selected.provincia.comunas" :value="c" :key="index">{{ c.name }}</option>
        </b-form-select>

        <b-button type="submit" block variant="success" :disabled="!selected.comuna" class="location-btn">Buscar</b-button>
      </b-form>
    </div>

    <div>
        <div v-if="showInfo == true" class="cards-group">
          <b-card
             v-for="farm in filteredFarmacias" :key="farm.id"
             :title="farm.nombre"
             :sub-title="'Direccion: ' + farm.direccion"
             :footer="stringHorario(formatDate(farm.apertura), formatDate(farm.cierre))"
             class="card-container"
          >
            <p class="card-text">
              Contacto: {{farm.telefono}}
            </p>

            <b-button
              v-if="farm.lat != null"
              :href="'https://www.google.cl/maps/search/' + farm.lat + ',' + farm.lng"
              target="_blank"
              variant="outline-success">
              Google Maps
            </b-button>

            <b-button
              v-else
              :href="'https://www.google.cl/maps/search/' + farm.nombre.replace(' ','+')"
              target="_blank"
              variant="outline-success">
              Google Maps
            </b-button>
          </b-card>
        </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: "FarmaciaTurno",
    data() {
      return {
        farmacias: [],
        filteredFarmacias: [],

        selected : {
          region: '',
          provincia: '',
          comuna: ''
        },

        showInfo : false,

        regiones: [],
      }
    },
    methods: {
      getFarmacias () {
        const path = 'http://farmacias-de-turno.herokuapp.com/api/v1.0/farmaciasturno/'
        axios.get(path).then((response)=>{
          this.farmacias = response.data
        })
          .catch((error)=>{
            console.log(error)
          })
      },
      getRegiones () {
        const path = 'http://farmacias-de-turno.herokuapp.com/api/v1.0/localidades'
        axios.get(path).then((response)=>{
          this.regiones = response.data
        })
          .catch((error)=>{
            console.log(error)
          })
      },
      resetProvincia () {
        this.selected.provincia = ''
        this.selected.comuna = ''
        this.showInfo = false
      },
      resetComuna () {
        this.selected.comuna = ''
        this.showInfo = false
      },
      onSubmit(evt) {
        evt.preventDefault()
        this.filteredFarmacias = this.farmacias.filter( element => element.comuna === this.selected.comuna.number)
        // alert(JSON.stringify(this.selected.comuna.number))
        if(this.selected.comuna != [] && this.filteredFarmacias.length >0){this.showInfo = true}
      },
      formatDate(dateString) {
        const year = dateString.substr(0, 4);
        const month = dateString.substr(5,2);
        const day = dateString.substr(8,2);
        const hora = dateString.substr(11,5);
        let ampm = ""
        if(hora.substr(0,2)<"12"){ampm = " AM"} else {ampm = " PM"}
        return [day +'/' + month + '/' + year, hora + ampm];
      },
      stringHorario(apertura, cierre) {
        return "" + apertura[0] + " - Turno desde " + apertura[1] + " hasta las " + cierre[1] + " de " + cierre[0]
      }
    },
    created(){
      this.getFarmacias()
      this.getRegiones()
    }
  }
</script>

<style scoped>

</style>