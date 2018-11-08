<template>
    <div class="container">
        <ArtMiniature v-for="artPiece in artPieces.slice().reverse()" :key="artPiece.id" :artPiece="artPiece"></ArtMiniature>
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
.container {
    display: grid;
    grid-template-columns: auto auto auto;
    max-width: 900px;
    margin: 80px auto;
}

@media screen and (max-width: 1023px){
    .container {
        grid-template-columns: auto auto;
        margin-top: 15px;
        max-width: 650px;
    }
}

@media screen and (max-width: 700px){
    .container {
        grid-template-columns: auto;
        max-width: 300px;
    }
}
</style>

