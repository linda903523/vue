<template>
	<div>
		<datagrid api="select" cols="" @abc="aa"></datagrid>
	</div>
</template>
<script type="text/javascript">
	import datagrid from '../datagrid/datagird.vue'
	export default {
		components: {
			datagrid
		},
		data:function(){
			return {
				carlist:[]
			}
		},
		methods:{
			aa:function(a){
				this.carlist.push(a);
				a = this.carlist
				this.$emit('tong',a);
			}
		}
	}
</script>