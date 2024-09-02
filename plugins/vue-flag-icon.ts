import { defineNuxtPlugin } from '#app';
import VueFlagIcon from 'vue-flag-icon';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('VueFlagIcon', VueFlagIcon);
});
