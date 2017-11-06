<template>
    <div>
        <ul id="fl_list">
            <li v-for="(value,index) in listNum">{{value}}</li>
        </ul>
        <div class="bill_6">
            <h3 v-for="(value,index) in zhuohao" @click="cai(value,index)" class="bill_h3"> 桌号:{{value}}</h3>
        </div>    
        <div class="c_caidan">
            <ul>
                <li  v-for="(obj, index) in numbercai">
                    <img :src="obj.img"  alt="" />
                    <span>菜名: {{obj.name}}{{obj.state}}   <span>数量: {{obj.number}}</span></span>
                    <p>备注:<i>{{obj.decorations}}{{obj.status}}</i></p>
                    <input type="button" value="已下单" @click="wait(obj.name)" v-if="obj.status<=1" class="btn-danger"/>
                    <input type="button" value="准备" @click="plan(obj.name,index)" v-if="obj.status<=2" class="btn-warning"/>
                    <input type="button" value="完成" @click="complete(obj.name,index)"  v-if="obj.status<=3" class="btn-success"/>
                    <input type="button" value="已退单" v-if="obj.status==4" class="btn-danger"/>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import loading from '../loading/loading.vue'
    var socket = io("ws://localhost:8818");
    socket.on('ok_i',function(data){
        $('.c_caidan ul li').eq(data).find('input').eq(0).nextAll().css({display:'none'})
        $('.c_caidan ul li').eq(data).find('input').eq(0).val('已退单')
    });
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
            $(()=>{
                var socket = io("ws://localhost:8818");
                socket.on('ok',function(data){
                    data = '您有新的订单:' + data;
                    var data1 = data.substring(0, 17);
                    var a = data.substring(17);
                    a = a.substring(0,a.length-1);
                    a = a.split(",");
                    var b=[];
                   $(a).each(function(i){
                       var str = $(a)[i];
                       var Num = Number(str);
                      b.push(Num);
                   })
                    self.zhuohao = b;
                    self.listNum.push(data1);
                });
            })        
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
            plan: function(e,dx){
                var dx=dx;
                $(()=>{
                    var socket = io("ws://localhost:8818");
                    socket.emit('pal',['2',dx]);
                })
                var idx=e;
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
            complete: function(e,dx){
                var dx=dx;
                $(()=>{
                    var socket = io("ws://localhost:8818");
                    socket.emit('pal',['3',dx]);
                })
                var idx=e;
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
                var idx = index;
                http.post({
                    url: 'carlist_serach',
                    params:{
                        zhuohao:value
                    }
                }).then(res => {
                  this.numbercai=res.data;
                })
                $('.bill_h3').eq(index).css({backgroundColor:'#fc5000'}).siblings().css({backgroundColor:'#fff'})
            }
        }
    }
</script>