<template>
        <v-container>
      <v-row class="justify-center">              
          <v-col class="text-center" cols="12">
              <h1>{{titleEducation}}</h1>
              <h2>{{university}}</h2>
              <h3>Ing. En sistemas computaciones / Computer systems engineer</h3>
          </v-col>
          <v-col cols="6" md="3" lg="3" class="mt-5 mb-15 scrollflow -slide-right -opacity">
            <v-img
              src="static/pictures/sc.png"
              min-height = "200"
              min-width = "200"
              max-height = "200"
              max-width = "200"
              style="margin:0 auto"
              data-aos="fade-up"
            >
              </v-img>
          </v-col>
          <v-col cols="6" md="3" lg="3" class="mt-5 mb-15">
              <v-img
              src="static/pictures/ipn.png"
              min-height = "200"
              min-width = "200"
              max-height = "200"
              max-width = "200"
              style="margin:0 auto"
              data-aos="fade-up"
              >
              </v-img>
          </v-col>
      </v-row>
      <v-row class="mt-5 text-center" justify="center">
          <v-col cols="12 mt-15">
              <h2>{{titleExperience}}</h2>
          </v-col>
          <v-col cols="12" class="pt-15" md="4" v-for="(experience, i) in experiences" :key="i" >
              <img 
                :src="'static/pictures/'+experience.link+'.png'" 
                :alt="experience.link" 
                class=" images scrollflow" 
                data-aos="zoom-in-up"
            >
              <h2 
                class="pt-15 animation-floating"
                data-aos="zoom-in-up"
                >{{experience.link}}</h2>
          </v-col>
      </v-row>
    </v-container>
</template>


<script>

export default{
    props: ['titleEducation', 'university', 'titleExperience'],
    data: ()=>({
        experiences:[
            {link:'Laravel'},
            {link:'Vue'},
            {link:'React'},
            {link:'Bootstrap'},
            {link:'Vuetify'},
            {link:'MUI'},            
            {link:'MySQL'},
            {link:'mongodb'},            
            {link:'Git'},
            {link:'jQuery'},
            {link:'Asynchronous Requests'},
            {link:'node'},
        ],
    })
}

</script>

<style scoped>
.images{
    height: 200px;
    max-width: 320px;
    cursor: pointer;
    transition: .5s;
}

/*SE PUEDE*/

@keyframes myAnim {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }

  100% {
    transform: translate(0);
  }
}

</style>