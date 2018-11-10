<template>
  <div id="app">
    <Menus></Menus>
    <router-view :artPieces="artPieces"/>
    <Socials></Socials>
  </div>
</template>

<script>
import Menus from './components/Menus.vue';
import Socials from './components/Socials.vue';

export default {
  name: 'app',
  components: {
    Socials,
    Menus,
  },
  data () {
    return {
      artPieces: [],
      apiURL: 'https://boristane-blog-api.herokuapp.com',
    }
  },
  created ()  {
    fetch(`${this.apiURL}/artpieces`)
        .then(data => data.json())
        .then((data) => {
            this.artPieces = data.artPieces.sort((a, b) => {
              const dateA = new Date(a.createdAt);
              const dateB = new Date(b.createdAt);
              return dateB.getTime() - dateA.getTime();
            });
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
</style>
