<template>
    <div class="container">
        <header>
            <i class="ci-1"></i>
            <span class="ctime" >{{time}}</span>
            <i class="list-qian"  @click="qian"></i>
            <p class="c-my">我的订单</p>
        </header>
       <div class="body">
            <div class="dingdan"><span>单号：</span>{{$route.params.number.substring(0,9)}}</div>
            <ul v-for="(obj,index) in fl_list" class="carlist-ul list_ul">
                <li>
                    <div class="carlist-div1 ">
                        <p>菜名：<span>{{obj.name}}</span></p>
                        <p>价格：<span class="carlist-money">{{obj.price}}</span>元</p>
                        <p>数量：<span class="cc-span">{{obj.number}}</span>件</p>
                        <p>状态：<span v-if="obj.status==1" class="btn-danger socke">已下单</span>
                        <i v-if="obj.status==1" class="btn-primary" @click="socke_i(obj.name,index)">退单</i>
                            <span v-if="obj.status==2" class="btn-warning socke">准备中</span>
                            <span v-if="obj.status==3" class="btn-success socke">完成</span>
                            <span v-if="obj.status==4" class="btn-danger socke">已退单</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <footer class="list_footer">
            <ul class="home-c">
                <li @click="foodslist"><i class="ci-4"></i><span>点菜</span></li>
                <li @click="carlist"><i class="ci-5"></i><span>购物车</span></li>
                <li class="active"><i class="ci-6"></i><span>订单</span></li>
                <li @click="my"><i class="ci-7"></i><span>我的</span></li>
            </ul>
        </footer>
    </div>
</template>
<script type="text/javascript">
    import router from '../../router'
    import './list.scss'
    import http from '../../utils/httpClient.js'
    var socket = io("ws://localhost:8818");
    socket.on('oks',function(data){
        if(data[0]==3){
            $('.socke').eq(data[1]).html('完成').attr({class:"btn-success socke"})
            $('.socke').eq(data[1]).next('i').css({display:'none'})
        }
        if(data[0]==2){
            $('.socke').eq(data[1]).html('准备中').attr({class:"btn-warning socke"})
            $('.socke').eq(data[1]).next('i').css({display:'none'})
        }
    });
    
    export default {
        state: {
            name:'home',
            span_list: function(htm){
              var self = this;
                http.get({
                    url: 'carlist'
                }).then(res => {
                    self.fl_list = res.data
                })
            }
        },
        data:function(){
            return {
                time:'',
                fl_list:[],
                hao:'',
                tableNum:''
            }
        },
        created: function () {
            var now = new Date();
            var hour = now.getHours();
            var min = now.getMinutes();
            hour = hour<10 ? '0'+hour : hour;
            min = min<10 ? '0'+min : min;
            this.time = hour + ':' + min;           
         },
        methods:{
            foodslist:function(){
                router.push({name:'foodslist'})
            },
            qian:function(){
                router.push({name:'carlist'})
            },
            carlist:function(){
                router.push({name:'carlist'})
            },
            list:function(){
                router.push({name:'list'})
            },
            my:function(){
                router.push({name:'my'})
            },
            socke_i:function(name,dx){
                var dx=dx
                $(()=>{
                    var socket = io("ws://localhost:8818");
                    socket.emit('socke_i',dx);
                    $('.socke').eq(dx).css({display:'none'})
                })
                var idx=name
                 http.post({
                    url: 'back_update',
                    params:{
                        myname:idx,
                        dd:4
                    }
                }).then(res => {
                    self.dataset = res.data
                }) 
            }
        },
        mounted:function(index){
            var self = this;
            http.get({
                url: 'carlist'
            }).then(res => {
                self.fl_list = res.data
            })
        }
    }
</script>