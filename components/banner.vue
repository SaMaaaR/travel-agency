<template>
  <div class="banner container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center my-5 text-center">
        <div class="title d-flex align-items-end">
          <h1>
            Discover Our Paradise Worlds, <br />
            Travel Anywhere Now!
          </h1>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <book-form />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.banner {
  background-image: url(../assets/images/world-map.png);
  height: calc(100vh - 100px);
  .title {
    height: 25vh;
    h1 {
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); /* Replace with your colors */
        -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
    }
  }
}
</style>
