<template>
    <div class="container">
        <header>
            <span class="list-span" @click="qian"> 向前</span>
            <p>已点列表</p>
        </header>
        <div class="body">
            <ul class="list-ul-c">
                <li>
                    <div><span>热菜</span><span></span></div>
                </li>
                <li>
                    <div><span>冷菜</span><span></span></div>
                </li>
                <li>
                    <div><span>甜品</span><span></span></div>
                </li>
                <li>
                    <div><span>饮料</span><span></span></div>
                </li>
            </ul>
        </div>
        <footer>
            <div>
                <ul class="list-ul">
                    <li><span @click="number">加菜</span></li>
                    <li><span></span></li>
                    <li><span>确认菜单</span></li>               
                </ul>
            </div>
        </footer>
    </div>
</template>
<script>
    import './list.scss'
    import router from '../../router'
    
    export default {
        methods:{
            number:function(){
                
            },
            qian:function(){
                router.push({name:'home'})
            }
        }
    }
</script>
