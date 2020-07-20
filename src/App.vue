<template>
	<div id="app">
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
		<router-view />
		<Footer></Footer>
		<!-- <van-tabbar
			v-model="active"
			active-color="#07c160"
			inactive-color="#000"
			route
		>
			<van-tabbar-item icon="home-o" @click="navTo('Home')">标签</van-tabbar-item>
			<van-tabbar-item icon="search" @click="navTo('List')">标签</van-tabbar-item>
			<van-tabbar-item icon="friends-o" @click="navTo('Star')"
				>标签</van-tabbar-item
			>
			<van-tabbar-item icon="setting-o" @click="navTo('Cart')"
				>标签</van-tabbar-item
			>
			<van-tabbar-item icon="setting-o" @click="navTo('User')"
				>标签</van-tabbar-item
			>
		</van-tabbar> -->
	</div>
</template>

<script>
import Footer from "./components/Footer"
import Vue from "vue"
import { Tabbar, TabbarItem } from "vant"
Vue.use(Tabbar)
Vue.use(TabbarItem)

export default {
	// data() {
	// 	return {
	// 		active: "home",
	// 	}
	// },
	// methods: {
	// 	navTo(routerName) {
	// 		this.$router.push({
	// 			name: routerName,
	// 		})
	// 	},
	// },
	components: {
		Footer,
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
