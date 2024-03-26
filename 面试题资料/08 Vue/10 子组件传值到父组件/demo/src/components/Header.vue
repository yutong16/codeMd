<template>
	<div>
		子组件
		<input type="" name="" v-model='changeVal'>
	</div>
</template>

<script type="text/javascript">
export default {
	data () {
		return {
			changeVal:''
		}
	},
	watch:{
		changeVal(){
			this.$emit("childInput",this.changeVal);
		}
	}
}
</script>