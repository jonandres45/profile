<template>
  <v-carousel height="700">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
        <v-container
            class="my-system"
            fluid
        >
            <v-row justify="center" style="height:100%">
                <v-col cols="12" sm="7" md="5" lg="5" align-self="center">
                    <v-card class="my-system-card" elevation="0">
                    <v-card-title>
                        {{item.title}}
                    </v-card-title>
                    <v-card-text class="text-lg-h6 text-sm-body-2" v-html="item.content">
                    </v-card-text>
                    <v-card-actions v-if="item.link !== ''">
                        <v-btn text>
                        visit now
                        </v-btn>
                    </v-card-actions>
                    </v-card>            
                </v-col>
                <v-col cols="12" sm="5" md="4" lg="6" v-if="item.video !== ''">
                  <video muted autoPlay loop class="video-carousel">
                    <source :src='item.video' type="video/mp4"/>
                  </video>
                </v-col>
                <v-col cols="12" sm="5" md="4" lg="6" class="text-center" align-self="center" v-else>
                    <v-img :src="item.src" class="image-carousel mx-auto" width="100%"></v-img>
                    <h3>{{item.titleImage}}</h3>
                </v-col>
            </v-row>
        </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

export default {
    
    data: ()=>({
        items: [
          {
            src: 'static/login.png',
            title: 'My first program',
            content: `
                      <p>Developed in collaboration with informatica y distribuidora capricornio S.A. de C.V. and my friend developer Christopher</p>
                      <p>Using laravel as backend and vuejs as frontend.</p>
                      <p>Calculate the I.S.R. In the sale of a property, it is developed especially for the notary public all across Mexico.</p>
                      `,
            link: 'https://app.caprienlinea.com',
            titleImage:'Caprie en línea',
            video: 'static/videos/caprienlinea.mp4',
          },
          {
            src: 'static/login.png',
            title:'Rangeles music',
            content:`
            <p>Web designed and developed for Dj / Music Producer & Creative Ricardo angeles</p>
            <p>Using React JS in the FrondEnd</p>
            <p>Visid the page, probably like their music :)</p>
            `,
            link: 'https://rangelesmusic.com',
            titleImage:'Rangeles Music',
            video: 'static/videos/rangeles.mp4',
          },
          {
            src: 'static/ia.jpg',
            title:'Cognitive service IA (Azure)',
            content:`
            <p>Try some artificial intelligence, It is a website where you can upload the image you want</p>
            <p>The IA answer you with whats is in your image (Magic !)</p>
            <p>Developed with VueJS and Azure Cognitive Services.</p>
            `,
            link: 'https://ia.andresjs.com',
            titleImage:'',
            video: '',
          },
          {
            src: 'static/papeleria.jpg',
            title:'Other webs',
            content:`
            <p>I love to design and create any type of pages</p>
            <p>This is a litle example, a stationery for notaries public <3</p>
            `,
            link: 'https://ia.andresjs.com',
            titleImage:'',
            video: '',
          },
        ],
    }),

}
</script>

<style scoped>
.my-system{
  background: #27496D;
  height: 100%;
}

.my-system-card{
    background: #27496D;
}
.image-carousel{

}
.video-carousel{
  height: 100%;
  width: 100%;
}
</style>
