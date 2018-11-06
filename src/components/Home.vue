<template>
    <div class="container">
        <ArtMiniature v-for="artPiece in artPieces" :key="artPiece.id" :artPiece="artPiece"></ArtMiniature>
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
    max-width: 1000px;
    margin: 80px auto;
}
</style>

