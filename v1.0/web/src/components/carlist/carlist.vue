<template>
    <div>
        <ul v-for="(obj,index) in carlist" class="carlist-ul">
            <li>
                <img :src="obj.img" class="img-carlist"/>
                <div class="carlist-div1 ">
                    <span>{{obj.name}}</span>
                    <span class="carlist-money">{{obj.price}}元</span>                    
                </div>
                <div class="carlist-div2 ">
                    <span>{{obj.decorations}}</span>
                    <i class="carlist-i1"></i>
                    <span class="cc-span">{{obj.number}}</span>
                    <i class="carlist-i2"></i>
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
                can:''
            }
        },
        methods:{
        },
        components: {
        },
        directives:{
            aa:function(){
            }
        },
        mounted:function(){
            var self = this;
            http.get({
                url: 'carlist'
            }).then(res => {
                self.carlist = res.data
            })
        }
    }
</script>