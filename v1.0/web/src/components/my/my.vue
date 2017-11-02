<template>
     <div class="container">
        <header>
            <i class="ci-1"></i>
            <span class="ctime" >{{time}}</span>
            <i class="list-qian"  @click="qian"></i>
            <p class="c-my">我的</p>
        </header>
        <div class="body">
        </div>
        <footer class="my_footer">
            <ul class="home-c">
                <li @click="foodslist"><i class="ci-4"></i><span>点菜</span></li>
                <li @click="carlist"><i class="ci-5"></i><span>购物车</span></li>
                <li @click="list"><i class="ci-6"></i><span>订单</span></li>
                <li class="active"><i class="ci-7"></i><span>我的</span></li>
            </ul>
        </footer>
    </div>
</template>
<script type="text/javascript">
    import router from '../../router'
    import './my.scss'
    export default {
        data:function(){
            return {
                time:''
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
                router.push({name:'list'})
            },
            carlist:function(){
                router.push({name:'carlist'})
            },
            list:function(){
                router.push({name:'list'})
            }
        },
        components:{
        }
    }
</script>