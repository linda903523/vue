<template>
    <datagrid api="tian_select" cols="" @abc="aa" :tools="tools"></datagrid>
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
                carlist:[],
                tools: {
                    add: {
                        text: '添加',
                        event: function(){
                            router.push({name: 'foodsform'})
                        }
                    }
                }
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