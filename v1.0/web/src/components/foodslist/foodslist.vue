<template>
	<div>
		<!-- <h1>foods list</h1> -->
		<datagrid api="select" cols="" :tools="tools"></datagrid>
	</div>
</template>

<script type="text/javascript">
	import datagrid from '../datagrid/datagird.vue'
    import router from '../../router'
	//generate three buttons
	//$parent
	export default {
		components: {
			datagrid
		},
		data(){
			return {
                tools: {
                    add: {
                        text: '添加',
                        event: function(){
                            router.push({name: 'foodsform'})
                        }
                    }
                }
            }
		}
	}
</script>