<template>
  <div>
    <div id="particles-js"></div>
    <v-container fluid>
      <v-row class="presentacion" justify="center">
        <v-col cols="12" md="5" align-self="center" style="" class="texto pa-5">
                <h1>{{profile}}</h1>
                <h4>{{profileDescription}}</h4>
                <p>
                  <v-switch
                    v-model="toggleLanguage"
                    :label="language"
                    color="success"
                    value="success"
                    success
                    hide-details
                  ></v-switch>
                </p>
                  <v-btn 
                    class="mr-2 d-md-none" 
                    color="indigo"
                    small
                    @click="$vuetify.goTo('#proyects')"
                  >
                    Proyects
                  </v-btn>
                  <v-btn 
                    class="mr-2 d-md-none" 
                    color="indigo"
                    small
                    @click="$vuetify.goTo('#experience')"
                  >
                    Experience
                  </v-btn>
                  <v-btn 
                    class="mr-2 d-md-none" 
                    color="indigo"
                    small
                    @click="$vuetify.goTo('#contact')"
                  >
                    Contact
                  </v-btn>
        </v-col>
        <v-col cols="12" md="5" class="text-center" align-self="center">
          <Presentation/>
        </v-col>        
      </v-row>
    </v-container>
    <Carousels
      :toggleLanguage ="toggleLanguage"
    ></Carousels>
    <div class="backgroundApp">
      <Experience 
        :titleEducation="titleEducation"
        :university="university"
        :titleExperience="titleExperience"
        />
      <Skills
        :skills="skills"
      />
      <Contact/>       
      <footer>
       {{footerText}} <a href="mailto:contact@andresjs.com" class="hipervinculoEmail"><v-icon large>mdi-email-plus</v-icon> <b> contact@andresjs.com</b></a>
      </footer>
      <Others/>
    </div>
  </div>
</template>

<script>
import Carousels from '../components/Carousels.vue';
import Experience from '../components/Experience.vue';
import 'particles.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Contact.vue';
import Skills from './Skills.vue';
import Others from './Others.vue';
import Presentation from '../components/Animation/Presentation.vue';

export default {
  components: { Carousels, Experience, Contact, Skills, Others, Presentation },

  mounted(){
    this.english();
    this.initParticles();
    AOS.init(); 
  },
  data: ()=>({
    toggleLanguage:false,
    language: 'Ver página en español',
    isActive: false,
    profile: "",
      profileDescription: "",
      websiteCompany: "",

      titleEducation: "",
      university: "",

      titleExperience: "",

      titleSkills: '',
      skills:[],
      skillsEnglish: [
        {text: 'Passion for teaching', icon: 'mdi-card-account-details-outline'},
        {text: 'I like to learn and also teach what i know', icon: 'mdi-school'},
        {text: 'I adapt easily to technologies', icon:'mdi-cellphone-check'},
        {text: 'Empathy and initiatives to hangout with the team', icon: 'mdi-account-multiple-check'},
        {text: 'Autonomy and leadership', icon: 'mdi-account-heart'}
      ],

      skillsSpanish:[
        {text: 'Pasión por la enseñanza', icon: 'mdi-card-account-details-outline'},
        {text: 'Me gusta aprender y compartir conocimientos', icon: 'mdi-school'},
        {text: 'Me adapto fácil a las tecnologías', icon:'mdi-cellphone-check'},
        {text: 'Empatia e iniciativas para trabajar en equipo', icon: 'mdi-account-multiple-check'},
        {text: 'Autonomía y liderazgo', icon: 'mdi-account-heart'}
      ],

      titleContact:'',
      placeHolderName: '',
      placeHolderMail:'',
      messagePLaceHodler:'',
      valueBtnSend:'',

      footerText:'',

      others: 'I love the cats/dogs and video games :)',
      nickname: 'My nickname: jonandres45 on all platforms, add me and have fun together!',      
  }),
  methods:{
    english(){
        this.profile = "Andrés Ortiz - About me";
        this.profileDescription = `
        Welcome to my portfolio. I´m a Full Stack developer mainly focused on front-end based on Mexico City. I´ve experience building web/apps for 3 years straight. 
        My journey as developer started with an I.S.R. calculation program in visual basic 6.0 for notaries public all across Mexico. Then I developed my own web 
        system to calculate I.S.R. for public notaries.        
        `;
        this.websiteCompany = `Company website developed by me:`;

        this.titleEducation = "Education";
        this.university="University San Carlos with RVOE of I.P.N.";

        this.titleExperience = "I have experience with:";
        this.titleSkills = "Skilss";
        this.skills = this.skillsEnglish;

        this.titleContact='Contact me';
        this.placeHolderName= 'Name';
        this.placeHolderMail='Mail';
        this.messagePLaceHodler='Message';
        this.valueBtnSend='Send';

        this.footerText='Or if you prefer, you can send me an email to';

        this.others= 'I love the cats/dogs and the videogames';
        this.nickname= 'My nickname: jonandres45 on all platforms, add me and have fun together!';
    },
    spanish(){
        this.profile = "Andrés Ortiz - Sobre mi";        
        this.profileDescription = `
        Hola ! bienvenido a mi portafolio, soy un desarrollador 'full stack', especializado en el lado frond-end, resido en la Ciudad de México. Tengo experiencia desarrollando aplicaciones por más de 3 años,
        Inicie dando manteminento a un programa para el I.S.R. en Visual Basic 6.0 para las notarías públicas alrededor de México.
        Desarrolle mi propia aplicación web para el mismo cálculo de I.S.R. con varias mejoras y actualizaciones.
        `
        this.websiteCompany = `Company website developed by me:`;

        this.titleEducation = "Estudios";
        this.university="Universidad San Carlos con RVOE en el I.P.N.";

        this.titleExperience = "Experiencia con";
        this.titleSkills = "Habilidades";
        this.skills = this.skillsSpanish;

        this.titleContact='Contacto';
        this.placeHolderName= 'Nombre';
        this.placeHolderMail='Correo eléctronico';
        this.messagePLaceHodler='Mensaje';
        this.valueBtnSend='Enviar';

        this.footerText='Si lo prefieres, enviame correo a';

        this.others= 'Me encantan los gatos/perros y los videojuegos';
        this.nickname= 'Mi nickname: jonandres45 en todas las plataformas, agregame y divirtamonos juntos!';
    },
    initParticles() {
      window.particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 90,
            "density": {
              "enable": false,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "triangle",
            "stroke": {
              "width": 0,
              "color": "#a6e9f2"
            },
            "polygon": {
              "nb_sides": 3
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": .3,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 6,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 0,
            "color": "#299198",
            "opacity": 0.4,
            "width": 0.3
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 200,
              "size": 9,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 150,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": false
      })
    }
  },
  watch:{
    toggleLanguage(){
      if(this.toggleLanguage){
        this.language = "view website in english";
        this.spanish();
      }else{
        this.language = "Ver página en español";
        this.english();
      }
    }
  }
  
}
</script>

<style scoped>

.presentacion{
    background: #142850;
    height: 100vh;
    color:white;
/*    display: flex;
    justify-content: center;
    align-items: center;*/
}

.contenido{
    font-family: 'Oregano', cursive;
    font-size: 30px;
}

.icon-inicio{
    cursor: pointer;
}


.texto{
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
}

#particles-js {
    position: absolute;
    width: 100%;
    height: 100vh;
}

.my-system{
  background: #27496D;
}

.my-system-card{
    background: #27496D;
}
.backgroundApp{
background-image: linear-gradient(to bottom, #000000, #15040c, #1e0819, #220e26, #201337, #1c163f, #131946, #001d4e, #001c4e, #001c4d, #001b4d, #001b4c);
}

footer{
  background: #0c013a;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 3vh;
  text-align: center;
}
.hipervinculoEmail{
  text-decoration: none;
  color: white;
}
@media screen and (max-width: 800px) {
  .texto{
    font-size: medium;
  }
  .row-contact{
    height: auto;
  }
}

</style>