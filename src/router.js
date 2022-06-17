import { Router } from '@vaadin/router';
import './pages/home.page';
import "./pages/other.page";

const outlet = document.querySelector('#outlet');
const router = new Router(outlet);

router.setRoutes([
    { 
        path: '/', 
        component: 'home-page' 
    },
    { 
        path: '/other',
        component: 'other-page'
    },
    { 
        path: '(.*)', redirect: '/' }
])

