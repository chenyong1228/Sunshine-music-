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
 


   
<div style="background:#333;margin-top:10px;" v-for="(v,k) of actions" :key="k">
    <mt-tab-container >
     <mt-tab-container-item >
   <div style="display: flex; border:1px solid #666">
      <div style="width:100px;height:80px;">
         <img :src="v.image"  style="width:100px;height:100px;">
      </div>
      <div>
      <router-link to="/add">  <p style="margin:10px auto">  {{v.id}}   {{v.text}}</p> </router-link> 
        <router-link to="/add"><p style="margin:5px auto; ">  {{v.ip}}  {{v.text1}}</p></router-link>
         <router-link to="/add"><p style="margin:5px auto"> {{v.ig}}  {{v.text2}} </p></router-link>
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
     color:#fff!important
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
   
   height:300px!important;
   margin: 0px auto!important;}


.mint-swipe-indicator.is-active{
  background-color: orange!important;}
  </style>
  <script>
  export default {
    data(){
      return{
        add:[],
        active:1,
        actions:[
            {image:require('../assets/img/巅峰榜_飙升.jpg'),id:1,text: "2030，我想对你说",ip:2,text1:" 争霸《王者荣耀》曹操英雄主打",ig:3,text2:"撤回"},
          {image:require('../assets/img/巅峰榜_流行指数.jpg'),id:1,text: "飞鸟和蝉",ip:2,text1:" 爸爸妈妈",ig:3,text2:"天外飞物"},
          {image:require('../assets/img/巅峰榜_内地.jpg'),id:1,text: "天外来物",ip:2,text1:" Beautiful",ig:3,text2:"和你在一起"},
         
         {image:require('../assets/img/巅峰榜_热歌.jpg'),id:1,text: "不知所措",ip:2,text1:"你是人间四月天 ",ig:3,text2:"你要如何，我们就如何"},
         {image:require('../assets/img/巅峰榜_听歌识曲.jpg'),id:1,text: "山外小楼夜听雨",ip:2,text1:"没有理想的人不伤心 ",ig:3,text2:"天外飞物"},
                {image:require('../assets/img/巅峰榜_新歌.jpg'),id:1,text: "Mojito",ip:2,text1:"How You Like That ",ig:3,text2:"破茧 (《斗罗大陆》动画2020年新主题曲)"},
         {image:require('../assets/img/巅峰榜_流行指数.jpg'),id:1,text: "你的万水千山",ip:2,text1:"后来遇见他 ",ig:3,text2:"When We Disco (Duet with 선미)"},
         {image:require('../assets/img/韩国榜.jpg'),id:1,text: "cardigan",ip:2,text1:"淬炼 (2020年王者荣耀世界冠军杯主题曲) ",ig:3,text2:"Rager teenager!"},
        {image:require('../assets/img/日本榜.jpg'),id:1,text: "The ShadowsSandglass(沙漏)",ip:2,text1:"爱要怎么说出口 ",ig:3,text2:"你要的全拿走"},
         {image:require('../assets/img/欧美榜.jpg'),id:1,text: "마리아 (Maria)",ip:2,text1:"我爱你不问归期 ",ig:3,text2:"Dancing With Your Ghost"},
         {image:require('../assets/img/台湾地区榜.jpg'),id:1,text: " 你的万水千山你的万水千山",ip:2,text1:"눈누난나 (NUNU NANA) ",ig:3,text2:"山外小楼夜听雨"},      
        ]
    
    }
    },
    mounted () {
     function Promiseajax(url){
        return new Promise((resolve,reject)=>{
            const xhr=new XMLHttpRequest()
            xhr.open('get',url)
            xhr.send()
            xhr.onreadystatechange=()=>{
                if(xhr.readyState!==4) return
                if(xhr.status>=200 && xhr.status<300){
                    resolve(JSON.parse(xhr.response))
                }else{
                    reject(new Error('request error status'+xhr.status))
                }
            }
        })

        
    }
    Promiseajax('https://api.apiopen.top/musicRankings').then(
        value=>{
        
         console.log(value);
        },
        
    )
    }

    }
   
</script>