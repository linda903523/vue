<template>
    <ul class="love-ul">
       <li v-for="(obj,index) in love">
            <img :src="obj.img"/>
            <span id="love-span"><strong>{{obj.name}}</strong></span>
            <span style="font-size:30px;">{{obj.decorations}}</span>
            <span style="color:red;">{{obj.price}}元</span>
       </li>
    </ul> 
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    
    export default {
        data(){
            return {
                love:[]
            }
        },
        mounted:function(){
            var self = this;
            http.get({
                url: 'my_select'
            }).then(res => {
                self.love = res.data
            })            
        }
    }
</script>