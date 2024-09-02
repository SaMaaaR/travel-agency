<template>
  <NuxtPage />
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, watch } from 'vue';
// ===== initialize data =======
const { locale } = useI18n();
// ============ methods =============
const updateDirection = () => {
  // Set direction based on loacle
  const direction = locale.value === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', direction);
};

// update direction in onMounted
onMounted(updateDirection);
// watch to change direction according to locale
watch(locale, updateDirection);
</script>
