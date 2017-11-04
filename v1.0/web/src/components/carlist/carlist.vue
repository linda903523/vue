<template>
    <div class="container">
        <header>
            <i class="ci-1"></i>
            <span class="ctime" >{{time}}</span>
            <i class="list-qian"  @click="qian"></i>
            <p>购物车</p>
        </header>
        <div class="body">
            <ul v-for="(obj,index) in carlist" class="carlist-ul" v-if="show">
                <li class="carlistli">
                    <img :src="obj.img" class="img-carlist"/>
                    <div class="carlist-div1 ">
                        <span>{{obj.name}}</span>
                        <span  class="carlist-money">{{obj.price}}元</span>
                    </div>
                    <div class="carlist-div2 ">
                        <span>{{obj.decorations}}</span>
                        <span class="cc-span">{{obj.number}}</span>
                        <i class="carlist-i1" @click="cjian(index)"></i>
                        <i class="carlist-i2" @click="cjia(index)"></i>
                        <i class="carlist-i3" @click="car_delete(index)"></i>
                    </div>
                </li>
            </ul>
        </div>        
        <div>
            <ul class="list-ul">
                <li><span @click="qian">加菜</span></li>
                <li v-if="show"><span class="list-money">{{zongjia}}元<span>{{zongshu}}件</span></span></li>
                <li><span @click="cmoney">确认下单</span></li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import './carlist.scss'
    import router from '../../router'
    import $ from 'jquery'
    
    export default {
        data:function(){
            return {
                carlist:[],
                can:'',
                time:'',
                zongshu:0,
                zongjia:0,
                show:false,
                suiji:'',
                ws:''
            }
        },
        methods:{
            cjian:function(index){
                this.carlist[index].number--;
                var ccc=JSON.stringify(this.carlist[index]);
                http.post({
                    url: 'carlistjian',
                    params:{
                            ccc:ccc
                        }
                }).then(res => {
                   // console.log(res);
                })
               this.zongjia=this.zongjia-this.carlist[index].price;
               this.zongshu=this.zongshu-1;
            },
            cjia:function(index){
                this.carlist[index].number++;
                var cccc=JSON.stringify(this.carlist[index]);
                 http.post({
                    url: 'carlistjia',
                    params:{
                            cccc:cccc
                        }
                }).then(res => {
                   // console.log(res);
                })
                this.zongjia=this.zongjia+this.carlist[index].price;
                this.zongshu=this.zongshu+1;
            },
            cmoney:function(){
                var res = parseInt(Math.random()*1000000000);
                this.suiji=res;
                router.push({name: 'li', params: {number: this.suiji}});
                this.ws.send('您有新的订单:' + res);
            },
            qian:function(){
                router.push({name:'foodslist'})
            },
            list:function(){
                router.push({name: 'list'})              
            },
            my:function(){
                router.push({name:'my'})              
            },
            foodslist:function(){
                router.push({name:'foodslist'})
            },
            car_delete:function(index){
                var cc = JSON.stringify(this.carlist[index]);
                http.post({
                    url: 'car_delete',
                    params:{
                        cc:cc
                    }
                }).then(res => {
                    //console.log(res)
                })
                this.zongjia = this.zongjia-this.carlist[index].price*this.carlist[index].number;
                this.zongshu = this.zongshu-this.carlist[index].number;
                $('.carlistli')[index].remove();
            }, 
            cmy:function(){
                this.show=true;
                router.push({name:'my'})
            }
        },
        components: {
        },
        created: function () {
            var now = new Date();
            var hour = now.getHours();
            var min = now.getMinutes();
            hour = hour<10 ? '0'+hour : hour;
            min = min<10 ? '0'+min : min;
            this.time = hour + ':' + min;           
         },
        mounted:function(index){
            var self = this;
            http.get({
                url: 'carlist'
            }).then(res => {
                self.carlist = res.data
                for (var i=0;i<this.carlist.length;i++){
                    this.zongshu+=this.carlist[i].number;
                    this.zongjia+=this.carlist[i].number*this.carlist[i].price;
                }
            })
            this.show=true;    
            this.ws = new WebSocket("ws://10.3.131.7:888");
            this.ws.onmessage = function(_msg){
                // console.log(_msg.data);
            }       
        }
    }
</script>