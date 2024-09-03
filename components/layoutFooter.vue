<template>
  <!-- start footer -->
  <footer class="footer p-5">
    <div class="container-fluid">
      <div class="row row-30">
        <div class="col-md-3 col-6">
          <img src="../assets/images/logo.png" alt="logo" class="img-fluid" />
        </div>
        <div class="col-md-3 col-6">
          <h5>{{$t('about')}}</h5>
          <ul class="nav-list">
            <li v-for="(item, index) in aboutLinks" :key="index">
              <router-link :to="item.url">{{ $t(item.name) }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <h5>{{$t('support')}}</h5>
          <ul class="nav-list">
            <li v-for="(item, index) in supportLinks" :key="index">
              <router-link :to="item.url">{{ $t(item.name) }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <h5>{{$t('getApp')}}</h5>
          <ul class="nav-list">
            <li v-for="(item, index) in appLinks" :key="index">
              <a :href="item.url" target="_blank">{{ $t(item.name) }}</a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/games?hl=en&pli=1"
                target="_blank">
                <img
                  src="../assets/images/app-store.png"
                  class="img-fluid"
                  alt="app" />
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/games?hl=en&pli=1"
                target="_blank">
                <img
                  src="../assets/images/google-play.png"
                  class="img-fluid"
                  alt="app" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { ref } from "vue";

// =============== initialize data =============
const aboutLinks = ref([
  {
    name: 'aboutGoose',
    url: "/promo",
  },
  {
    name: 'howWorks',
    url: "/promo",
  },
  {
    name: 'blog',
    url: "/promo",
  },
  {
    name: 'form',
    url: "/page",
  },
]);
const supportLinks = ref([
  {
    name: 'helpCenter',
    url: "/promo",
  },
  {
    name: 'contact',
    url: "/promo",
  },
  {
    name: 'policy',
    url: "/promo",
  },
  {
    name: 'terms',
    url: "/promo",
  },
  {
    name: 'trust',
    url: "/promo",
  },
]);
const appLinks = ref([
  {
    name: 'android',
    url: "https://play.google.com/store/games?hl=en&pli=1",
  },
  {
    name: 'ios',
    url: "https://play.google.com/store/games?hl=en&pli=1",
  },
  {
    name: 'mobileSite',
    url: "https://play.google.com/store/games?hl=en&pli=1",
  },
]);
</script>
<style lang="scss" scoped>
.footer {
  h5 {
    color: #6e7491;
  }
  .nav-list {
    li {
      padding-top: 5px;
      padding-bottom: 5px;
      a {
        color: #7c8db0;
        text-decoration: none;
        &:hover {
          color: var(--secondary-color);
        }
      }
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>
