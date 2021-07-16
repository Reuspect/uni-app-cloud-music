<template>
	<view class="music-head" :style="{ color : color }">
		<view v-show="icon" class="music-head-icon" :class="{ 'music-head-iconblack':iconblack }">
			<text class="iconfont" @tap="handleToBack">&#xe606;</text> |
			<text class="iconfont" @tap="handleToHome">&#xe622;</text>
		</view>
		<view>{{title}}</view>
	</view>
</template>

<script>
	import '../../common/iconfont.css';
	
	export default {
		data() {
			return {
				
			};
		},
		
		props: ['title','icon','color','iconblack'],
		methods:{
			handleToBack() {
				uni.navigateBack();
			},
			handleToHome() {
				uni.navigateTo({
					url:'/pages/index/index'
				});
			}
		},
	}
</script>

<style scoped>
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.music-head {
		height: 75px;
		/* background-color: #808080; */
		width: 100%;
		font-size:16px;
		line-height:80px;
		text-align:center;
		color:black;
		position: relative;
	}
	.music-head-icon {
		position: absolute;
		left: 8px;
		top:24px;
		width:90px;
		height:30px;
		background-color: rgba(0,0,0,0.4);
		color:white;
		line-height:30px;
		border-radius: 15px;
		display: flex;
		justify-content: space-evenly;
	}
	.music-head-iconblack {color:black; border: 1px #eaeaea solid; background-color: white;}
</style>
