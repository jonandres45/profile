<template>
  <v-app>
    <v-app-bar app dark inverted-scroll flat color="caca">
      <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-toolbar-title><v-icon>mdi-account-circle</v-icon> Andrés Ortiz</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-2" outlined>
        My system
      </v-btn>
      <v-btn class="mr-2" outlined>
        technology
      </v-btn>
      <v-btn class="mr-2" outlined>
        others
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
