import { defineNuxtPlugin } from '#app';
import type { NuxtApp } from '#app';

import FlagIcon from 'vue-flag-icon';

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  nuxtApp.vueApp.use(FlagIcon);
});
