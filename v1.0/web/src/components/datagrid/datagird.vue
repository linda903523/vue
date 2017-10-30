<template>
	<div id="datagrid">
		<!-- <h1>datagrid</h1>
		<table>
			<thead>
				<tr>
					<th v-for="(value, key) in dataset[0]" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{key}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(obj, index) in dataset">
					<td v-for="(value, key) in obj" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{value}}</td>
				</tr>
			</tbody>
		</table> -->
		<ul style="overflow:hidden">
			<li v-for="(obj, index) in dataset">
				<!-- <img src="../../img/green.jpg" alt=""> -->
				<p v-for="(value, key) in obj" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{value}}</p>
			</li>
		</ul>
		<loading v-show="loadingShow"></loading>
	</div>
</template>

<script type="text/javascript">
	import http from '../../utils/httpClient.js'
	import loading from '../loading/loading.vue'

	export default {
		data: function(){
			var colsArray = this.cols ? this.cols.split(',') : [];
			return {
				dataset: [],
				loadingShow: false,
				colsArray
			}
		},
		props: ['api', 'cols'],
		mounted: function(){
			var self = this;
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data
			})
		},
		components: {
			loading
		}
	}
</script>
<style>
	ul,li{list-style:none;}
	li{float:left;margin:10px;}
	#datagrid p{color:#000;margin:0;}
</style>