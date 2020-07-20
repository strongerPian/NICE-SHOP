<template>
	<van-tabbar
		v-model="active"
		active-color="red"
		inactive-color="#434826"
		route
		v-show="isShow"
	>
		<van-tabbar-item name="home" icon="home-o" :to="{ name: 'Home' }"
			>首页</van-tabbar-item
		>
		<van-tabbar-item name="search" icon="search" :to="{ name: 'List' }"
			>分类</van-tabbar-item
		>
		<van-tabbar-item
			name="bbsfriends"
			icon="chat-o"
			badge="6"
			:to="{ name: 'Star' }"
			>社区</van-tabbar-item
		>
		<van-tabbar-item
			name="friends"
			icon="shopping-cart-o"
			:to="{ name: 'Cart' }"
			badge="1"
			>购物车
		</van-tabbar-item>
		<van-tabbar-item
			name="setting"
			icon="friends-o"
			badge="12"
			:to="{ name: 'User' }"
			>我的</van-tabbar-item
		>
	</van-tabbar>
</template>
<script>
import Vue from "vue"
import { Tabbar, TabbarItem } from "vant"
Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
	data() {
		return {
			active: "home",
			isShow: true,
		}
	},
	watch: {
		$route(v) {
			// 监听地址的变化 设置底部导航显示和隐藏
			// console.log(v)
			if (v.meta.isShow) {
				this.isShow = false
			} else {
				this.isShow = true
			}
		},
	},
}
</script>
<style scoped>
.num {
	position: absolute;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: red;
	color: #ffffff;
	text-align: center;
	line-height: 14px;
	left: 190px;
	top: 0;
}
</style>
