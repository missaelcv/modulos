<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item,index) in tareasState" :key="index">{{item}}</h2>
    <h3>{{contador}}</h3>
    <button @click="aumetarContador(1)">+</button>
     <h3>{{titulo}}</h3>

  </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState('tareas',['tareasState']),
    ...mapState(['titulo']),
    ...mapState('contador',['contador'])
  },
  ...mapMutations('contador',['aumetarContador'])
}

</script>