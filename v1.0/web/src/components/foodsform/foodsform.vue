<template>
    <div class="fl-form">
        <div class="fl-toolbar">
            <a href="javascript:" class="btn btn-primary btn-sm" :class="value.class" v-if="toolList" v-for="(value,key) in toolList" @click="click(value)">{{value.text ? value.text : key}}</a>
        </div>
        <form ref="foodsForm" role="form" class="form-horizontal ng-pristine ng-valid">
            <div class="form-group">
                <div class="col-sm-1">
                    <span class="col-sm-12 control-label">菜名</span>
                </div>
                <div class="col-sm-2">
                    <div class="fl-form-element">
                        <input type="text" name="name" v-model="dataform.name" class="form-control required">
                    </div>
                </div>
                <div class="col-sm-1">
                    <span class="col-sm-12 control-label">价格</span>
                </div>
                <div class="col-sm-2">
                    <div class="fl-form-element">
                        <input type="text" name="price" v-model="dataform.price" class="form-control required">
                    </div>
                </div>
                <div class="col-sm-1">
                    <span class="col-sm-12 control-label">类型</span>
                </div>
                <div class="col-sm-2">
                    <div class="fl-form-element">
                        <input type="text" name="type" v-model="dataform.type" class="form-control required">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script type="text/javascript">
    import router from '../../router'
    import http from '../../utils/HttpClient'
    import $ from 'jquery'
	
    export default {
        data(){
            return {
                dataform: {},
                toolList: null,
                // toolbar_id: 'toobar_' + parseInt(Math.random() * 10000)
            }
        },
        props: ['toolbar','tools'],
        methods: {
            addTool(arg){
                this.toolList = arg
            },
            click(arg){
                if(arg.event){
                    arg.event()
                }
            }
        },
        created(){
            // this.$parent.$emit('dk','hehe')
            var self = this;
            var tools = {
                add: {
                    text: '保存',
                    event: () => {
                        if(!$(this.$refs.foodsForm).valid()){
                            return false;
                        }
                        http.post('insert', self.dataform)
                        .then(response => {
                            if(response.status){
                                $.alert('保存成功!', function(){
                                    router.push({name: 'foodslist'});
                                })
                            } else {
                                $.alert(response.msg);
                            }
                        })
                    },
                },
                back: {
                    text: '返回',
                    class: 'btn-goback',
                    event: () => {
                        router.push({name: 'foodslist'})
                    }
                }
            }
            this.addTool(tools);
        }
    }
</script>
<style>
    .fl-toolbar{ background: #fff;text-align:right;}
    .btn-goback{background-color: #e6674a;border-color: #e6674a}
    .form-horizontal{margin-top:10px;}
</style>