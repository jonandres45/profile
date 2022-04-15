<template>
  <v-app>
      <v-app-bar dense color="caca">
<!--    <v-app-bar app dark inverted-scroll flat color="caca">-->
      <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-toolbar-title><v-icon>mdi-account-circle</v-icon> Andrés Ortiz</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
        class="mr-2" 
        outlined
        @click="$vuetify.goTo('#proyects')"
      >
        Proyects
      </v-btn>
      <v-btn 
        class="mr-2" 
        outlined
        @click="$vuetify.goTo('#experience')"
      >
        Experience
      </v-btn>
      <v-btn 
        class="mr-2" 
        outlined
        @click="$vuetify.goTo('#contact')"
      >
        Contact
      </v-btn>
    </v-app-bar>

    <v-main>
      <Index/>
    </v-main>
  </v-app>
</template>

<script>
import Index from './components/Index.vue';

export default {
  name: 'App',

  components: {
    Index
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anek+Gurmukhi:wght@200&display=swap');
*{
font-family: 'Anek Gurmukhi', sans-serif;

}
body::-webkit-scrollbar {
    width: 10px;               /* width of the entire scrollbar */
}
  
body::-webkit-scrollbar-track {
    background: #000000;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
    background-color: rgb(59, 59, 59);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid rgb(0, 0, 0);  /* creates padding around scroll thumb */
}
</style>