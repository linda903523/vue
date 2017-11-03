<template>
    <ul class="pinglun-ul">
        <li v-for="(obj, index) in pingdata" class="pinglun-li">
            <span class="pinglun-span1 ">{{obj.content}}</span>
            <span class="pinglun-span2 ">{{obj.addTime.substr(0,10)}}</span>
        </li>
    </ul>
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    
    export default {
        data:function(){
            return {
                pingdata:[],
            }
        },
         methods:{
            fa:function(){
            }
        },
        mounted:function(){
            var self = this;
            http.get({
                url: 'pinglun'
            }).then(res => {
                self.pingdata = res.data
            })
        }
    }
</script>