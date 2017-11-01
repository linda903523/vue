<template>
    <div class="container">
        <header>
            <i class="ci-1"></i>
            <span class="ctime" >{{time}}</span>
            <i class="list-qian"  @click="qian"></i>
            <p>已点列表</p>
        </header>
        <div class="body">
            <h2 class="h1-1">菜单</h2>
            <carlist></carlist>
        </div>
        <footer>
            <div>
                <ul class="list-ul">
                    <li><span @click="qian">加菜</span></li>
                    <li class="list-money"><span></span></li>
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
         components:{
            foodslist,
            carlist,
         }
    }
</script>