import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#00bcd4',
        secondary: '#009688',
        accent: '#e91e63',
        error: '#f44336',
        warning: '#ffc107',
        info: '#9c27b0',
        success: '#cddc39'
      },
    },
  },
});
