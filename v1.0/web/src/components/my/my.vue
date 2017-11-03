<template>
     <div class="container">
        <header>
            <p class="c-my">我的</p>
        </header>
        <div class="body">
            <ul class="my-ul">
                <li  class="my-li1 li" @click="cmyshow">
                <h1>我的评论</h1><span class="my-span">></span>
                </li>
                <pinglun v-if="showw" ></pinglun>
                <li class="my-li2 li" @click="myshow">
                <h1 class="my-h1">我的收藏</h1><span class="my-span">></span>
                <shoucang v-if="show"></shoucang>
                </li>
                <li class="my-li3 li">
                    <h1 @click="chuxian">欢迎评分</h1><span class="my-span">></span>
                </li>
                <div class="my-div" v-if="showww">
                    <fen ></fen>
                    <input type="button" value="提交" @click="tijiao">
                </div>
            </ul>
        </div>
        <footer class="fl_footer">
            <ul class="home-c">
                <li @click="foodslist" ><i class="ci-4"></i><span>点菜</span></li>
                <li @click="carlist"><i class="ci-5"></i><span>购物车</span></li>
                <li @click="list"><i class="ci-6"></i><span>订单</span></li>
                <li class="active"><i class="ci-7"></i><span>我的</span></li>
            </ul>
        </footer>
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import router from '../../router'
    import shoucang from '../shoucang/shoucang.vue'
    import pinglun from '../pinglun/pinglun.vue'
    import pingfen from '../pingfen/pingfen.vue'
    import './my.scss'
    export default {
       data:function(){
            return {
                showww:false,
                show:false,
                showw:false
            }
        },
        methods:{
            foodslist:function(){
                router.push({name:'foodslist'})
            },
            list:function(){
                this.show=true;
                router.push({name:'list'})              
            },
            carlist:function(){
                router.push({name:'carlist'})  
            },
            my:function(){
                this.show=true;
                router.push({name:'my'})
            },
            myshow:function(){
                this.show= this.show==true ? false : true
            },
             cmyshow:function(){
                this.showw= this.showw==true ? false : true
            },
            chuxian:function(){
                this.showww= this.showww==true ? false : true
            },
            tijiao:function(){
                var message=this.$children[0].message;
                console.log(message);
                    http.post({
                    url: 'review_insert',
                    params:{
                        content:message,
                        star:1
                    }
                    }).then(res => {
                    })
            }
        },
        components:{
            shoucang,
            pinglun,
            fen:pingfen
        }
       
    }
</script>