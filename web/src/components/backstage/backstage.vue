<template>
    <div id="btn" >
        <div id="header">  
            <h1>神马餐厅----后厨</h1>        
        </div>
        <div id="main" >            
            <div class="menu">
                <ul>
                    <li @click="ord">
                        <router-link to="/OrdFood">菜单列表</router-link> 
                    </li>
                    <li @click="adm">
                        <router-link to="/AdmFood">管理菜谱</router-link>
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
    import router from '../../router'
    import http from '../../utils/httpClient.js'
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
                $(e.target).parent('li').siblings('li').find('a').css({background:'orange'})
            },
            adm: function(e){
                $(e.target).css({background:'#fff'})
                $(e.target).parent('li').siblings('li').find('a').css({background:'orange'})
            }
        }
    }
</script>
