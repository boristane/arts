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
      artPieces: [
        {
          id: 0,
          title: 'under the water',
          date: '05 Nov 2018',
          inspiration: 'https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/',
          lang: '🇫🇷',
          quote: {
            text: "Si souvent, j'la pousse à bout</br>Elle m'aime et j'veux voir jusqu'où</br>J'ai si peur, si peur, si peur, peur qu'elle me délaisse</br>Que j'vais tout faire, tout faire, tout faire pour qu'elle me déteste",
            author: 'Gringe',
            ref: "Jusqu'où elle m'aime",
            url: "https://genius.com/Gringe-jusquou-elle-maime-lyrics",
          },
          image: 'https://boristane-arts-data.s3.eu-west-2.amazonaws.com/a.png',
          js: 'https://boristane-arts-data.s3.eu-west-2.amazonaws.com/a.js',
        },
      ]
    }
  },
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
