<template>
<div class="carouselContainer" id="proyects">
  <v-carousel height="100vh">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :class="item.color"
    >
        <v-container
            class="my-system"
            fluid
        >
            <v-row justify="center" style="height:100%">
                <v-col cols="12" sm="7" md="5" lg="5" align-self="center">
                    <v-card color="transparent" elevation="0">
                    <v-card-title>
                        {{item.title}}
                    </v-card-title>
                    <v-card-text class="text-lg-h6 text-sm-body-2" v-html="item.content">
                    </v-card-text>
                    <v-card-actions v-if="item.link !== ''">
                        <v-btn text>
                        visit now
                        </v-btn>
                        <v-btn icon :href="item.refGithub">
                          <v-icon>
                            mdi-github
                          </v-icon>
                        </v-btn>
                    </v-card-actions>
                    </v-card>            
                </v-col>
                <v-col cols="12" sm="5" md="4" lg="6" v-if="item.video !== ''">
                  <video muted autoPlay loop controls class="video-carousel" v-if="browser === 'Safari'">
                    <source :src='item.video' type="video/mp4"/>
                    Video no soportado
                  </video>
                  <video muted autoPlay loop class="video-carousel" v-else>
                    <source :src='item.video' type="video/mp4"/>
                    Video no soportado
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
</div>
</template>

<script>

export default {
    props:['toggleLanguage'],
    data: ()=>({
        items:[],
        browser: '',
        itemsEnglish: [          
          {
            src: 'static/login.png',
            title: 'My first program',
            content: `
                      <p>Developed in collaboration with informatica y distribuidora capricornio S.A. de C.V. and my friend developer Christopher</p>
                      <p>Using laravel as backend and VueJS as frontend.</p>
                      <p>Calculate the I.S.R. In the sale of a property, it is developed especially for the notary public all across Mexico.</p>
                      `,
            link: 'https://app.caprienlinea.com',
            titleImage:'Caprie en línea',
            video: 'static/videos/caprienlinea.mp4',
            refGithub: 'https://github.com/jonandres45',
            color:'capriColor'
          },
          {
            src: 'static/login.png',
            title:'Rangeles music',
            content:`
                    <p>Web designed and developed for Dj / Music Producer & Creative Ricardo Angeles</p>
                    <p>Using React JS in the FrondEnd</p>
                    <p>You should visit the page, you probably like his music :)</p>
            `,
            link: 'https://rangelesmusic.com',
            titleImage:'Rangeles Music',
            video: 'static/videos/rangeles.mp4',
            refGithub:'https://github.com/jonandres45/rangelesmusic',
            color:'richiColor',
          },
          {
            src: 'static/ia.jpg',
            title:'Cognitive service AI (Azure)',
            content:`
                    <p>Try some artificial intelligence, It is a website where you can upload the image you want</p>
                    <p>The AI answers you with what's in your image (Magic !)</p>
                    <p>Developed with VueJS and Azure Cognitive Services.</p>
            `,
            link: 'https://ia.andresjs.com',
            titleImage:'',
            video: '',
            refGithub:'https://github.com/jonandres45/recognition_server',
            color:'AIColor',
          },
          {
            src: 'static/papeleria.jpg',
            title:'Other webs',
            content:`
                    <p>I love to design and create any type of pages</p>
                    <p>This is a little example, a stationery for public notaries <3</p>
            `,
            link: 'https://ia.andresjs.com',
            titleImage:'',
            video: '',
            refGithub:'https://github.com/jonandres45/papeleria',
            color:"papeleriaColor",
            
          },
        ],
        itemsSpanish:[
          {
            src: 'static/login.png',
            title: 'Mi primer programa',
            content: `                      
                      <p>Desarrollado en colaboracion con informatica y distribuidora capricornio S.A. de C.V. y mi amigo Christopher</p>
                      <p>Usando Laravel como BackEnd y VueJS como FrondEnd</p>
                      <p>Calcula el I.S.R. por enajenación y adquisición de bienes inmuebles, desarrollado especificamente para notarías públicas en todo México</p>
                      `,
            link: 'https://app.caprienlinea.com',
            titleImage:'Caprie en línea',
            video: 'static/videos/caprienlinea.mp4',
            refGithub: 'https://github.com/jonandres45',
            color:'capriColor'
          },
          {
            src: 'static/login.png',
            title:'Rangeles music',
            content:`
                    <p>Página web diseñado y desarrollada para Dj / Music Producer & Creative Ricardo Angeles</p>
                    <p>Usando React JS como FrondEnd</p>
                    <p>Visita el sitio, probablemente te guste su música, es muy bueno ! :)</p>
            `,
            link: 'https://rangelesmusic.com',
            titleImage:'Rangeles Music',
            video: 'static/videos/rangeles.mp4',
            refGithub:'https://github.com/jonandres45/rangelesmusic',
            color:'richiColor',
          },
          {
            src: 'static/ia.jpg',
            title:'Cognitive service IA (Azure)',
            content:`
                    <p>Prueba algo de intelgiencia artificial, puedes subir la imagen que desees</p>
                    <p>La IA te respondera con lo que hay en la imagen (¡Magico!)</p>
                    <p>Desarrollado con VueJS y Azure Cognitive Services.</p>
            `,
            link: 'https://ia.andresjs.com',
            titleImage:'',
            video: '',
            refGithub:'https://github.com/jonandres45/recognition_server',
            color:'AIColor',
          },
          {
            src: 'static/papeleria.jpg',
            title:'¡ y más páginas !',
            content:`
                    <p>Me encanta desarrollar y crear todo tipo de páginas web</p>
                    <p>Este es un pequeño ejemplo más, una papelería pára el notariado público</p>
            `,
            link: 'https://ia.andresjs.com',
            titleImage:'',
            video: '',
            refGithub:'https://github.com/jonandres45/papeleria',
            color:"papeleriaColor",
          },
        ]
    }),

    mounted(){
      this.english();
      const browser = this.getBrowserInfo();
      this.browser = browser.substr(0, 6);
    },

    methods:{
      english(){
        this.items = this.itemsEnglish;        
      },
      spanish(){
        this.items = this.itemsSpanish;
      },
      getBrowserInfo(){
        var ua= navigator.userAgent, tem, 
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];        
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
      }
    },
    watch:{
      toggleLanguage(){
        if(this.toggleLanguage){
          this.spanish();
        }else{
          this.english();
        }
      }
    }

}
</script>

<style scoped>
.titleProyects{
  background: #000000;
}
.carouselContainer{
  height: 100vh;
}
.capriColor{
  background: #1c3856;
}
.richiColor{
  background:#111111
}
.AIColor{
  background:#190329
}
.papeleriaColor{
  background:#241d00
}
.my-system{
  height: 100%;
}


.image-carousel{

}
.video-carousel{
  height: 100%;
  width: 100%;
}
</style>
