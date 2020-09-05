
<template>
 <div class="div2" style="background:#000; color:#fff; ">
    <!-- 顶部导航开始 -->
    <mt-header title="Sunshine music">
        <div slot="right" class="shortcut">
            <router-link to="/">
              <mt-button>
                <img src="../assets/user1.png" slot="icon">
              </mt-button>
            </router-link>
        </div>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
        <mt-tab-item id="1">
        <router-link to="/"> 推荐</router-link>
          </mt-tab-item>
         <mt-tab-item id="2">
        <router-link to="/singer"> 歌手</router-link>
          </mt-tab-item>
         <mt-tab-item id="3">
        <router-link to="/there"> 排行</router-link>
          </mt-tab-item>
         <mt-tab-item id="4">
        <router-link to="/search"> 搜索</router-link>
          </mt-tab-item>
    </mt-navbar> 
       <!--顶部选项卡结束  -->
  <div style="margin:5 auto; width:100%; height:100%;">
<mt-swipe :auto=4000 class='img'>
  <mt-swipe-item>
    <img style="width:100%;  " src="../assets/01.jpg" alt="">
    </mt-swipe-item>
  <mt-swipe-item>
    <img style="width:100%;  "  src="../assets/02.jpg" alt="">
    </mt-swipe-item>
  <mt-swipe-item>
    <img style="width:100%;  "  src="../assets/03.jpg" alt="">
    </mt-swipe-item>
    <mt-swipe-item>
    <img style="width:100%;  " src="../assets/04.jpg" alt="">
</mt-swipe-item>
 </mt-swipe>
</div>
<div style="color:yellow; background:#000; margin:10px auto; text-align:center;">热门歌单推荐</div>
   <div   v-for="(item,index) of arr" :key="index"   >
    <mt-tab-container >
     <mt-tab-container-item >
   <div style="display: flex; border:1px solid #333">
      <div style="width:100px;height:100px;">
         <img :src="item.img"  style="width:100px;height:100px;">
      </div>
      <div>
      <router-link :to="`/list/${item.mid}`" ><p  style="margin:5px 10px">{{item.biao}}</p> </router-link> 
        <router-link :to="`/list/${item.mid}`" ><p style="margin-top:10px; overflow:hidden margin-left:10px;line-height:20px;font-size:12px; "> 
          {{item.nei}}</p></router-link>
      </div>  
      
      
     
        
     </div>
     </mt-tab-container-item> 
</mt-tab-container>
</div>       
</div>


   
   
</template>

<style>
  .mint-header-title{
    color:#fff!important;

  }
  .mint-header{
   background: #000!important;
  }
 
  .mint-tab-item-label{
    font-size: 18px!important;
  }
 a{
text-decoration: none!important;
 }
 .mint-tab-item-label{
     color:#fff!important;
 }
 .mint-navbar{
     background: #000!important;
 }
 .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #ffc107cc!important ;
    color:#ffc107cc!important;
    margin-bottom: -3px!important;
  
}

a{ color:#fff!important;
text-decoration: none;
font-size: 14px;}
 .mint-tab-item-label{
     color:#fff!important
 }
 .mint-navbar{
     background: #000!important;
 }
 .img{
   
   height:100%!important;
   margin: 0px auto!important;}


.mint-swipe-indicator.is-active{
  background-color: orange!important;}
  .mint-swipe img{
    height: 300px;

  }
  </style>
  <script>
  export default {
    data(){
      return{
        active:1,
        arr:[]
//        arr:[
//       { imgage:require("../assets/img/1.jpg"), name:"导语：",pian:"空灵音乐是以营造温馨浪漫情调、轻松优美氛围为宗旨，带有休闲"},
//      {
// imgage:require("../assets/img/2.jpg"),name:"音乐，人类的灵魂，只有懂得音乐的人才懂得生活",pian:" 音乐，可以体现出“乐以教和”的作用;音乐，也可以为我们解除生活中的疲劳;音乐，也是我们的朋友，我们的生活远远离不开它。"
//      }, { imgage:require("../assets/img/3.jpg"),name:"音乐的力量不可估量",pian:"音乐影响了我，音乐是我学会了人生哲理使我丰富了课余生活……"},
//        { imgage:require("../assets/img/4.jpg"),name:"音乐，人类的灵魂",pian:"只有懂得音乐的人才懂得生活"},
//         { imgage:require("../assets/img/5.jpg"),name:"音乐，让我在悲伤时感到一丝快乐，让我在感动时潸然落泪",pian:"音乐让我知道，人世间的各种欢乐，各种辛酸，各种痛楚;音乐让我知道，只要有音乐，我就不会孤独，不会寂寞。音乐，为我的生命注入了无穷的动力。"},
//           { imgage:require("../assets/img/6.jpg"),name:"习惯一个人的音乐，一个人的音乐是心灵最深处地呻吟",pian:"也许只有自己才听得懂，可是却依然希望自己听的音乐能把周围和未来打动。"},
//           { imgage:require("../assets/img/7.jpg"),name:" 音乐不是文字和旋律的合作曲",pian:"它还有更深刻的一面，使我们获益匪浅。音乐影响了我，音乐是我学会了人生哲理使我丰富了课余生活……"}, 
//           { imgage:require("../assets/img/8.jpg"),name:"音乐是我疗伤最好的药，没有谁能陪我走过悲伤的海",pian:"音乐，有抒发快乐情绪的，也有抒发悲伤情绪的，快乐时听欢快的歌曲会令人更舒畅，就是不快乐时听也会被快乐的乐曲所感染。而悲伤的音乐则更加能表达出人们的思想感受"},{ imgage:require("../assets/img/9.jpg"),name:"如果我们能静下心来听音乐，那将是一种享受",pian:"无论睁着眼睛或是闭着，当你完全沉浸在音乐的世界里的时候，你的眼睛是什么都看不见的，没有颜色，没有光亮，什么都没有。"},{ imgage:require("../assets/img/10.jpg"),name:" 最美妙的音乐能令我们陶醉其中而无法自拨",pian:"音乐，是人类时代进步的象征，每个时代都有反映这个时代的音乐，音乐永远都是人们追宠的对象。我也非常的喜欢听音乐，在不同的心情里挑选着不同的音乐。"},{ imgage:require("../assets/img/11.jpg"),name:" 听音乐能今人的心灵得到升华，疲劳时听音乐能缓解人们疲惫的身躯，放松心灵。",pian:"音乐，是一种快乐;音乐，是一种享受;音乐，是我们童年的好朋友;音乐，也是我的人生。"},
//         ]
       
      }
    
    },
    methods: {
     

    },
   mounted() {
      this.axios.get('/logo').then(res=>{
       let data=res.data.results;
           data.forEach( e=>{
             e.img= require('../assets/img/'+ e.img)
           this.arr.push(e);
           //console.log(this.arr)
      })
       
      });

   },
    
  }
</script>