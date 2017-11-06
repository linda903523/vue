<template>
    <div>
        <ul id="fl_list">
            <li v-for="(value,index) in listNum">{{value}}</li>
        </ul>
        <div class="bill_6">
            <h3 v-for="(value,index) in zhuohao" @click="cai(value,index)"> 桌号:{{value}}</h3>
        </div>    
        <div class="c_caidan">
            <ul>
                <li  v-for="(obj, index) in numbercai">
                    <img :src="obj.img"  alt="" />
                    <p>菜名: {{obj.name}}{{obj.state}}</p>
                    <p>数量: {{obj.number}}</p>
                    <p>备注:<i>{{obj.decorations}}</i></p>
                    <input type="button" value="已下单" class="btn-danger"/>
                    <input type="button" value="准备" @click="plan(obj.name)" class="btn-warning"/>
                    <input type="button" value="完成" @click="complete(obj.name)" class="btn-success"/>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    
    export default {
        data: function(){
            return {
                loadingShow: false,
                name:[],
                price:[],
                img:[],
                decorations:[],
                listNum:[],
                zhuohao:[],
                numbercai:[],
                ws:''
            }
        },
        mounted: function(){
            var self = this;
            http.get({
                url: 'carlist'
            }).then(res => {
                self.numbercai = res.data
            })
            this.ws = new WebSocket("ws://localhost:888");
            this.ws.onmessage = function(_msg){
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
                    self.numbercai = res.data
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
                    self.numbercai = res.data
                })
            },
            cai:function(value,index){
                http.post({
                    url: 'carlist_serach',
                    params:{
                        zhuohao:value
                    }
                }).then(res => {
                  this.numbercai=res.data;
                })
            }
        }
    }
</script>