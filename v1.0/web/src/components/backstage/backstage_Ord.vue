<template>
    <div>
        <ul id="fl_list">
            <li v-for="(value,index) in listNum">{{value}}</li>
        </ul>
        <div class="bill_6" v-for="(value,index) in zhuohao">
            <h3 class="bill_h3" @click="cai(value)"> 桌号:{{value}}</h3>
           <!--  <ul>
                <li  v-for="(obj, index) in dataset">
                    <img :src="obj.img"  alt="" />
                    <span>菜名: {{obj.name}}{{obj.state}}   <span>数量: {{obj.number}}</span></span>
                    <p>备注:<i>{{obj.decorations}}</i></p>
                    <input type="button" value="已下单" @click="wait(obj.name)" v-if="obj.status<=1" class="btn-danger"/>
                    <input type="button" value="准备" @click="plan(obj.name)" v-if="obj.status<=2" class="btn-warning"/>
                    <input type="button" value="完成" @click="complete(obj.name)"  v-if="obj.status<=3" class="btn-success"/>
                </li>
                <h2 class="bill_h2">收起</h2>
            </ul> -->
        </div>
        <div class="c_caidan">
              <ul>
                <li  v-for="(obj, index) in numbercai">
                    <img :src="obj.img"  alt="" />
                    <span>菜名: {{obj.name}}{{obj.state}}   <span>数量: {{obj.number}}</span></span>
                    <p>备注:<i>{{obj.decorations}}</i></p>
                    <input type="button" value="已下单" @click="wait(obj.name)" v-if="obj.status<=1" class="btn-danger"/>
                    <input type="button" value="准备" @click="plan(obj.name)" v-if="obj.status<=2" class="btn-warning"/>
                    <input type="button" value="完成" @click="complete(obj.name)"  v-if="obj.status<=3" class="btn-success"/>
                </li>
                <h2 class="bill_h2">收起</h2>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import loading from '../loading/loading.vue'
    export default {
        data: function(){
            return {
                dataset: [],
                loadingShow: false,
                name:[],
                price:[],
                img:[],
                decorations:[],
                listNum:[],
                zhuohao:[],
                numbercai:[]
            }
        },
        mounted: function(){
            var self = this;
            http.get({
                url: 'carlist'
            }).then(res => {
                self.dataset = res.data
            })
            var ws = new WebSocket("ws://localhost:888");
            ws.onmessage = function(_msg){
                var data = _msg.data;
                var data1 = data.substring(0, 17);
                var a = data.substring(17);
                a = a.substring(0,a.length-2);
                a = a.split(",");
                var b=[];
               $(a).each(function(i){
                   var str = $(a)[i];
                   var Num = Number(str);
                  b.push(Num);
               })
                self.zhuohao = b;
                self.listNum.push(data1);
            }
            
        },
        methods: {
            wait: function(e){
                var idx=e
                var self = this;
                http.post({
                    url: 'back_update',
                    params:{
                        myname:idx,
                        dd:1
                    }
                }).then(res => {
                    self.dataset = res.data
                })              
            },
            plan: function(e){
                var idx=e
                var self = this;
                http.post({
                    url: 'back_update',
                    params:{
                        myname:idx,
                        dd:2
                    }
                }).then(res => {
                    self.dataset = res.data
                })
            },
            complete: function(e){
                var idx=e
                var self = this;
                http.post({
                    url: 'back_update',
                    params:{
                        myname:idx,
                        dd:3
                    }
                }).then(res => {
                    self.dataset = res.data
                })
            },cai:function(value,e){
                http.post({
                    url: 'carlist_serach',
                    params:{
                        zhuohao:value
                    }
                }).then(res => {
                  this.numbercai=res.data;
                })
            }
        },
        components: {
            loading
        }
    }
</script>