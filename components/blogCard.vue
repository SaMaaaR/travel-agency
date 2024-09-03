<template>
  <div class="blog-card card p-2">
    <img :src="blog?.image" class="card-img-top" alt="..." />
    <div class="card-body">
        <div class="d-flex mb-2">
            <span class="material-symbols-rounded mx-1"> location_on </span>
            <span>{{ blog?.location }}</span>
        </div>
      <h5 class="card-title">{{blog?.name}}</h5>
      <span>{{ blog?.days }} {{ blog?.days? $t('days') : '' }}</span>
      <p class="price mt-2">{{ blog?.price }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  blog: Object,
});
</script>
<style lang="scss" scoped>
.blog-card {
    background-color: rgba(240, 240, 240, 0.45);
    border: 1px solid rgba(255, 255, 255, 1);
    min-height: 400px;
    .material-symbols-rounded,
    .price {
        color: var(--secondary-color);
    }
}
</style>
