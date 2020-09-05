<template>
    <div style="color:#fff;background-color:#000; font-size:14px;">
    <mt-header  title=" 巅峰流行歌曲排行榜">
        <router-link to="/there" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link> 
    </mt-header>
     <div>
          <mt-tab-container>
             <mt-tab-container-item>
                <div class="div_img" >
                    <table></table>
                    <div style="margin:0 auto; margin-top:150px;text-align:center;">
                     <img style="text-align:center;"  src="../assets/img/微信图片_20200812202100.png" alt="">
                   </div>
                </div>
                 </mt-tab-container-item> 
           </mt-tab-container>
     </div>
     <div v-for='(v,k) of text' :key='k'>
   
          <mt-tab-container>
              <mt-tab-container-item>
                  <div style="display:flex">
                  <div style="font-weight:600;margin-top:10px;color:#ffce0b; margin-left:10px">{{k+1}}</div>
                
                   <router-link to="/player"> <div style="margin-top:10px;margin-left:20px;">{{v.texthead}}</div>  
                      <div style=" margin-left:20px; color:#adadad;margin-top:10px" >{{v.textfooter}}</div>
                      </router-link>
                  
              </div>    
              </mt-tab-container-item>
          </mt-tab-container>
    </div>   
    </div>
</template>
<style>
    .div_img{
    background:url('../assets/img/12.jpg') no-repeat center center; width:100%;height:220px; position: relative;
    }
</style>
<script>
export default {
    data(){
        return{
            text:[
        {texthead:"不知所措",textfooter:'王靖雯不胖'},
         {texthead:"2030，我想对你说",textfooter:'硬糖少女303希林娜依·高'},
            {texthead:"和你在一起",textfooter:'TFBOYS'},
            {texthead:"Beautifu",textfooter:'王俊凯'},
             {texthead:"灯火",textfooter:'TFBOYS'},
             {texthead:"孔雀",textfooter:'任然'},
             {texthead:"你是人间四月天 (Live)",textfooter:'邵帅'},
              {texthead:"甜甜咸咸",textfooter:'赵芷彤'},
             {texthead:"Evolve（淬炼)2020年王者荣耀世界冠军杯",textfooter:'王者荣耀 / Ki:Theory'},
             {texthead:"你要如何，我们就如何 ",textfooter:'康姆士乐团'},
             {texthead:"Love Is Gone",textfooter:'女王Music'},
           {texthead:"争霸《王者荣耀》曹操英雄主打",textfooter:'胡彦斌'},
           {texthead:"山外小楼夜听雨",textfooter:'任然'},
              {texthead:"圈住你",textfooter:'一口甜'},
         {texthead:"没有理想的人不伤心 (Live)",textfooter:'彭磊 / 郁可唯 / 宁静 / 白..'},
          {texthead:"千年之恋《琉璃》电视剧插曲",textfooter:'双笙'},
        {texthead:"斯芬克斯",textfooter:'THE9'},
            ]
        }
    }
}
</script>