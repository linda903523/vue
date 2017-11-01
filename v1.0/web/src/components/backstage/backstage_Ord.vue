<template>
    <div class="bill_6">
        <h3 class="bill_h3"> 桌号22<span class="bill_span">关闭</span></h3>
        <ul>
            <li  v-for="(obj, index) in dataset">
                <img :src="obj.img"  alt="" />
                <span>菜名:{{obj.name}}{{obj.state}}</span>
                <p>备注:<i>空{{obj.decorations}}</i></p>

                <input type="button" value="等待" @click="wait" v-if="obj.state==1" style="color:red;"/>
                <input type="button" value="准备" @click="plan" v-if="obj.state==2 || obj.state==1" />
                <input type="button" value="完成" @click="complete" />
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
        decorations:[],
        shu:'',
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
    methods: {
      wait: function(e){
        $(e.target).css({color:'red'})
        console.log(this.shu)  
      },
      plan: function(e){
        this.shu=2
        $(e.target).css({color:'red'})
        $(e.target).prev('input').css({display:'none'})
        $(e.target).prev('input').css({color:''})
        console.log(this.shu)
      
      },
      complete: function(e){
        this.shu=3
        $(e.target).css({color:'red'})
        $(e.target).prev('input').css({display:'none'})
        console.log(this.shu)
      }
    },
    components: {
      loading
    }
  }
</script>