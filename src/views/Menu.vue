<template>
    <div>
        <mt-header primary="">
            <router-link to="/search" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <mt-tab>
            <mt-tab-item>
                <div class="play-wrap">
            <div style="text-align:left;" class="play" v-for="(item,index) of songs" :key="index">
                <router-link style="display:flex; " to="">
                    <a class="name"  style="margin:10px 0;line-height:20px;">{{item.song}}</a>
                    <a class="desc" style="margin-left:30px;margin:10px;line-height:20px; ">{{item.singer}}-{{item.subsinger}}</a>
                </router-link>
            </div>
        </div>
        <!-- <div class="play-end">
            <div>
                <img src="../assets/T002R300x300M000000MkMni19ClKG.jpg" alt="">
            </div>
            <div>
                <a class="name_">晴天</a>
                <a class="desc_">周杰伦-叶惠美</a>
            </div>
        </div>
        <div class="bottom">
            <div @click="show">
                <div class="zt">
                    <img src="../assets/playStrop.png" alt="" v-show="isShow">
                </div>
                <div class="musicplay">
                    <img src="../assets/playButton.png" v-show="!isShow" alt="">
                </div>
            </div>
            <div>
                <img src="../assets/playList.png" alt="">
            </div>
        </div> -->
            </mt-tab-item>
        </mt-tab>
    </div>
</template>
<script>
export default {
    data(){
        return{
            item:'周杰伦',
            isShow:true,
            songs:[
                {
                    song:'晴天',
                    singer:'周杰伦',
                    subsinger:'叶惠美'
                },
                 {
                    song:'七里香',
                    singer:'周杰伦',
                    subsinger:'七里香'
                },
                 {
                    song:'稻香',
                    singer:'周杰伦',
                    subsinger:'魔杰座'
                },
                 {
                    song:'告白气球',
                    singer:'周杰伦',
                    subsinger:'周杰伦的床边故事'
                },
                 {
                    song:'夜曲',
                    singer:'周杰伦',
                    subsinger:'十一月的肖邦'
                },
                 {
                    song:'一路向北',
                    singer:'周杰伦',
                    subsinger:'J III MP3 Player'
                },
                {
                    song:'刀马旦',
                    singer:'周杰伦',
                    subsinger:'J III MP3 Player'
                },
                 {
                    song:'屋顶',
                    singer:'周杰伦/温岚',
                    subsinger:'男女情歌对唱冠军总记录'
                },
                 {
                    song:'布拉格广场',
                    singer:'周杰伦/蔡依林',
                    subsinger:'巨星金曲-合唱篇'
                },
                {
                    song:'海盗',
                    singer:'周杰伦/蔡依林',
                    subsinger:'玻璃情缘-合唱篇'
                },
                {
                    song:'骑士精神',
                    singer:'周杰伦/蔡依林',
                    subsinger:'J-Top冠军精选'
                },{
                    song:'夜店咖',
                    singer:'嘻游记/周杰伦',
                    subsinger:'嘻游记'
                }
            ]
        }
    },
    spans:['天外来物','演员','我好像在哪见过你','刚刚好','绅士','意外','你还要我怎样','其实','怪咖','丑八怪'],
    methods:{
        show(){
            this.isShow=!this.isShow;
        }
    } 
}
</script>
<style scope>
    .mint-tab-item{
        padding:0 !important;
    }
    a{
        display:block;
    }
    .header{
        width:100%;
        background-size:100% auto;
        position:relative;
        transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
    .header img{
        position:absolute;
        top:1rem;
        left:1rem;
    }
    .header h1{
        text-align:center;
        padding:10px 0;
        font-size:24px;
        font-weight:lighter;
        color:#000;
    }
    .bg-img{
        background:url("../assets/timg.jpg") no-repeat;
        position:fixed;
        display:block;
        z-index:-100;
        width:100%;
        height:100%;
        background-size:100% 100%;
    }
    .play-wrap{
        width:100%;
        position:fixed;
        background-color:#222;
    }
    .play{
        padding:5px 15px;
        border-bottom:1px solid #333;
    }
    .name,.desc{
        color:#fff;
        padding:5px 0;
    }
    .desc{
        color:#999 !important;
        font-size:0.9rem;
    }
     .name_,.desc_{
        color:#fff;
        padding:10px 0;
        
    }
    .desc{
        color:#999;
    }
    .play-end{
        position:fixed;
        bottom:0;
        width:100%;
        height:70px;
        background-color:#333;
        background-size:100%;
        text-align:left;
    }
    .play-end img{
        border-radius:50%;
        width:4rem;
        height:4rem;
        position:fixed;
        left:1.5rem;
        bottom:0;
    }
    .play-end div{
        padding:0 100px;
    }
    .bottom{
        width:100%;
        background-size:100%;
        transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
        position:fixed;
        bottom:0.6rem;
        text-align:right;
    }
    .bottom img{
        width:2rem;
        padding:0 7px;
        height:2rem;
    }
    .zt,.musicplay{
        position:absolute;
        right:2.5rem;
    }
    .popup{
        width:100%;
        background-color:#999;
        padding:8px;
    }
    .popup_header div:nth-child(2) img{
        position:absolute;
        top:3.4rem;
        right:0.3rem;
        width:1.5rem;
        height:1.5rem;
    }
    .popup_center{
        padding:10px;
    }
    .popup_center span{
        font-size:1.1rem;
    }
    .popup_center img{
        float:right;
        width:1.1rem;
        height:1.1rem;
    }
</style>