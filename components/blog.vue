<template>
  <div class="blog container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-start my-5">
        <div class="title">
          <h3>Popular Destinations</h3>
          <span>Vacations to make your experience enjoyable in Indonesia!</span>
        </div>
      </div>
      <div
        class="col-lg-3 col-md-6 col-12"
        v-for="(blog, index) in blogs"
        :key="index">
        <blog-card :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import blogImage from "@/assets/images/blog.png";

const blogs = ref([
  {
    id: "0",
    name: "Flores Road Trip 3D2N",
    image: blogImage,
    location: "Manggarai Barat",
    days: "1",
    price: "100$",
  },
  {
    id: "1",
    name: "Forrester Glamping Co Bogor",
    image: blogImage,
    location: "Bogor",
    days: "3",
    price: "100$",
  },
  {
    id: "2",
    name: "Paket Tiket PesawatJakarta Bali",
    image: blogImage,
    location: "Jakarta",
    price: "100$",
  },
  {
    id: "3",
    name: "Desa Wisata Kandri",
    image: blogImage,
    location: "Kota Semarang",
    days: "14",
    price: "100$",
  },
]);
</script>

<style lang="scss" scoped>
.blog {
    background-color: #f5f5ff;
}</style>
