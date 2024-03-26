<template>
	<view class="content">
        <!-- #ifdef H5 -->
            <h1>这是h5端</h1>
        <!-- #endif -->
        
        <!-- #ifdef APP -->
            <h2>这是APP</h2>
        <!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
        onLaunch(){
            console.log('onLaunch 触发一次');
        },
        onShow(){
            console.log('onShow 从后台进入前台显示');
        },
        onHide(){
            console.log('onHide 从前台进入后台');
        },
		methods: {
            
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
