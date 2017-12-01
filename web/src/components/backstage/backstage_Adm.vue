<template>
    <div class="Adm">
        <div class="fl_search">
            <input type="text" v-model="message" placeholder="请输入菜名">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg" @click="serach">搜索</button>
        </div>
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
                        <button type="button" class="btn btn-primary">编辑</button>
                        <button type="button" class="btn btn-warning">停售</button>
                        <button type="button" class="btn btn-success"  data-toggle="modal" data-target=".bs-example-modal-sm" @click="jiaru(index)">添加</button>
                        <button type="button" class="btn btn-danger" @click="back_dele(obj.id)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>            
        <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myLargeModalLabel">{{message}}</h4>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li v-for="(obj,index) in dataset" >
                                <img :src="obj.img"/>
                                <p>{{obj.name}}</p>
                                <p>{{obj.price}}元</p>
                                <p>{{obj.decorations}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="mySmallModalLabel">添加成功</h4>
                    </div>
                </div>
            </div>
        </div>
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
                message:''
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
                    url: 'delete',
                    params:{
                        id:idx
                    }
                }).then(res => {
                    self.dataset = res.data
                })
            },
            jiaru:function(index){
                var cc =JSON.stringify(this.dataset[index]);
                var self = this;
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
                    self.dataset=res.data;
                })
            }
        }
    }
</script>