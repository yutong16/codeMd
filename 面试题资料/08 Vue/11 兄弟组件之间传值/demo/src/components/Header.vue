<template>
	<div>
		
		header
		<button @click='goFooter'>传过去了</button>
		
	</div>
</template>

<script type="text/javascript">
import bus from '@/common/bus'
export default {
	data () {
		return {
			msg:"这是兄弟数据"
		}
	},
	methods:{
		goFooter(){
			bus.$emit("toFooter",this.msg);
		}
	}
}
</script>