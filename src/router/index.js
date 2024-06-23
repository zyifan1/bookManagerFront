import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        name: "login",
        component: () => import("../pages/login.vue"),
    },
    {
        path: "/index",
        name: "index",
        redirect: "/index/bookInfo",
        component: () => import("../pages/index.vue"),
        children: [
            {
                path: "bookInfo",
                name: "bookInfo",
                component: () => import("../components/sidebar/bookInfo.vue"),
            },
            {
                path: "borrow",
                name: "borrow",
                component: () => import("../components/sidebar/borrow.vue"),
            },
            {
                path: "ownInfo",
                name: "ownInfo",
                component: () => import("../components/sidebar/ownInfo.vue"),
            }
        ]
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router