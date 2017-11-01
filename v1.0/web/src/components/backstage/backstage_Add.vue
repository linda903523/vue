<template>
<div class="form_row">
    <form >
        <div class="row">
          <div class="col-xs-2">
            <span>菜名: </span>
            <input type="text" class="form-control" value="name:菜名" v-model="Row.name">
            <i>* 不能为空</i>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2">
            <span>价格: </span>
            <input type="text" class="form-control" value="price:"v-model="Row.price">
            <i>* 不能为空</i>
          </div>
        </div>    
        <div class="row">
          <div class="col-xs-2">
            <span>图片: </span>
            <input type="text" class="form-control" value="img:" v-model="Row.img">
            <i>* 不能为空</i>
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
            <i>* 不能为空</i>
          </div>
        </div>  
        <div class="row">
          <div class="col-xs-2">
            <span>描述: </span>
            <input type="text" class="form-control" value="decorations:" v-model="Row.decorations">
            <i>* 不能为空</i>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2">
            <span>时间: </span>
            <input type="text" class="form-control" value="addTime:" v-model="Row.addTime">
          </div>
        </div>
    </form>
    <div class="btn_ton">
        <button type="button" class="btn btn-danger" @click="Row_btn">添加</button>
    </div>
</div> 
</template>
<script type="text/javascript">
    
    export default {
      data() {
        return {
          Row: {
            name:'',
            price:'',
            img:'',
            type:'',
            addTime:'',
            decorations:''
          }
        }
      },
      mounted: function(){
        console.log(this.Row)
      },
      methods:{
        Row_btn:function(){
          console.log(this.Row)
        }
      }
    }
</script>