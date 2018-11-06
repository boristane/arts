import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import ArtPiece from './components/ArtPiece.vue';
import notFound from './components/Page404.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/piece/:piece',
            name: 'artPiece',
            component: ArtPiece,
        },
        {
            path: '*',
            name: '404',
            component: notFound,
        }
    ]
});
