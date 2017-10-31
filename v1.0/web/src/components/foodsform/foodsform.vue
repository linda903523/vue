<template>
    <div class="fl-form">
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
                    <span class="col-sm-12 control-label">描述</span>
                </div>
                <div class="col-sm-2">
                    <div class="fl-form-element">
                        <input type="text" name="decorations" v-model="dataform.decorations" class="form-control required">
                    </div>
                </div>
            </div>
            <div class="form-group">
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
</template>datepicker
<script type="text/javascript">
    import router from '../../router'
    import http from '../../utils/HttpClient'
    import $ from 'jquery'
	
    export default {
        data(){
            return {
                dataform: {},
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
            this.$parent.addTool(tools);
        }
    }
</script>