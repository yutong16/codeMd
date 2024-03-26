<template>
	<div>
		footer
		{{str}}
	</div>
</template>

<script type="text/javascript">
import bus from '@/common/bus'
export default {
	data () {
		return {
			str:''
		}
	},
	mounted(){
		bus.$on('toFooter',(data)=>{
			this.str=data;
		})
	}
}
</script>