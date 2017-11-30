<template>
    <ul class="serach">
        <li v-for="(obj,index) in serachnumber" >
            <img :src="obj.img"/>
            <span>{{obj.name}}</span>
            <span>{{obj.price}}元</span>
            <span>{{obj.decorations}}</span>
        </li>
    </ul>
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
   
    export default {
        data:function(){
            return {
                serachnumber:[]
            }
        },
        methods:{
        },
        mounted:function(){
            this.serachnumber = this.$parent.serachnumber;
        } 
    }
</script>
<style>
    .serach li{width:100%;}
    .serach img{width:100%;height:500px;}
    .serach span:nth-child(2){font-weight:600;margin-right:20px;}
    .serach span:nth-child(3){color:#fc5000;font-weight:600;margin-right:20px;}
</style>