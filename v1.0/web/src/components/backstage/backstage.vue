<template>
    <div id="btn" >
        <div id="header">  
            <h1>X X X 餐厅----后厨</h1>        
        </div>
        <div id="main" >            
            <div class="menu">
                <ul>
                    <li @click="ord">
                        <router-link to="/OrdFood">顾客点餐</router-link> 
                    </li>
                    <li @click="add">
                        <router-link to="/AddFood">添加菜单</router-link> 
                        
                    </li>
                    <li @click="adm">
                        <router-link to="/AdmFood">管理菜单</router-link>
                    </li>
                </ul>
            </div>
            <div class="bill">            
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue';
    import VueRouter from 'vue-router'
    import router from '../../router'
    import backstage_Ord from './backstage_Ord.vue'
    import backstage_Add from './backstage_Add.vue'
    import backstage_Adm from './backstage_Adm.vue'
    import './backstage.js';
    import './backstage.scss';
    
    export default {
        data() {
            return {
                total:0
            }
        },
        methods: {
            ord: function(e){
                $(e.target).css({background:'#fff'})
                $(e.target).parent('li').siblings('li').find('a').css({background:''})
            },
            add: function(e){
                $(e.target).css({background:'#fff'})
                $(e.target).parent('li').siblings('li').find('a').css({background:''})
            },
            adm: function(e){
                $(e.target).css({background:'#fff'})
                $(e.target).parent('li').siblings('li').find('a').css({background:''})
            }
        }
    }
</script>
