<template>
    <div class="container">
        <div class="mini-container">
            <div id="canvas-container">
                
            </div>
            <div style="margin: 5px 0 0 0px; color: grey; text-align: right">
                made with <a href="https://p5js.org/" target="_blank" rel="noopener noreferrer">p5.js</a>
            </div>
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
            <div class="navigation">
                <div v-show="newer" id="newer">
                    <router-link :to="{ name: 'artPiece', params: { piece: newer }}">&#8810; NEWER</router-link>
                </div>
                <div v-show="older" id="older">
                    <router-link :to="{ name: 'artPiece', params: { piece: older }}">OLDER &#8811;</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import p5 from 'p5';

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
        },
        older () {
            const index = this.artPieces.indexOf(this.artPiece);
            if (index <= 0) return '';
            return this.artPieces[index - 1].title.split(' ').join('_');
        },
        newer () {
            const index = this.artPieces.indexOf(this.artPiece);
            if (index >= this.artPieces.length - 1) return '';
            return this.artPieces[index + 1].title.split(' ').join('_');
        }
    },
    created () {
        (function(d, src) {
            const script = d.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.onload = function(){
                // eslint-disable-next-line
                new p5(artPiece, d.getElementById('canvas-container'));
            };
            script.src = src;
            d.getElementsByTagName('head')[0].appendChild(script);
        }(document, this.artPiece.js));
    },
    watch: {
        $route () {
            this.artPieceTitle = this.$route.params.piece.split('_').join(' ');
        },
        artPiece () {
            if (!this.artPiece) {
                this.$router.push({ name: '404'});
            }
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 900px;
    margin: 80px auto;
    display: grid;
    grid-template-columns: auto auto;
}

#canvas-container {
    padding: 10px;
    border: 1px solid lightgray;
    text-align: center;
    width: 500px;
    height: 500px;
    margin: auto;
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
    margin-left: 30px;
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

@media screen and (max-width: 1023px){
    .container {
        display: block;
        margin-top: 15px;
    }

    .mini-container {
        width: 600px;
        margin: auto;
    }

    .details {
        width: 600px;
        margin: auto;
        margin-top: 30px;
    }

    .navigation {
        margin-top: 30px;
        position: inherit;
    }
}

@media screen and (max-width: 700px){
    .container {
        max-width: 800px;
        margin: auto;
        margin-top: 10px;
    }

    .mini-container {
        width: 450px;
        margin: auto;
    }

    .details {
        width: 450px;
        margin: auto;
        margin-top: 15px;
    }

    #canvas-container {
        margin: auto;
        width: 350px;
        height: 350px;
    }
}

@media screen and (max-width: 500px){
    .container {
        max-width: 500px;
        margin: auto;
        margin-top: 10px;
    }

    .mini-container {
        width: 300px;
        margin: auto;
    }

    .details {
        width: 300px;
        margin: auto;
        margin-top: 15px;
    }

    #canvas-container {
        margin: auto;
        width: 250px;
        height: 250px;
    }
}
</style>
