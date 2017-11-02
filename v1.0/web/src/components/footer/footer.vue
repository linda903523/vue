<template>
    <ul class="home-c">
        <li><i class="ci-4"></i><span @click="fl_order">点菜</span></li>
        <li><i class="ci-5"></i><span>大家</span></li>
        <li><i class="ci-6"></i><span @click="cgoodlist">订单</span></li>
        <li @click="my"><i class="ci-7"></i><span>我的</span></li>
    </ul>
</template>
<script type="text/javascript">
import router from '../../router'
export default {
    methods:{
        fl_order(){
                    this.show=true;
                    router.push({name:'foodslist'})
                },
        cgoodlist:function(){
                this.show=true;
                router.push({name:'list'})              
            },
        my:function(){
                this.show=true;
                router.push({name:'my'})
                // console.log();
            }

    }
   
}
</script>
