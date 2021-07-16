<script>
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	.container {
		width: 100%;
		height: calc( 100vh - 70px);
		overflow: hidden;
	}
	.container scroll-view {
		height: 100%;
	}
	
	/*毛玻璃背景图 全局样式*/
	.fixbg {
		width:100%;
		height:100vh;
		position:fixed;
		left:0;
		top:0;
		/* background-image: url(static/imgs/whitedog.png); */
		background-size: cover;
		background-position: center 0;
		filter: blur(20px);
		transform: scale(1.1);
	}
</style>
