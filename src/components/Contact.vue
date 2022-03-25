<template>
    <v-container fluid class="background-contact">
      <v-row justify="space-around" class="pt-15 row-contact">
        <v-col cols="12" sm="7" md="6" lg="5" align-self="center">
          <div data-aos="zoom-in-up">
            <v-card color="" rounded="xl" class="text-center">
            <v-card-text >
              <h1>Contact</h1>
            <v-form
              
              ref="form"
              v-model="valid"
              lazy-validation
              class="pt-10 pl-8 pr-8"
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
              <v-btn color="primary">
                Enviar
              </v-btn>
              <p class="mt-10">ansa1315@outlook.es</p>
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
import ContactAnimation from './Animation/Contact.vue';

export default {
    name:'Contact',
    components:{ContactAnimation},
    data:()=>({
        //form
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