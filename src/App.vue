<template>
  <div id="app">
    <Menus></Menus>
    <scale-loader class="loader" :loading="loading" :color="spinnerColor"></scale-loader>
    <router-view :artPieces="artPieces" v-show="!loading"/>
    <Socials></Socials>
  </div>
</template>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';
import Menus from './components/Menus.vue';
import Socials from './components/Socials.vue';

export default {
  name: 'app',
  components: {
    Socials,
    Menus,
    ScaleLoader,
  },
  data () {
    return {
      artPieces: [],
      apiURL: 'https://boristane-blog-api.herokuapp.com',
      spinnerColor: 'rgb(250, 90, 95)',
      loading: true,
    }
  },
  created ()  {
    fetch(`${this.apiURL}/artpieces`)
        .then(data => data.json())
        .then((data) => {
          this.artPieces = data.artPieces;
          this.loading = false;
        });
  }
}
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a:link {
    padding: 5px;
    color: lightgrey;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
}

a:visited {
    color: lightgrey;
}

a:active {
    color: lightgrey;
}

a:hover {
    color: rgb(253, 101, 101);
}

canvas {
    max-width: 100%;
    max-height: 100%;
}

.loader {
  margin-top: 150px;
}

@media screen and (max-width: 1023px){
    .loader {
      margin-top: 80px;
    }
}
</style>
