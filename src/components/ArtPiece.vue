<template>
    <div class="container">
        <div id="canvas-container">

        </div>
        <div class="details">
            <div class="date">{{ artPiece.date }}</div>
            <h1 class="title">{{ artPiece.title }}</h1>
            <h2 class="inspiration">
                <a :href="artPiece.inspiration" target="_blank" style="padding: 0">inspiration</a>
            </h2>
            <div class="description">
                <p class="language">{{ artPiece.lang }}</p>
                <p class="quote" v-html="artPiece.quote.text"></p>
                <p class="source"><a :href="artPiece.quote.url" target="_blank" rel="noopener noreferrer"><span class="author">{{ artPiece.quote.author }}</span>, {{artPiece.quote.ref}}</a></p>
            </div>
            <div class="navigation hidden">
                <div id="newer">
                    <a href="">&#8810; NEWER</a>
                </div>
                <div id="older">
                    <a href="">OLDER &#8811;</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArtPiece',
    data () {
        return {
            artPieceTitle: this.$route.params.piece.split('_').join(' '),
        };
    },
    props: [
        'artPieces',
    ],
    computed: {
        artPiece () {
            return this.artPieces.find(piece => piece.title === this.artPieceTitle);
        }
    },
    created () {
        let script = document.getElementById('art-script');
        script.setAttribute('src', this.artPiece.js);
        document.body.appendChild(script);
    }
}
</script>

<style scoped>
.container {
    max-width: 1000px;
    margin: 80px auto;
    display: grid;
    grid-template-columns: auto auto;
}

#canvas-container {
    padding: 10px;
    border: 1px solid lightgray;
    text-align: center;
    margin: 0 30px;
    width: 500px;
    height: 500px;
}

.date {
    font-size: 12px;
    color: gray;
    margin: 0;
}

.title {
    margin: 0;
}

.inspiration {
    margin: 0;
    font-size: 12px;
}

.language {
    color: lightgray;
    margin: 30px 0 10px 0;
    font-size: 20px;
}

.quote {
    color: grey;
    font-style: italic;
    margin: 0;
}

.source {
    text-align: right;
}

.author {
    font-weight: bold;
}

.details {
    position: relative;
}

.navigation {
    position: absolute;
    bottom: 20px;
    width: 100%;
}

#newer {
    position: absolute;
    left: 0;
}

#older {
    position: absolute;
    right: 0;
}
</style>
