import { defineNuxtPlugin } from '#app';
import type { NuxtApp } from '#app';
import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import ar from '../locales/ar.json';

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'ar',
    fallbackLocale: 'ar',
    messages: {
      en,
      ar,
    },
  });

  nuxtApp.vueApp.use(i18n);
});
