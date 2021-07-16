import { baseUrl } from './config.js'

export function topList() {
	
	return new Promise((resolve, reject)=>{
		uni.request({
			url:`${baseUrl}/toplist/detail`,
			method:'GET',
			data: {},
			success: (res) => {
				// console.log("成功��)
				let result = res.data.list;
				result.length = 4;
				for(var i=0; i<listIds.length;i++){
					result[i].listId = listIds[i];
				}
				resolve(result)
			},
			fail: () => {
				
			},
			complete: () => {
				
			}
		});
	})
	
}
var listIds = ['19723756' , '3779629' , '2884035' , '3778678'];
export function list(listId){
	return uni.request({
		url: `${baseUrl}/playlist/detail/?id=${listId}`,
		method:'GET'
	});
}


// /song/detail?ids=1234567,12345678
export function songDetail(songId){
	return uni.request({
		url:`${baseUrl}/song/detail?ids=${songId}`,
		method:'GET'
	})
}

// /simi/song?id=1234567
export function songSimi(songId){
	return uni.request({
		url:`${baseUrl}/simi/song?id=${songId}`,
		method:'GET'
	})
}

// /comment/music?id=1234567
export function songComment(songId){
	return uni.request({
		url:`${baseUrl}/comment/music?id=${songId}`,
		method:'GET'
	})
}

// /lyric?id=1234567
export function songLyric(songId){
	return uni.request({
		url:`${baseUrl}/lyric?id=${songId}`,
		method:'GET'
	})
}

// /song/url?id=1235678
export function songUrl(songId){
	return uni.request({
		url:`${baseUrl}/song/url?id=${songId}`,
		method:'GET'
	})
}


// /search/hot/detail
export function searchHot(){
	return uni.request({
		url:`${baseUrl}/search/hot/detail`,
		method:'GET'
	})
}

// /search/?keywords=少年
export function searchWord(word){
	return uni.request({
		url:`${baseUrl}/search?keywords=${word}`,
		method:'GET'
	})
}

// /search/suggest?keywords=少年&type=mobile
export function searchSuggest(word){
	return uni.request({
		url:`${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method:'GET'
	})
}
