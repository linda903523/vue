<template>
     <div class="container">
        <header>
            <p class="c-my">我的</p>
           <!--  <i class="ci-1"></i>
            <span class="ctime" >{{time}}</span>
            <i class="list-qian"  @click="qian"></i>
            <p>已点列表</p> -->
        </header>
        <div class="body">
            <!-- <ul class="list-ul-c">
                <li>
                   <h1 class="h1-1">热菜</h1>
                    <carlist v-if=""></carlist>
                </li>
            </ul> -->
        </div>
        <footer>
            <tong></tong>
        </footer>
    </div>
</template>
<script type="text/javascript">
import footer from '../footer/footer.vue'
export default {
    methods:{
    },
    components:{
        tong:footer
    }
}
</script>