<template>
    <div class="form_row">
        <form >
            <div class="row">
              <div class="col-xs-2">
                <span>菜名: </span>
                <input type="text" class="form-control" value="" v-model="Row.name">
                <i v-if="Row.name == '' ">* 不能为空</i>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-2">
                <span>图片: </span>
                <input type="text" class="form-control" value=""v-model="Row.img">
                <i v-if="Row.img == '' ">* 不能为空</i>
              </div>
            </div>    
            <div class="row">
              <div class="col-xs-2">
                <span>价格: </span>
                <input type="text" class="form-control" value="" v-model="Row.price">
                <i v-if="Row.price == '' ">* 不能为空</i>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-2">
                <span>类型: </span>
                <select class="form-control" v-model="Row.type">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <i v-if="Row.type == '' ">* 不能为空</i>
              </div>
            </div>  
            <div class="row">
              <div class="col-xs-2">
                <span>描述: </span>
                <input type="text" class="form-control" value="addTime:" v-model="Row.decorations">
              </div>
            </div>
            <button type="button" class="btn btn-danger" @click="Row_btn" >添加</button>
        </form>
    </div> 
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    
    export default {
        data() {
            return {
                Row: {
                    name:'',
                    img:'',
                    price:'',
                    type:'',
                    number:'1',
                    decorations:'',
                    addTime:'1',
                    dd:'1'
                }
            }
        },
        mounted: function(){
            // console.log(this.Row)
        },
        methods:{
            Row_btn:function(){
                var ROW =JSON.stringify(this.Row);
                var self = this;
                http.post({
                    url:'backstage',
                    params:{
                    cc:ROW
                    }
                }).then(res=>{
                    // console.log(res);
                })
            }
        }
    }
</script>
v-moble