<template>
    <div class="container">
        <header>
            <i class="ci-1"></i>
            <span class="ctime" >{{time}}</span>
            <i class="list-qian"  @click="qian"></i>
            <p>已点列表</p>
        </header>
        <div class="body">
            <ul class="list-ul-c">
                <li>
                    <div><span>热菜</span><span></span></div>
                    <carlist></carlist>
                </li>
                <li>
                    <div><span>冷菜</span><span></span></div>
                </li>
                <li>
                    <div><span>甜品</span><span></span></div>
                   
                </li>
                <li>
                    <div><span>饮料</span><span></span></div>
                    <router-view></router-view>

                </li>
               
            </ul>
        </div>
        <footer>
            <div>
            <ul class="list-ul">
                    <li><span >加菜</span></li>
                    <li><span></span></li>
                    <li><span>确认菜单</span></li>
            </ul>

                <ul class="list-ul">
                    <li><span>加菜</span></li>
                    <li><span></span></li>
                    <li><span>确认菜单</span></li>               
                </ul>
            </div>
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
                carnumber:''
            }
        },
        methods:{
            qian:function(){
                router.push({name:'home'})
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
         components:{
            foodslist,
            carlist,

         }

    }
</script>
