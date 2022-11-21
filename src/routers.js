import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from './components/signup.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
    routes:
        [
            {
                path: "/home",
                name: "Home",
                component: () => import('./components/home.vue')
            },
            {
                path: "/signup",
                name: "signup",
                component: SignUp
            },
            {
                path: "/",
                name: "signin",
                component: () => import('./components/signin.vue')
            },
            {
                path: "/forgot-password",
                name: "forgot-password",
                component: () => import("./components/forgotpassword.vue")
            },
            {
                path: "/books",
                name: "index",
                component: () => import("./components/books/index.vue"),
                redirect: {
                    name: "list"
                },
                children: [
                    {
                        name: "list",
                        path: "/books/list",
                        component: () => import("./components/books/list.vue"),
                    },
                    {
                        name: "create",
                        path: "/books/create",
                        component: () => import("./components/books/create.vue"),
                    },
                    {
                        name: "update",
                        path: "/books/update",
                        component: () => import("./components/books/update.vue"),
                    },
                    {
                        name: "view",
                        path: "/books/view",
                        component: () => import("./components/books/view.vue"),
                    }
                ],
            },
            
        ],
        mode: 'history'
},)