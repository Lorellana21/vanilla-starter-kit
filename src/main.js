import './main.css';
console.log('Vanilla');
import './app/pages/home.page';
import './app/pages/posts.page';
import { Router } from '@vaadin/router';


const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
{ path: '/', component: 'home-page' },
{ path: '/posts', component: 'posts-page' },
{ path: '(.*)', redirect: '/'}
]);
