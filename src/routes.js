import NavBar from './components/NavBar.vue';
import UpdateForm from './components/UpdateForm.vue';

const routes = [
    {
        path: '/',
        name: 'navBar',
        component: NavBar
    },
    {
        path: '/viewCompanies',
        name: 'viewCompanies',
        component: () => import('./views/ViewCompanies.vue'),
        props: (route) => ({ search: (route.params.search === 'true') })
    },
    {
        path: '/update',
        name: 'UpdateForm',
        component: UpdateForm,
        props: true
    }
];

export default routes;