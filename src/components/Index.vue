<template>
  <div>
    <div id="particles-js"></div>
    <v-container fluid>
      <v-row class="presentacion" justify="center">
        <v-col cols="12" md="5" align-self="center" style="" class="texto pa-5">
                <h1>{{profile}}</h1>
                <h4>{{profileDescription}}</h4>
        </v-col>
        <v-col cols="12" md="5" class="text-center" align-self="center">
          <v-img
                  src='static/pictures/kesi.jpg'
                  min-height = "300"
                  min-width = "300"
                  max-height = "500"
                  max-width = "500"
                  style="margin:0 auto"
              >
          </v-img>

          <p class="mt-5">
              Web developer <br>
              Andrés 
          </p>
          
        </v-col>
        
      </v-row>
    </v-container>
    <Carousels></Carousels>
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
      Or if you prefer, send me an email to <a href="" class="hipervinculoEmail"><v-icon large>mdi-email-plus</v-icon> <b> ansa1315@outlook.es</b></a>
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

export default {
  components: { Carousels, Experience, Contact, Skills, Others },

  mounted(){
    this.english();
    this.initParticles();
    AOS.init(); 
  },
  data: ()=>({
    isActive: false,
    profile: "",
      profileDescription: "",
      websiteCompany: "",

      titleEducation: "",
      university: "",

      titleExperience: "",

      skills: [
        {text: 'Passion for teaching, i like to learn and also teach what i know', icon: 'mdi-card-account-details-outline'},
        {text: 'I adapt easily to technologies', icon:'mdi-cellphone-check'},
        {text: 'Empathy and initiatives to hangout with the team', icon: 'mdi-account-multiple-check'},
        {text: 'Autonomy and leadership', icon: 'mdi-account-heart'}
      ],

      others: 'I love the cats/dogs and video games :)',
      nickname: 'My nickname: jonandres45 on all platforms, add me and have fun together!'
  }),
  methods:{
    english(){
        this.profile = "Profile";
        this.profileDescription = `Hi ! welcome to my portafol, i´m from México, Estado de México. I have experience developer 
        software since 3 years age. 
        Start maintaining an ISR calculation program in visual basic 6.0 for notaries public all across Mexico. Then I developed my own web 
        system to calculate ISR for public notaries.        
        `;
        this.websiteCompany = `Company website developed by me:`;

        this.titleEducation = "Education";
        this.university="University San Carlos with RVOE of I.P.N.";

        this.titleExperience = "Experience with";    
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
            "value": 0.7,
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