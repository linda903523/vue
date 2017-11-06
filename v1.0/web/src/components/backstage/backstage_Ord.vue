<template>
    <div>
        <div class="bill_6">
            <h3 class="bill_h3"> 桌号22<span class="bill_span">关闭</span></h3>
            <ul>
                <li  v-for="(obj, index) in dataset">
                    <img :src="obj.img"  alt="" />
                    <span>菜名: {{obj.name}}{{obj.state}}   <span>数量: {{obj.number}}</span></span>
                    <p>备注:<i>{{obj.decorations}}</i></p>
                    <input class="fl_first" type="button" value="已下单" @click="wait(obj.name)" v-if="obj.status<=1"/>
                    <input type="button" value="准备" @click="plan(obj.name)" v-if="obj.status<=2"/>
                    <input type="button" value="完成" @click="complete(obj.name)"  v-if="obj.status<=3"/>
                </li>
                <h2 class="bill_h2">收起</h2>
            </ul>
        </div>
        <div class="bill_6">
            <h3 class="bill_h3"> 桌号23<span class="bill_span">关闭</span></h3>
            <ul>
                <li  v-for="(obj, index) in dataset">
                    <img :src="obj.img"  alt="" />
                    <span>菜名: {{obj.name}}{{obj.state}}   <span>数量: {{obj.number}}</span></span>
                    <p>备注:<i>{{obj.decorations}}</i></p>
                    <input class="fl_first" type="button" value="已下单" @click="wait(obj.name)" v-if="obj.status<=1"/>
                    <input type="button" value="准备" @click="plan(obj.name)" v-if="obj.status<=2"/>
                    <input type="button" value="完成" @click="complete(obj.name)"  v-if="obj.status<=3"/>
                </li>
                <h2 class="bill_h2">收起</h2>
            </ul>
        </div>
        <div class="bill_6">
            <h3 class="bill_h3"> 桌号24<span class="bill_span">关闭</span></h3>
            <ul>
                <li  v-for="(obj, index) in dataset">
                    <img :src="obj.img"  alt="" />
                    <span>菜名: {{obj.name}}{{obj.state}}   <span>数量: {{obj.number}}</span></span>
                    <p>备注:<i>{{obj.decorations}}</i></p>
                    <input class="fl_first" type="button" value="已下单" @click="wait(obj.name)" v-if="obj.status<=1"/>
                    <input type="button" value="准备" @click="plan(obj.name)" v-if="obj.status<=2"/>
                    <input type="button" value="完成" @click="complete(obj.name)"  v-if="obj.status<=3"/>
                </li>
                <h2 class="bill_h2">收起</h2>
            </ul>
        </div>
        <div class="bill_6">
            <h3 class="bill_h3"> 桌号25<span class="bill_span">关闭</span></h3>
            <ul>
                <li  v-for="(obj, index) in dataset">
                    <img :src="obj.img"  alt="" />
                    <span>菜名: {{obj.name}}{{obj.state}}   <span>数量: {{obj.number}}</span></span>
                    <p>备注:<i>{{obj.decorations}}</i></p>
                    <input class="fl_first" type="button" value="已下单" @click="wait(obj.name)" v-if="obj.status<=1"/>
                    <input type="button" value="准备" @click="plan(obj.name)" v-if="obj.status<=2"/>
                    <input type="button" value="完成" @click="complete(obj.name)"  v-if="obj.status<=3"/>
                </li>
                <h2 class="bill_h2">收起</h2>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpClient.js'
    import loading from '../loading/loading.vue'
    $(()=>{
        var socket = io("ws://localhost:8818");
        socket.on('finish', function(data){
            console.log(data)
        })
        $('#but').click(function(){
            socket.emit('pay',$('#mon').html());
        })
    })
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
            }
        },
        props: ['api', 'cols'],
        mounted: function(){
            var self = this;
            http.get({
                url: 'carlist'
            }).then(res => {
                self.dataset = res.data
            })
        },
        methods: {
            wait: function(e){

                var idx=e
                var self = this;
                http.post({
                    url: 'back_update',
                    params:{
                        myname:idx,
                        dd:1
                    }
                }).then(res => {
                    self.dataset = res.data
                })              
            },
            plan: function(e){
                var idx=e
                var self = this;
                http.post({
                    url: 'back_update',
                    params:{
                        myname:idx,
                        dd:2
                    }
                }).then(res => {
                    self.dataset = res.data
                })
            },
            complete: function(e){
                $(()=>{
                    var socket = io("ws://localhost:8818");
                        socket.emit('pay',3);
                })
                var idx=e
                var self = this;
                http.post({
                    url: 'back_update',
                    params:{
                        myname:idx,
                        dd:3
                    }
                }).then(res => {
                    console.log(222)
                    self.dataset = res.data
                })
            }
        },
        components: {
            loading
        }
    }
</script>