<template>
    <div class="bill_6">
        <h3 class="bill_h3"> 桌号22<span class="bill_span">关闭</span></h3>
        <ul  v-for="(value, key) in dataset[0]" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">
            <li  v-for="(obj, index) in dataset">
                <img src="../../img/timg.jpg"  alt="" />
                
                <span>菜名:{{obj.name}}</span>
                <p>备注:<i>空{{obj.decorations}}</i></p>
                <input type="button" value="等待" />
                <input type="button" value="准备" />
                <input type="button" value="完成" />
            </li>
            <h2 class="bill_h2">收起</h2>
        </ul>
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