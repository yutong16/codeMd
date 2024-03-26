<template>
	<div>
		父组件
		<Header :msg='msg'></Header>
	</div>
</template>

<script type="text/javascript">
import Header from './Header'
export default {
	data () {
		return {
			msg:'这是数据'
		}
	},
	components:{
		Header
	}
}	
</script>