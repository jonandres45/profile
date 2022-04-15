import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        dark: true,
        themes: {
          dark: {
            system: "#27496D",
            caca:"#19274F",
            capri: "#1c3856",
            richi: "#111111",
            AI: "#190329",
            papeleria: "#241d00"
          }
        }
      }
});
