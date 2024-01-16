import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes =[
    {
        path:"/",
        redirect: "/startLandPage"      
    },
    {
        path :"/",
        component: {
            render(c){
                return c ("router-view");
            }
        },    
        children: [
            {
                path:'/inicio',
                name:'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path:'/main',
                name:'main',
                component: () => import('../components/Main.vue')
            },
            {
                path:'/tercero',
                name:'tercero',
                component: () => import('../components/Tercero.vue')
            },
            {
                path:'/rentSpace',
                name:'rentSpace',
                component: () => import('../components/RentSpace.vue')
            },
            {
                path:'/rentYouSpace',
                name:'rentYouSpace',
                component: () => import('../components/RentYouSpace.vue')
            },
            {
                path:'/spaceInformation',
                name:'spaceInformation',
                component: () => import('../components/SpaceInformation.vue')
            },             
            {
                path:'/startLandPage',
                name:'startLandPage',
                component: () => import('../components/StartLandPage.vue')
            },      
            {
                path:'/offerSpace',
                name:'offerSpace',
                component: () => import('../components/OfferSpace.vue')
            },  
            {
                path:'/rentYouSpace',
                name:'rentYouSpace',
                component: () => import('../components/RentYouSpace.vue')
            },
            {
                path:'/spaceCatalog',
                name:'spaceCatalog',
                component: () => import('../components/SpaceCatalog.vue')
            },
            {
                path:'/spaceDetails',
                name:'spaceDetails',
                component: () => import('../components/SpaceDetails.vue')
            },
    ]
    }         
]

const router = new VueRouter({routes, })
export default router;
    
