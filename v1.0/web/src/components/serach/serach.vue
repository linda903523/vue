<template>
    <ul class="serach">
        <li v-for="(obj,index) in serachnumber" >
            <img :src="obj.img"/>
            <span>{{obj.name}}</span>
            <span>{{obj.miaoshu}}</span>
            <span>{{obj.jiage}}</span>
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