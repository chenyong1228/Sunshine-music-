<template>
    <div>
        <div class="d-heaher">
            <div class="i-left">
                <router-link to="/singer">
                    <img src="../assets/左边箭头.png" class="i-left">
                </router-link>
            </div>
            <div class="jay" align="center" style="color:white">周杰伦</div>
            <div class="kong"></div>
            <div class="player" align="center">
                <img src="../assets/播放全部.png" alt="">
            </div>
        </div>
        <!-- 选项卡 -->
        <mt-navbar v-model="active" class="bbb">
            <mt-tab-item :id="item.id" v-for="(item,index) of category" :key="index">{{item.category_name}}</mt-tab-item>      
        </mt-navbar>
        <router-link to="/player">  <!-- 歌曲列表 -->
        <div class="song-list" v-for="(v,i) of arr" :key="i" >
       <div >
             <a href="javascript:;"> {{v}}  </a>
             <img class="i-detail" src="../assets/VIP (1).png" slot="icon">
               
            </div>
            <div class="i-player">
                <img src="../assets/player.png" alt="">
            </div>
         
        </div>
          </router-link>
    </div>
    
</template>

<style>
    /* 上部分 */
    .d-heaher{
        height: 320px;
        width: 100%;
        background : url('../assets/img/Jay.jpg') no-repeat;
        background-size: cover;
    }
    /* 左边箭头 */
    .i-left{
        position: absolute;
        margin: 5px 10px ;
        width: 15px;
        height: 20px;
    }
    /* 中间span */
    .jay{
        padding-top: 10px;
        font-size:16px;
    }
    /* 空 */
    .kong{
        width: 100%;
        height: 230px;
    }
    /* 选项卡 */
    .bbb{
        background-color: #fff!important;
        
    }
    .mint-tab-item-label{
        color:#000!important;
        font-size: 14px!important;
        
    }
    .mint-navbar .mint-tab-item{
        padding: 10px 0px!important;
    }
    /* 歌曲列表 */
    .song-list{
        display: flex;
        justify-content: space-between;
        padding:15px 10px 0px 15px;
    }
    .song-list>div>a{
        /* padding: 10px 0px 10px 15px; */
        background-color: white;
        color:black!important;
    }
</style>

<script>
export default {
    data(){
        return{
            active:1,
            //导航栏
            category:[
                {
                    id:1,
                    category_name:'歌曲838'

                },
                {
                    id:2,
                    category_name:'专辑35'
                },
                {
                    id:3,
                    category_name:'视频1992'
                },
                {
                    id:4,
                    category_name:'关于他'
                }
            ],
            arr:['晴天','七里香','稻香','告白气球','黑色幽默','夜的第七章','以父之名'],
            
        }
    }
}
</script>