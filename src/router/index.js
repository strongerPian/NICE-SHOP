import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/list",
		name: "List",
		component: () => import("../views/List"),
	},
	{
		path: "/cart",
		name: "Cart",
		component: () => import("../views/Cart"),
	},
	{
		path: "/user",
		name: "User",
		component: () => import("../views/User"),
	},
	{
		path: "/star",
		name: "Star",
		component: () => import("../views/Star"),
	},
]

const router = new VueRouter({
	routes,
})

export default router
