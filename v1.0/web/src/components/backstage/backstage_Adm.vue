<template>
    <div class="Adm">
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
                    <td>{{obj.addTime}}</td>
                    <td><button type="button" class="btn btn-del btn-danger" @click="back_dele(obj.id)">删除</button><button type="button" class="btn btn-danger">停售</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import loading from '../loading/loading.vue'
  
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
            decorations:[]
          }
        },
        props: ['api', 'cols'],
        mounted: function(){
            var self = this;
            http.get({
                url: 'back_select'
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
            }
        },
        components: {          
          loading
        }
    }
</script>
