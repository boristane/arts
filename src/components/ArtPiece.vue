<template>
    <div class="container">
        <div class="mini-container">
            <div id="canvas-container">
                <scale-loader class="loader" :loading="loading" :color="spinnerColor"></scale-loader>     
            </div>
            <div style="margin: 5px 0 0 0px; color: grey; text-align: right">
                made with <a href="https://p5js.org/" rel="noopener noreferrer">p5.js</a>
            </div>
        </div>
        
        <div class="details">
            <div class="date">{{ `${(new Date(artPiece.createdAt)).toDateString().slice(4, 15)}` }}</div>
            <h1 class="title">{{ artPiece.title }}</h1>
            <h2 class="inspiration">
                <a :href="artPiece.inspiration" style="padding: 0">inspiration</a>
            </h2>
            <div class="description">
                <p class="language">{{ artPiece.lang }}</p>
                <p class="quote" v-html="artPiece.quote.text"></p>
                <p class="source"><a :href="artPiece.quote.url" rel="noopener noreferrer"><span class="author">{{ artPiece.quote.author }}</span>, {{artPiece.quote.ref}}</a></p>
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
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';

export default {
    name: 'ArtPiece',
    components: {
        ScaleLoader,
    },
    data () {
        return {
            artPieceTitle: this.$route.params.piece.split('_').join(' ').toLowerCase(),
            spinnerColor: 'rgb(250, 90, 95)',
            loading: true,
            sketch: new p5(),
        };
    },
    props: [
        'artPieces',
    ],
    computed: {
        artPiece () {
            return this.artPieces.find(piece => piece.title.toLowerCase() === this.artPieceTitle);
        },
        older () {
            const index = this.artPieces.indexOf(this.artPiece);
            if (index <= 0) return '';
            return this.artPieces[index - 1].title;
        },
        newer () {
            const index = this.artPieces.indexOf(this.artPiece);
            if (index >= this.artPieces.length - 1) return '';
            return this.artPieces[index + 1].title.split(' ').join('_').toLowerCase();
        },
    },
    methods: {
        handleKeyDown() {
            document.querySelector('body').addEventListener('keydown', (e) => {
                if (e.code === 'ArrowLeft' && this.newer){
                    this.$router.push({ name: 'artPiece', params: { piece: this.newer }})
                }
                else if(e.code === 'ArrowRight' && this.older){
                    this.$router.push({ name: 'artPiece', params: { piece: this.older }})
                }
            });
        },
        runArtScript (d, src) {
                this.loading = true;
                this.sketch.remove();
                this.sketch = null;
                d.querySelectorAll('.art-script').forEach(elt => elt.remove());
                d.querySelectorAll('.p5Canvas').forEach(elt => elt.remove());
                const script = d.createElement('script');
                script.classList.add('art-script');
                script.type = 'text/javascript';
                script.async = true;
                script.onload = () => {
                    const container = d.getElementById('canvas-container');
                    // eslint-disable-next-line
                    this.sketch = new p5(artPiece, container);
                    this.loading = false;
                };
                script.src = src;
                d.getElementsByTagName('body')[0].appendChild(script);
        },
    },
    created () {
        this.runArtScript(document, this.artPiece.js);
        this.handleKeyDown();
    },
    watch: {
        $route () {
            this.artPieceTitle = this.$route.params.piece.split('_').join(' ').toLowerCase();
        },
        artPiece () {
            if (!this.artPiece) {
                this.$router.push({ name: '404'});
            }
            this.runArtScript(document, this.artPiece.js);
            document.title = this.artPieceTitle;
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 1400px;
    margin: 80px auto;
    margin-bottom: 0px;
    display: grid;
    grid-template-columns: auto auto;
}

#canvas-container {
    padding: 10px;
    border: 1px solid lightgray;
    text-align: center;
    width: 800px;
    height: 800px;
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
    width: 400px;
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

.loader {
    margin-top: 360px;
}

@media screen and (max-width: 1372px){
    .container {
      max-width: 1000px;
      margin: 80px auto;
      margin-bottom: 0px;
      display: grid;
      grid-template-columns: auto auto;
    }
    #canvas-container {
        width: 500px;
        height: 500px;
    }

    .loader {
        margin-top: 210px;
    }
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

    .loader {
        margin-top: 100px;
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
