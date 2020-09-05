<template>
    <div style="color:#fff;background-color:#000; font-size:14px;">
    <mt-header style="font-size:16px;" title=" 听音乐能今人的心灵得到升华">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link> 
    </mt-header>
     <div>
          <mt-tab-container>
             <mt-tab-container-item>
                <div  style="width:100%;height:220px; position: relative;"   >
                   
                    
                     <img style="text-align:center;width:100%;height:220px;" :src="img">
                  <div>
                           
                  </div>
                </div>
                 </mt-tab-container-item> 
           </mt-tab-container>
     </div>
     <div v-for='(v,k) of text' :key='k'>
   
          <mt-tab-container>
              <mt-tab-container-item>
                  <div style="border:1px solid #333;height:50px;">
                   <router-link to="/player"> <div style="margin-top:5px;margin-left:20px;">{{v.ge}}</div>  
                      <div style=" color:#adadad;margin-left:20px;margin-top:5px" >{{v.jian}}</div>
                 </router-link>
                  </div>

              </mt-tab-container-item>
          </mt-tab-container>
    </div>   
    </div>
</template>
<style>
   
</style>
<script>
export default {
    
    data(){
        return{
             text:[],
             img:""
        //    logo:require('@assets/imge/')
           
            //text:[
        // {texthead:"不知所措",textfooter:'王靖雯不胖'},
        //  {texthead:"2030，我想对你说",textfooter:'硬糖少女303希林娜依·高'},
        //     {texthead:"和你在一起",textfooter:'TFBOYS'},
        //     {texthead:"Beautifu",textfooter:'王俊凯'},
        //      {texthead:"灯火",textfooter:'TFBOYS'},
        //      {texthead:"孔雀",textfooter:'任然'},
        //      {texthead:"你是人间四月天 (Live)",textfooter:'邵帅'},
        //       {texthead:"甜甜咸咸",textfooter:'赵芷彤'},
        //      {texthead:"Evolve（淬炼)2020年王者荣耀世界冠军杯",textfooter:'王者荣耀 / Ki:Theory'},
        //      {texthead:"你要如何，我们就如何 ",textfooter:'康姆士乐团'},
        //      {texthead:"Love Is Gone",textfooter:'女王Music'},
        //    {texthead:"争霸《王者荣耀》曹操英雄主打",textfooter:'胡彦斌'},
        //    {texthead:"山外小楼夜听雨",textfooter:'任然'},
        //       {texthead:"圈住你",textfooter:'一口甜'},
        //  {texthead:"没有理想的人不伤心 (Live)",textfooter:'彭磊 / 郁可唯 / 宁静 / 白..'},
        //   {texthead:"千年之恋《琉璃》电视剧插曲",textfooter:'双笙'},
        // {texthead:"斯芬克斯",textfooter:'THE9'},
        //     ]
          
        }
    },
    mounted() {
        let id = this.$route.params.id;
        this.axios.get('/list?id='+ id).then(res=>{
        
         this.text=res.data.results
         
         this.img= require("../assets/imge/" + this.text[0].img)
         
         
      

       
           
          
         
         
        } 
         )
              

              
         
      
       
       
     
      
        
        
     
        
     
       


    
       
     },
}
</script>
<style>
    a{
        font-size: 14px!important;
    }
    .mint-header-title{
       font-size: 16px!important; 
    }
</style>