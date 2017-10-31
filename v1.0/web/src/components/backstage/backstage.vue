<template>
    <div id="btn" >
        <div id="header">  
            <h1>X X X 餐厅----后厨</h1>           
        </div>
        <div id="main" >
            <div class="menu">
                <ul>
                <li @click="lic">顾客点餐</li>
                <li @click="lic">添加菜单</li>
                <li @click="lic">管理菜单</li>
                </ul>
            </div>
            <div class="bill">
                <div class="bill_6">
                    <h3> 桌号22<span>关闭</span></h3>
                    <ul>
                        <li>
                            <img src="../../img/timg.jpg"  alt="" />
                            <span>菜名</span>
                            <p>备注:<i>空</i></p>
                            <input type="button" value="等待" />
                            <input type="button" value="准备" />
                            <input type="button" value="完成" />
                        </li>
                        <h2>收起</h2>
                    </ul>
                </div>
            </div>
        </div>
        <div class="add_menu">
            <p><input type="text" placeholder="id"></p>
            <p><input type="text" placeholder="name"></p>   
            <p><input type="text" placeholder="img"></p>    
            <p><input type="text" placeholder="prcit"></p>  
            <p><input type="text" placeholder="m"></p>  
            <p><input type="text" placeholder="id"></p> 
        </div>
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue';
    import VueRouter from 'vue-router'
    import router from '../../router'
    //import './backstage.js';
    import './backstage.scss';
    export default {        
        methods: {
            lic1:function(){
                router.push({name:'home'})
            },
            lic: function(){
                console.log(this)                
            }
        },
        mounted: function(){}        
    }    
</script>
