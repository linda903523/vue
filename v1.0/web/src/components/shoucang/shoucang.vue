<template>
    <datagrid aa="car_insert" api="select" my="my_select" cols="" :tools="tools"></datagrid>
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
        }
    }
</script>