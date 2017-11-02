<template>
    <div class="container">
        <header>
            <i class="ci-1"></i>
            <span class="ctime" >{{time}}</span>
            <i class="list-qian"  @click="qian"></i>
            <p>购物车</p>
        </header>
        <div class="body">
            <ul class="list-ul-c">
                <li>
                   <h1 class="h1-1">热菜</h1>
                    <carlist v-if=""></carlist>
                </li>
            </ul>
        </div>
        <footer class="fl_footer">
            <div>
            <ul class="list-ul">
                    <li ><span @click="qian">加菜</span></li>
                    <li id="list-money" ><span>{{zongshu}}份<span class="list-cspan">共{{zongjia}}元</span></span><span></span></li>
                    <li  @click="cmoney"><span>确认菜单</span></li>
            </ul>
            <h2 class="h1-1">菜单</h2>
           <!--  <carlist></carlist> -->
        </div>        
        
            <div>
                <ul class="list-ul">
                    <li><span @click="qian">加菜</span></li>
                    <li class="list-money"><span></span></li>
                    <li><span>确认菜单</span></li>
                </ul>
            </div>
            <ul class="home-c">
                <li><i class="ci-4"></i><span @click="foodslist">点菜</span></li>
                <li class="active"><i class="ci-5"></i><span>购物车</span></li>
                <li><i class="ci-6"></i><span>订单</span></li>
                <li><i class="ci-7"></i><span>我的</span></li>
            </ul>
        </footer>
    </div>
</template>
<script>
    import './list.scss'
    import router from '../../router'
    import foodslist from '../foodslist/foodslist.vue'
    import carlist from '../carlist/carlist.vue'

    export default {
        data:function(){
            return {
                time:'',
                carnumber:'',
                zongshu:'',
                zongjia:'',
                show:false,
            }
        },
        methods:{
            qian:function(){

                this.show=true;
                router.push({name:'foodslist'})
            },
            cmoney:function(){
                var shuliang = this.$children[0].carlist;
                var cshu=0;
                var titole=0;
                for(var i=0;i<shuliang.length;i++){
                    cshu+=shuliang[i].number;
                    titole+=shuliang[i].number*shuliang[i].jiage;
                }
                this.zongshu=cshu;
                this.zongjia=titole;
            },
            foodslist:function(){
                router.push({name:'foodslist'})
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
         mounted:function(){
         },
         components:{
            foodslist,
            carlist,
         },
        //  directives: {
        //     //注册一个局布指令 v-private
        //     cmoney: function(element){
                
                
        //     }
        // }

    }

</script>