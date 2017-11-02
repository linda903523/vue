
<template>
    <div>
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
    export default {
        data:function(){
            return {
                carlist:[],
                can:'',
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
            }
        },
        components: {
        },
        directives:{
            aa:function(){
            }
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