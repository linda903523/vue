<template>
<div class="Adm">
    <table class="table table-hover">  
        <thead>
            <th>img</th>
            <th v-for="(value, key) in dataset[0]" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{key}}</th>
        </thead>
        <tbody>
            <tr v-for="(obj, index) in dataset">
                <td><img src="../../img/timg.jpg"></td>
                <td v-for="(value, key) in obj" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{value}}</td>
                <td><button type="button" class="btn btn-danger">删除</button></td>
            </tr>
            
        </tbody>
    </table>

</div>
</template>
<script type="text/javascript">
    import './backstage_Adm.scss'
    import http from '../../utils/httpClient.js'
  import loading from '../loading/loading.vue'
  
  export default {
    data: function(){
      var colsArray = this.cols ? this.cols.split(',') : [];
      return {
        dataset: [],
        loadingShow: false,
        colsArray,
        name:[],
        price:[],
        img:[],
        decorations:[]
      }
    },
    props: ['api', 'cols'],
    mounted: function(){
      var self = this;
      http.get({
        url: 'select'
      }).then(res => {
        self.dataset = res.data
      })
    },
    components: {
      
      loading
    }
  }
</script>
