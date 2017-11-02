
<template>

    <!-- <div>
        <ul v-for="(obj,index) in carlist" class="carlist-ul">
            <li>
                <img :src="obj.img" class="img-carlist" />
                <div class="carlist-div1 ">
                    <div>{{obj.nianling}}</div>
                    <div>{{obj.miaoshu}}</div>
                </div>
                <div class="carlist-div2 ">
                    <span class="carlist-money">{{obj.jiage}}元</span>
                    <i class="carlist-i1" @click="cjian(index)"></i>
                    <span class="cc-span" ref="one"  >{{obj.number}}</span>
                    <i class="carlist-i2" @click="cjia(index)"></i>
                </div>
            </li>
        </ul>
    </div>
    </template>
    <script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import './carlist.scss'
     -->
    <div class="container">
        <header>
            <i class="ci-1"></i>
            <span class="ctime" >{{time}}</span>
            <i class="list-qian"  @click="qian"></i>
            <p>购物车</p>
        </header>
        <div class="body">
            <h2 class="h1-1">菜单</h2>
            <ul v-for="(obj,index) in carlist" class="carlist-ul">
                <li>
                    <img :src="obj.img" class="img-carlist"/>
                    <div class="carlist-div1 ">
                        <span>{{obj.name}}</span>
                        <span class="carlist-money">{{obj.price}}元</span>
                        <i class="carlist-i1"></i>
                    </div>
                    <div class="carlist-div2 ">
                        <span>{{obj.decorations}}</span>
                        <span class="cc-span">{{obj.number}}</span>
                        <i class="carlist-i2"></i>
                        <i class="carlist-i3" @click="car_delete(index)"></i>
                    </div>
                </li>
            </ul>
        </div>        
        <footer class="fl_footer">
            <div>
                <ul class="list-ul">
                    <li><span @click="qian">加菜</span></li>
                    <li><span class="list-money"></span></li>
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
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import './carlist.scss'
    import router from '../../router'
    import foodslist from '../foodslist/foodslist.vue'
    import $ from 'jquery'
    

    export default {
        data:function(){
            return {
                carlist:[],
                can:'',
                time:'',      
                carnumber:''

                // number:obj.number
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
                   console.log(res);
                })
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
                   console.log(res);
                })

            },
             tanchuang() {
                this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
                  dangerouslyUseHTMLString: true
                });
            },
       
            qian:function(){
                router.push({name:'foodslist'})
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
            }
        },
        components: {
            foodslist
        },
        directives:{
            aa:function(){
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
        mounted:function(index){
            var self = this;
            http.get({
                url: 'carlist'
            }).then(res => {
                self.carlist = res.data
            })
        }
    }
</script>