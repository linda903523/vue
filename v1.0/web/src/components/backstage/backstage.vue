<template>
    <div id="btn" >
        <div id="header">  
            <h1>X X X 餐厅----后厨</h1>
           
        </div>
        <div id="main" >
            
            <div class="menu">
                <ul>
                <li>
                    <router-link to="/OrdFood">顾客点餐</router-link> 
                </li>
                <li>
                    <router-link to="/AddFood">添加菜单</router-link> 
                    
                </li>
                <li>
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
    import backstage_Ord from '../backstage_Ord/backstage_Ord.vue'
    import backstage_Add from '../backstage_Add/backstage_Add.vue'
    import backstage_Adm from '../backstage_Adm/backstage_Adm.vue'
    import './backstage.js';
    import './backstage.scss';
    export default {
        
        
        
    }
        

    
</script>
