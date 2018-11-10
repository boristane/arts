<template>
    <div class="art-piece">
        <router-link :to="url">
            <img class="miniature" :src="artPiece.image" alt="" srcset="">
        </router-link>
        <div class="details">
            <span class="date">{{ `${(new Date(artPiece.createdAt)).toDateString().slice(4, 15)}` }}</span>
            <router-link :to="url" class="title">{{ artPiece.title }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
   name: 'ArtMiniature',
   props: [
       'artPiece',
   ],
   computed: {
       url () {
           return `/piece/${this.artPiece.title.toLowerCase().split(' ').join('_')}`;
       }
   }
}
</script>

<style scoped>
.art-piece {
    margin: 10px;
}
.miniature {
    border: 1px solid lightgray;
    padding: 10px;
    width: 254px;
    height: 254px;
}

.details {
    text-align: left;
}

.title {
    margin: 0;
    font-size: 20px;
}

.date {
    font-size: 10px;
}
</style>

