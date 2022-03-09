import router from "./router"
export default {
    router: router,
    core_router: {
        login: {
            path: '/login',
            component: () => import('../pages/auth/login.vue'),
            meta: {
                layout: 'full',
            }
        },
        forgetpass: {
            path: '/forgetpass',
            component: () => import('../pages/auth/forgetpass.vue'),
            meta: {
                layout: 'full',
            }
        },
        register: {
            path: '/register',
            component: () => import('../pages/auth/register.vue'),
            meta: {
                layout: 'full',
            }
        },
        forbidden: {
            path: '/forbidden',
            component: () => import('../pages/auth/forbidden.vue'),
            meta: {
                layout: 'full',
            }
        },
        //notfound '/*' must be put in the last , never change the order 
        notfound: {
            path: '/*',
            component: () => import('../pages/auth/notfound.vue'),
            meta: {
                layout: 'full',
            }
        },
    },
    api: {
        endpoint: "https://yourserver.com/api"
    },
    plugins: {
        mock: {
            enable: true,
        },
    }

}


