<template>
	<view class='detail'>
		<view class="fixbg" :style="{ 'backgroundImage': 'url('+songDetail.al.picUrl+')' }"></view>
		<musichead :title='songDetail.name' :icon="true" color='white' ></musichead>
		<view class="container" v-show="!isLoading">
			<scroll-view scroll-y="true">
				<view class='detail-play'>
					<image :src='songDetail.al.picUrl' :class="{'detail-play-run': isPlayRotate}"
					mode=''></image>
					<text class="iconfont" v-if='iconplay' @tap="switchPlayPause">&#xe65a;</text>
					<text class="iconfont" v-else @tap="switchPlayPause">&#xe61c;</text>
					<view></view>
				</view>
				<view class="detail-lyric">
					<view class="detail-lyric-wrap" :style="{ transform: 'translateY('+ -(lyricIndex-1)*82 +'rpx)' }">
						<view class="detail-lyric-item" :class="{ active : lyricIndex == index }"
						v-for="(item, index) in songLyric" :key="index">{{item.lyric}}</view>
						
					</view>
				</view>
				<view class="detail-like">
					<view class='detail-like-head'>喜欢这首歌的人也听</view>
					<!-- <view class="detail-like-item">
						<view class='detail-like-img'>
							<image src="../../static/logo.png" mode=''></image>
						</view>
						<view class="detail-like-song">
							<view>蓝</view>
							<view>
								<image src="../../static/imgs/sq.png"></image>
								<image src="../../static/imgs/dujia.png"></image>
								四百七 - 蓝
							</view>
						</view>
						<text class="iconfont">&#xe640;</text>
					</view> -->
					<view class="detail-like-item" 
					v-for="(item, index) in songSimi" :key="index" @tap="handleToSimi(item.id)">
						<view class='detail-like-img'>
							<image :src="item.album.picUrl"></image>
						</view>
						<view class="detail-like-song">
							<view>{{item.name}}</view>
							<view>
								<image src="../../static/imgs/sq.png"></image>
								<image src="../../static/imgs/dujia.png"></image>
								{{item.album.artists[0].name }} - {{item.album.name}}
							</view>
						</view>
						<text class="iconfont">&#xe640;</text>
					</view>
					
				</view>
				<view class="detail-comment">
					<view class="detail-comment-head">精彩评论</view>
					<!-- <view class="detail-comment-item">
						<view class="detail-comment-img">
							<image src="../../static/logo.png" mode=""></image>
						</view>
						<view class="detail-comment-content">
							<view class="detail-comment-title">
								<view class='detail-comment-name'>
									<view>是阿吧阿巴</view>
									<view>2020年1月2日</view>
								</view>
								<view class='detail-comment-like'>
									56027
									<text class="iconfont">&#xe600;</text>
								</view>
							</view>
							<view class="detail-comment-text">测试实施水水水水少时诵诗书少受伤少时诵诗书</view>
						</view>
					</view> -->
					
					<view class="detail-comment-item" v-for="(item,index) in songComment" :key='index'>
						<view class="detail-comment-img">
							<image :src="item.user.avatarUrl" mode=""></image>
						</view>
						<view class="detail-comment-content">
							<view class="detail-comment-title">
								<view class='detail-comment-name'>
									<view>{{item.user.nickname}}</view>
									<view>{{item.time | formatTime}}</view>
								</view>
								<view class='detail-comment-like'>
									{{item.likedCount | formatCount}}
									<text class="iconfont">&#xe600;</text>
								</view>
							</view>
							<view class="detail-comment-text">
								{{item.content}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import musichead from '../../components/musichead/musichead.vue'
	import '../../common/iconfont.css'
	import { songDetail, songSimi, songComment, songLyric, songUrl } from '../../common/api.js'
	export default {
		data() {
			return {
				songDetail:{
					al: {
						picUrl:''
					}
				},
				songSimi:[],
				songComment:[],
				songLyric:[],
				lyricIndex: 0,
				iconplay: false,
				isPlayRotate : false,
				isLoading: true,
			}
		},
		components:{ 
			musichead,
		},
		onLoad(options){
			uni.showLoading({
				title:'努力加载ing'
			})
			// console.log(options.songId)
			this.getMusic(options.songId);
		},
		onUnload(){
			this.cancelLyricIndex()
			// #ifdef H5
			this.bgAudioManager.destroy();
			// #endif
		},
		onHide(){
			this.cancelLyricIndex()
			// #ifdef H5
			this.bgAudioManager.destroy();
			// #endif
		},
		methods: {
			switchPlayPause(){
				if(this.bgAudioManager.paused){
					this.bgAudioManager.play();
				}
				else{
					this.bgAudioManager.pause()
				}
				// this.iconplay = !this.iconplay;
				// this.isPlayRotate = !this.isPlayRotate;
				// console.log(this.iconplay, this.isPlayRotate)
			},
			
			listenLyricIndex(){
				clearInterval(this.timer)
				this.timer = setInterval(()=>{
						
					for(var i=0; i<this.songLyric.length; i++){
						if( this.bgAudioManager.currentTime > this.songLyric[this.songLyric.length-1].time){
							this.lyricIndex = this.songLyric.length-1;
							break;
						}
						
						if( this.bgAudioManager.currentTime > this.songLyric[i].time && 
						this.bgAudioManager.currentTime < this.songLyric[i+1].time){
							this.lyricIndex = i;
							// break;
							// console.log(this.lyricIndex, '内部')
						}
					}
					
					// console.log(this.lyricIndex, typeof(this.lyricIndex));
				}, 400)
			},
			
			cancelLyricIndex(){
				clearInterval(this.timer);
			},
			
			handleToSimi(songId){
				this.getMusic(songId);
			},
			
			getMusic(songId){
				// 用于传入store记录本首歌的id，再根据歌单列表判断下一首歌的id
				this.$store.commit('NEXT_ID', songId);
				uni.showLoading({
					title:'努力加载ing'
				})
				this.isLoading = true;
				
				
				Promise.all([songDetail(songId), songSimi(songId), 
				songComment(songId), songLyric(songId), songUrl(songId)]).then((res)=>{
					// console.log(res)
					if(res[0][1].data.code == '200'){
						this.songDetail = res[0][1].data.songs[0]
						// console.log(this.songDetail)
					}
					if(res[1][1].data.code == '200'){
						this.songSimi = res[1][1].data.songs;
						// console.log(this.songSimi)
					}
					if(res[2][1].data.code == '200'){
						this.songComment = res[2][1].data.hotComments;
						// console.log(this.songComment)
					}
					if(res[3][1].data.code == '200'){
						let lyric = res[3][1].data.lrc.lyric;
						console.log(lyric)
						let re =/\[([^\]]+)\]([^\[]+)/g;
						// 小括号是一个子段 [^\]]+就是匹配任意数量的，除了]的任何字符
						console.log(lyric.match(re))
						var result = [];
						
						var formatTimeToSec = function(value){
							let arr = value.split(':');
							// console.log(arr)
							return (Number(arr[0]*60) +  Number(arr[1])).toFixed(1);
						}
						
						lyric.replace(re, function($0, $1, $2){
							result.push({
								"time": formatTimeToSec($1),
								"lyric": $2,
							})
						})
						// 解析出来了数组形式的歌词 每项包含time和lyric time要解析成真正的秒数
						console.log(result)
						this.songLyric = result;
						
					}
					if(res[4][1].data.code == '200'){
						// 两个端的api名称不同 但是可以赋值给相同的变量 避免重复写
						// #ifdef MP-WEIXIN
						this.bgAudioManager = uni.getBackgroundAudioManager();
						
						// #endif
						
						// 为防止连续切歌时 上一首播放着导致iconplay isplayrotate为true
						// #ifdef H5
						this.iconplay = false;
						this.isPlayRotate = false;
						if(!this.bgAudioManager){
							this.bgAudioManager = uni.createInnerAudioContext();

						}
						
						// #endif
						this.bgAudioManager.title = this.songDetail.name;
						this.bgAudioManager.src = res[4][1].data.data[0].url || '';
						this.listenLyricIndex();
						// 歌曲播放时显示暂停键 开始旋转 歌词开始计数第多少行
						this.bgAudioManager.onPlay(() =>{
							this.iconplay = true;
							this.isPlayRotate = true;
							// console.log(this.iconplay, this.isPlayRotate)
							this.listenLyricIndex();
							console.log(this.$store.state.nextId)
						})
						
						this.bgAudioManager.onPause(() => {
							this.iconplay = false;
							this.isPlayRotate = false;
							// console.log(this.iconplay, this.isPlayRotate)
							this.cancelLyricIndex();
						})
						this.bgAudioManager.onEnded(()=>{
							this.getMusic( this.$store.state.nextId )
						})
					}
					uni.hideLoading();
					this.isLoading = false;
				});
			},
			formatTimeToSec(value){
				let arr = value.split(':');
				console.log(arr)
				return (Number(arr[0]*60) +  Number(arr[1])).toFixed(1);
			},
		}
	}
</script>

<style scoped>
	.detail-play{ width: 580rpx; height:580rpx; background: url(~@/static/imgs/disc.png); 
	background-size: cover; margin: 214rpx auto 0 auto; position: relative; }
	.detail-play image{  width: 370rpx; height: 370rpx; border-radius:50%; position: absolute; 
	top:0; left:0; right:0; bottom: 0; margin: auto;
	animation: 10s linear move infinite; animation-play-state: paused;
	}
	.detail-play .detail-play-run {animation-play-state: running;}
	@keyframes move{
		from{ transform: rotate(0deg); }
		to{ transform: rotate(360deg); }
	}
	
	.detail-play text{  width: 100rpx; height: 100rpx; font-size:100rpx; color:white; position: absolute; 
	top:0; left:0; right:0; bottom: 0; margin: auto;}
	.detail-play view{ width: 230rpx; height: 360rpx; background: url(~@/static/imgs/needle.png);
	position: absolute;left: 100rpx; right: 0; top:-200rpx; margin: auto; background-size: cover;}
	
	.detail-lyric { font-size: 32rpx; line-height: 82rpx; height: 246rpx; text-align: center; 
	overflow: hidden; color: #6f6e73;}
	.detail-lyric-wrap { 
		transition: .5s;
		
	}
	.detail-lyric-item { height: 82rpx;}
	.detail-lyric-item.active {color: white;}
	
	.detail-like {margin:0 30rpx;}
	.detail-like-head { font-size:36rpx; color:white; margin:50rpx 0 }
	.detail-like-item { display: flex; align-items: center; margin-bottom: 28rpx;}
	.detail-like-img {  width: 82rpx; height: 82rpx; border-radius:20rpx; flex-shrink: 0; 
	overflow: hidden; margin-right: 20rpx; }
	.detail-like-img image { width: 100%; height:100%; }
	.detail-like-song { flex:1; color:#c6c2bf; }
	.detail-like-song view:nth-child(1) { font-size: 28rpx; color:white; margin-bottom: 12rpx;}
	.detail-like-song view:nth-child(2) { font-size: 22rpx;}
	.detail-like-song image { width: 26rpx; height: 20rpx; margin-right:10rpx; }
	.detail-like-item text { font-size: 50rpx; color:#c6c2bf; }
	
	
	.detail-comment { margin:0 30rpx; }
	.detail-comment-head { font-size:36rpx; color:white; margin:50rpx 0 }
	.detail-comment-item { margin-bottom: 28rpx; display: flex; }
	.detail-comment-img { width: 64rpx; height: 64rpx; flex-shrink:0; border-radius: 50%; overflow: hidden; }
	.detail-comment-img image { width: 100%; height: 100%; }
	.detail-comment-content { flex:1 }
	.detail-comment-title { display:flex; justify-content: space-between; }
	.detail-comment-name {}
	.detail-comment-name view:nth-child(1){ font-size: 26rpx; }
	.detail-comment-name view:nth-child(2){ font-size: 20rpx; }
	.detail-comment-like { font-size: 28rpx; }
	.detail-comment-text { font-size: 28rpx; line-height: 40rpx; color:white; margin-top: 20rpx; 
	border-bottom: 1px #e0e0e0 solid; padding-bottom: 40rpx;}
</style>
