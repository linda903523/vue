<template>
    <div>
      <router-link :to="'/list/' + $route.params.canshu" v-aa>
        <ul v-for="(obj,index) in can">
            <li>
                <img :src="obj.img"/>
                <span>{{obj.name}}</span>
                <span>{{obj.price}}</span>
                <span>{{obj.type}}</span>
                <span>{{obj.decorations}}</span>
            </li>
        </ul>
      </router-link>
      
    </div>
</template>
<script type="text/javascript">
    export default {
        data:function(){
            return {
                can:''
            }
        },
        components: {
            
        },
        directives:{
            aa:function(){
            }
        },
        mounted:function(){
            this.can=JSON.parse(this.$route.params.canshu);
            console.log(this.can);
            
        }

    }
</script>