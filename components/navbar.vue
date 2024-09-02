<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a href="/" class="navbar-brand">
        <img src="@/assets/images/logo.png" alt="Logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">{{$t('home')}}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/promo">{{$t('promo')}}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/booking">{{$t('booking')}}</a>
          </li>
        </ul>
        <div class="navbar-text d-flex">
          <div class="dropdown mx-2">
            <a
              class="btn btn-outlined dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              {{ locale == 'ar' ? 'AR' : 'EN' }}
            </a>

            <ul class="dropdown-menu">
              <li v-for="(language,index) in languages" :key="index" :value="language.id"
              @click="selectLanguage">
              <span class="dropdown-item">{{language.label}}</span>
            </li>
            </ul>
          </div>

          <button type="button" class="btn btn-main">Sign in</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
// =========== initialize data =============
const languages = ref([
  {id: 'ar', label: 'AR'},
  {id: 'en', label:'EN'}
])
// ============================== Methods ====================
const selectLanguage = () => {
  locale.value = locale.value === 'ar' ? 'en' : 'ar';
};
</script>

<style lang="scss" scoped>
.nav-link {
  color: var(--gray-color);
  font-weight: 400;

  &:hover,
  &.active {
    color: var(--secondary-color);
    font-weight: 500;
  }
}
.vue-flag-icon {
  width: 50px;
  height: 30px;
}
</style>
