<template>
    <v-container fluid class="background-contact" id="contact">
      <v-row justify="space-around" class="pt-15 row-contact">
        <v-col cols="12" class="text-center">
          <h1>Contact</h1>
        </v-col>
        <v-col cols="12" sm="7" md="6" lg="5" align-self="center">          
          <div data-aos="zoom-in-up">
            <v-card color="capri" rounded="xl" class="text-center">              
            <v-card-text >              
            <v-form              
              ref="form"
              v-model="valid"
              lazy-validation
              class="pt-10 pl-8 pr-8 pb-10"
            >
              <v-text-field
                v-model="contact.name"
                label="Name"
                :rules="nameRules"
                required
              >
              </v-text-field>
              <v-text-field
                v-model="contact.email"
                label="Mail"
                :rules="emailRules"
                required
              >
              </v-text-field>
              <v-textarea
                v-model="contact.message"
                required
                :rules="messageRules"
                label="Message"
                auto-grow
                rows="3"
                row-height="25"
                class="mt-5"
                filled
              />
              <v-alert
                v-if="sendCorrect"
                type="success"
                dense
                class="mt-5"
              >Submitted successfully</v-alert>
              <v-btn 
                color="primary"
                v-else
                @click="sendMessage"
                :loading="loading"
                >
                Send
              </v-btn>
            </v-form>
            </v-card-text>
          </v-card>
          </div>
        </v-col>
        <v-col cols="8" sm="7" md="6" lg="5" align-self="center">
          <contact-animation/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import ContactAnimation from './Animation/Contact.vue';

export default {
    name:'Contact',
    components:{ContactAnimation},
    data:()=>({
        //form
      loading: false,
      sendCorrect: false,
      valid: false,
      contact: {
        name: '',
        email: '',
        message: ''
      },

      nameRules: [
        v => !!v || 'Required'
      ],

      emailRules: [
        v => !!v || 'Requerido',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      messageRules:[
        v => !!v || 'Required',
      ]
    }),
    methods:{
      async sendMessage(){        
        if(this.$refs.form.validate()){
          this.loading = true;        
          await axios.post("https://andresjs.com/mensaje.php", JSON.stringify(this.contact));
          this.loading = false;
          this.sendCorrect = true;
        }
      }
    }
}
</script>

<style scoped>
.background-contact{


}
.row-contact{
  height: 100vh;
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