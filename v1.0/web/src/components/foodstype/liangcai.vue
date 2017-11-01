<template>
    <datagrid aa="insert" api="liang_select" cols="" @abc="aa"></datagrid>
</template>
<script type="text/javascript">
    import datagrid from '../datagrid/datagird.vue'
    import router from '../../router'

    export default {
        components: {
            datagrid
        },
        data(){
            return {
                carlist:[]
            }
        },
        methods:{
            aa:function(a){
                this.carlist.push(a);
                a = this.carlist
                this.$emit('tong',a);
            }
        }
    }
</script>