<template>
	<div>
		<h1>foods list</h1>
		<datagrid api="select" cols=""></datagrid>
	</div>
</template>

<script type="text/javascript">
	import datagrid from '../datagrid/datagird.vue'
	//generate three buttons
	//$parent
	export default {
		components: {
			datagrid
		}
	}
</script>