<template>
	<div>
		<div class="toolbar">
			<input type="button" value="添加商品">
		</div>
		<div>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	//$children
	export default {
		methods: {
			generateToolBar: function(obj){
				//动态生成按钮
			}
		}
	}
</script>