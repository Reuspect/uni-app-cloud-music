<template>
	<view class='search'>
		<musichead title="搜索页" :icon="true" color='black' :iconblack="true">
		</musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class='search-search'>
					<text class="iconfont">&#xe617;</text>
					<input type="text" placeholder="搜索歌曲" @confirm="handleToSearch(searchWord)"
					v-model="searchWord" @input='handleToSuggest'/>
					<text class="iconfont" v-show="searchType!=1" @tap="handleToClose">&#xe639;</text>
				</view>
				<block v-if="searchType == 1">
					<view class="search-history">
						<view class="search-history-head">
							<text>历史记录</text>
							<text class="iconfont" @tap='handleToClear'>&#xe623;</text>
						</view>
						<view class="search-history-list" >
							<view v-for="(item,index) in searchHistory"
						:key="index" @tap="handleToWord(item)">{{item}} </view>
						</view>
					</view>
					<view class="search-hot">
						<view class='search-hot-read'>
							热搜榜
						</view>
						<!-- <view class="search-hot-item">
							<view class="search-hot-top">1</view>
							<view class="search-hot-word">
								<view>
									张小圆 
									<image src="../../static/imgs/dujia.png" mode='aspectFit'></image>
								</view>
								<view>
									我老婆 真好看 可爱
								</view>
							</view>
							<text class="search-hot-count">2968644</text>
						</view> -->
						<view class="search-hot-item" v-for="(item,index) in searchHotData" 
						:key='index' @tap='handleToWord(item.searchWord)'>
							<view class="search-hot-top">{{index+1}}</view>
							<view class="search-hot-word">
								<view>
									{{item.searchWord}} 
									<image :src="item.iconUrl" mode='aspectFit'></image>
								</view>
								<view>
									{{item.content}}
								</view>
							</view>
							<text class="search-hot-count">{{ item.score }}</text>
						</view>
					</view>
				</block>
				<block v-else-if="searchType == 2">
					<view class="search-result">
						<!-- <view class="search-result-item">
							<view class="search-result-word">
								<view>少年</view>
								<view>许巍 - 爱如少年</view>
							</view>
							<text class="iconfont">&#xe640;</text>
						</view> -->
						<view class="search-result-item" v-for="(item,index) in searchList" 
						:key="index" @tap="handleToDetail(item.id)">
							<view class="search-result-word">
								<view>{{item.name}}</view>
								<view>{{item.artists[0].name}} - {{item.album.name}}</view>
							</view>
							<text class="iconfont">&#xe640;</text>
						</view>
					</view>
				</block>
				<block v-else-if="searchType==3">
					<view class="search-suggest">
						<view class="search-suggest-head">搜索 {{searchWord}} </view>
						<view class="search-suggest-item" 
						v-for="(item, index) in searchSuggest" :key="index" @tap="handleToWord(item.keyword)">
							<text class="iconfont">&#xe617;</text>{{item.keyword}}
						</view>
						<!-- <view class="search-suggest-item">
							<text class="iconfont">&#xe617;</text>少年抖音
						</view> -->
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import musichead from '../../components/musichead/musichead.vue'
	import '@/common/iconfont.css'
	import { searchHot, searchWord, searchSuggest } from '../../common/api.js'
	
	export default {
		data() {
			return {
				searchHotData:[],
				searchWord: '',
				searchHistory: [],
				searchType: 1,
				searchList: [],
				searchSuggest: [],
			}
		},
		components:{
			musichead
		},
		onLoad(){
			searchHot().then((res)=>{
				// console.log(res)
				if(res[1].data.code == '200'){
				this.searchHotData = res[1].data.data;
				// console.log(this.searchHotData)
				}
			})
			uni.getStorage({
				key: 'searchHistory',
				success: (res)=>{
					this.searchHistory = res.data;
				}
			})
		},
		onShow(){
			
		},
		methods: {
			handleToWord(word){
				this.searchWord = word;
				this.handleToSearch(word);
			},
			handleToSearch(word){
				// 放入存储历史搜索的数组前面
				this.searchHistory.unshift(word);
				// 去重
				this.searchHistory = [...new Set(this.searchHistory)]
				// 保持最多十个搜索记录
				if(this.searchHistory.length>10){
					this.searchHistory.length = 10;
				}
				// 存储搜索数据至本地存储local storage 避免刷新就没了
				// 刷新时 在onload里调用getstorage方法
				uni.setStorage({
					key: 'searchHistory',
					data: this.searchHistory
				});
				this.getSearchList(word);
			},
			handleToClear(){
				uni.removeStorage({
					key:'searchHistory',
					success: (res)=>{
						this.searchHistory = [];
					}
				})
			},
			getSearchList(word){
				searchWord(word).then((res)=>{
					if(res[1].data.code == '200'){
						console.log(res, word)
						this.searchList = res[1].data.result.songs;
						console.log('searchlist', this.searchlist)
						this.searchType = 2;
					}
				})
			},
			handleToClose(){
				this.searchWord = ''
				this.searchType = 1;
				
			},
			handleToDetail(songId){
				uni.navigateTo({
					url: '/pages/detail/detail?songId='+songId
				});
			},
			handleToSuggest(ev){
				// input中 想拿到输入的值 就从event.detail.value中拿
				let value = ev.detail.value;
				if(!value){
					this.searchType = 1;
					return;
				}
				console.log('value',value)
				searchSuggest(value).then((res)=>{
					if((res[1]).data.code == '200'){
						console.log(res)
						this.searchSuggest = res[1].data.result.allMatch;
						console.log(this.searchSuggest)
						this.searchType = 3;
					}
				})
			}
		}
	}
</script>

<style scoped>
	.search {
		/* background-color: #959595; */
	}
	.search-search {
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 50rpx 30rpx;
		background-color: #f7f7f7;
		border-radius: 50rpx;
	}
	.search-search text {
		font-size: 26rpx;
		margin-right: 26rpx;
		margin-left: 26rpx;
	}
	.search-search input {
		font-size: 28rpx;
		flex:1;
	}
	
	.search-history { margin:0 30rpx 50rpx 30rpx; font-size:26rpx; }
	.search-history-head { display: flex; justify-content: space-between; 
	font-size: 22rpx; margin-bottom: 36rpx;}
	.search-history-list { display: flex; flex-wrap: wrap; }
	.search-history-list view { padding: 16rpx 28rpx; border-radius: 40rpx; 
	margin-right: 30rpx; margin-bottom: 30rpx; background-color: #F7F7F7;}
	
	.search-hot{ margin:30rpx 30rpx; font-size:26rpx; color:#bebebe;}
	.search-hot-title{}
	.search-hot-item{ display: flex; align-items: center; margin-top: 40rpx;}
	.search-hot-top{ width:60rpx; color:#fb2221; font-size:34rpx;}
	.search-hot-word{ flex:1;}
	.search-hot-word view:nth-child(1){ font-size:36rpx; color:black;}
	.search-hot-word image{ width:48rpx; height:22rpx;}
	.search-hot-count{ color: #878787}
	
	.search-result { border-top: 2rpx #e4e4e4 solid; padding:30rpx; }
	.search-result-item { display: flex; justify-content: space-between; 
	align-items: center; padding-bottom: 30rpx; margin-bottom: 30rpx; border-bottom: 2rpx #e4e4e4 solid;}
	.search-result-word {}
	.search-result-word view:nth-child(1){ font-size:28rpx; color:#235790;margin-bottom: 12rpx;}
	.search-result-word view:nth-child(2){ font-size:22rpx; color:#898989;}
	.search-result-item text{ font-size:50rpx;}
	
	.search-suggest { border-top: 2rpx #e4e4e4 sold; padding:30rpx; font-size: 26rpx; }
	.search-suggest-head { color: #4574a5; margin-bottom: 74rpx;  }
	.search-suggest-item { color: #5d5d5d; margin-bottom: 74rpx;}
	.search-suggest-item text { color: #bdbdbd; margin-right: 28rpx; position: relative; top:2rpx;}
</style>
