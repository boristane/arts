<template>
<div class="main">
    <p style="color: grey;">
        I make art with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">javascript</a> and this might be called a portfolio...
    </p>
    <div class="container">
        <ArtMiniature v-for="artPiece in artPieces.slice().reverse()" :key="artPiece.id" :artPiece="artPiece"></ArtMiniature>
    </div>
</div>
</template>

<script>
import ArtMiniature from './ArtMiniature.vue';
export default {
   name: 'Home',
   props: [
       'artPieces',
   ],
   components: {
       ArtMiniature,
   },
}
</script>

<style scoped>
.main {
    max-width: 900px;
    margin: 80px auto;
}

.container {
    display: grid;
    grid-template-columns: auto auto auto;
}

@media screen and (max-width: 1023px){
    .container {
        grid-template-columns: auto auto;
    }

    .main {
        margin-top: 15px;
        max-width: 650px;
    }
}

@media screen and (max-width: 700px){
    .container {
        grid-template-columns: auto;
    }

    .main {
        max-width: 300px;
    }
}
</style>

