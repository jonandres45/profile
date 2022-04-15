<template>
    <v-container class="mt-5" fluid>
      <v-row class="mt-16" justify="center">        
        <v-col cols="12" sm="7" md="6" lg="3" align-self="center">
          <v-sheet
            elevation="10"            
            rounded="xl"
          >
        <v-sheet
          class="primary text-center"
          dark
          rounded="t-xl"
        >
          <h2>Skills</h2>
        </v-sheet>

        <div class="pa-4">
          <v-chip-group
            active-class="primary--text"
            column
          >
            <v-chip
              v-for="(skill, i) in skills" :key="i"
              outlined
              label
            >
              {{ skill.text }} <v-icon class="ml-1">{{skill.icon}}</v-icon>
            </v-chip>
          </v-chip-group>
        </div>
          </v-sheet>
        </v-col>
        <v-col 
          md="4"
        >
          <Skill/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Skill from './Animation/Skill.vue';

export default {
    name:'Skills',
    components:{
        Skill        
    },
    props:['skills']
}
</script>

<style>

</style>