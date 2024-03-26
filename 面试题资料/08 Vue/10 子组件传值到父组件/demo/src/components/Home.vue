<template>
	<div>
		父  {{msgVal}}  组件
		<Header @childInput='getVal'></Header>
	</div>
</template>

<script type="text/javascript">
import Header from './Header'
export default {
	data () {
		return {
			msgVal:''
		}
	},
	components:{
		Header
	},
	methods:{
		getVal(msg){
			this.msgVal = msg;
		}
	}
}	
</script>