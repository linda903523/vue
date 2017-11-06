<template>
    <div class="Adm">
        <div class="fl_search"><input type="text" v-model="message" placeholder="请输入菜名"><input type="button" value="搜索" @click="serach"></div>
        <table class="table table-hover">  
            <thead>
                <th v-for="(value, key) in dataset[0]" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{key}}</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr v-for="(obj, index) in dataset">
                    <td>{{obj.id}}</td>
                    <td>{{obj.name}}</td>
                    <td><img :src="obj.img" /></td>
                    <td>{{obj.price}}</td>
                    <td>{{obj.number}}</td>
                    <td>{{obj.type}}</td>
                    <td>{{obj.decorations}}</td>
                    <td>{{obj.status}}</td>
                    <td>{{obj.addTime}}</td>
                    <td>
                        <button type="button" class="btn btn-danger" @click="back_dele(obj.id)">删除</button>
                        <button type="button" class="btn btn-warning">停售</button>
                        <button type="button" class="btn btn-success" @click="jiaru(index)">添加</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <serach></serach>
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import loading from '../loading/loading.vue'
    import serach from '../serach/serach.vue'
  
    export default {
        data: function(){
            var colsArray = this.cols ? this.cols.split(',') : [];
            return {
                dataset: [],
                loadingShow: false,
                colsArray,
                name:[],
                price:[],
                img:[],
                decorations:[],
                message:'',
                serachnumber:[]
            }
        },
        props: ['cols'],
        mounted: function(){
            var self = this;
            http.get({
                url: 'select'
            }).then(res => {
                self.dataset = res.data
            })
        },
        methods: {
            back_dele: function(dele){
                var idx=dele
                http.post({
                    url: 'back_delete',
                    params:{
                        id:idx
                    }
                }).then(res => {
                    self.dataset = res.data
                })
            },
            jiaru:function(index){
                var cc =JSON.stringify(this.dataset[index]);
                http.post({
                    url:'car_insert',
                    params:{
                        cc:cc
                    }
                }).then(res=>{
                    // console.log(res);
                })
            },
            serach:function(){
                var self = this
                http.post({
                    url:'serach',
                    params:{
                        name:self.message
                    }
                }).then(res=>{
                    self.serachnumber=res.data;
                })
            }
        },
        components: {          
            loading,
            serach
        }
    }
</script>

