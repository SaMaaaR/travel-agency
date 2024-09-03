<template>
  <!-- start navbar -->
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
            <NuxtLink class="nav-link active" to="/">{{
              $t("home")
            }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/promo">{{
              $t("promo")
            }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/booking">{{
              $t("booking")
            }}</NuxtLink>
          </li>
        </ul>
        <div class="navbar-text d-flex">
          <!-- start language switcher -->
          <div class="dropdown mx-2">
            <a
              class="btn btn-outlined dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              {{ locale == "ar" ? "AR" : "EN" }}
            </a>

            <ul class="dropdown-menu">
              <li
                v-for="(language, index) in languages"
                :key="index"
                :value="language.id"
                @click="selectLanguage(language.id)">
                <span class="dropdown-item">
                  {{ language.label }}
                </span>
              </li>
            </ul>
          </div>
          <!-- sign in button  -->
          <button type="button" class="btn btn-main">{{ $t("signIn") }}</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

// =========== initialize data =============
const { locale } = useI18n();

const languages = ref([
  { id: "ar", label: "AR" },
  { id: "en", label: "EN" },
]);
// ============================== Methods ====================
const selectLanguage = (language: string) => {
  locale.value = language;
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
</style>
