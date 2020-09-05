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
       <div class="search">
           <div class="search-box">
               <div class="search-img"><img src="../assets/search.png" alt=""></div>
               <input type="text" placeholder="输入歌曲、歌手" v-model="mychange" >
              
              
             
               <div class="del-img" v-if="mychange!=0" @click="reset"><img src="../assets/del.png" alt=""></div>
           </div>
       </div>
       <div>
            <ul>
                  <li style="margin-left:60px" v-for="(v,k) of items" :key=k >
                     <router-link to="/menu">   <span>
                      {{v.neme}}
                       </span>
                       <span>
                           {{v.uesr}}
                       </span>
                     </router-link>  
                   </li>
               </ul>
       </div>
       <div>
           <div class="hot-key" v-if="mychange==0">
               <h1>热门搜索</h1>
               <ul>
                   <li v-for="(item,index) of searches" :key="index">
                       <span @click="getdata($event)">{{item}}</span>
                   </li>
               </ul>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
         
            active:1,
            value:'',
            mychange:'',
            list:[],
            searches:['我们的歌','冰雪奇缘2','张杰','桥边姑娘','星辰大海','哪吒 李宇春','左手指月','邓紫棋','酒醉的蝴蝶','左肩'],
            list:[{neme:"周杰伦",uesr:"七里香"},{neme:"周杰伦",uesr:"彩虹"},{neme:"周杰伦",uesr:"牛仔很忙"},{neme:"张学友",uesr:"吻别"},{neme:"张学友",uesr:"心如刀割"},{neme:"刘德华",uesr:"忘情水"},{neme:"刘德华",uesr:"一起走过的日子"},{neme:"周杰伦",uesr:"轨迹"},{neme:"周笔畅",uesr:"笔记"},{neme:"张杰",uesr:"天下"},{neme:"张杰",uesr:"我们都一样"},{neme:"王力宏",uesr:"大城小爱"},{neme:"王力宏",uesr:"缘分一道桥"},{neme:"刘若应",uesr:"后来"},{neme:"刘若英",uesr:"为爱痴狂"},{neme:"林俊杰",uesr:"江南"},{neme:"林俊杰",uesr:"编号89757"},{neme:"刘欢",uesr:"好汉歌"},{neme:"周杰伦",uesr:"简单爱"},{neme:"周杰伦",uesr:"稻香"},{neme:"周杰伦",uesr:"mojito"},{neme:"邓紫棋",uesr:"龙卷风"},{neme:"王力宏",uesr:"我们的歌"},{neme:"师欣",uesr:"冰雪奇缘2"},{neme:"无果",uesr:"桥边姑娘"},{neme:"群星",uesr:"星辰大海"},{neme:"哪吒 李宇春",uesr:"下个路口见"},{neme:"萨顶顶",uesr:"左手指月"},{neme:"枫叶",uesr:"酒醉的蝴蝶"},{neme:"万辰",uesr:"左肩"}
           ]
        }
    },
    methods:{
        getdata(e){
            let v=e.target.innerText;
            this.mychange=v;
            // this.$indicator.open();
        },
        reset(){
            this.mychange='';
        },
        
         
       
      
       

        },
        computed: {
            items :function(){
                var search=this.mychange
                if(search){
                var  res=new RegExp(search,'ig');
               return  this.list.filter(function(event){

                    return Object.keys(event).some(function(key){
                        return event[key].match(res);
                    })

                })
                return this.list
                
                }
            }
        }
    }

</script>
<style scoped>
    .search-all{
        background-color:#000;
        height:1578px;
    }
    .search{
        width:100%;
        padding-bottom:10px;
        margin-top:10px;

    }
    .search-box{
        display:flex;
        padding:0 10px;
        background-color:#333;
        width:90%;
        margin:0 auto;
        border-radius:6px;
        outline:0;
    }
    .search-img img{
        padding:5px 0;
    }
    .del-img img{
        padding:5px 4px;
        z-index:9999;
    }
    .search-box input{
        display:block;
        background-color:#333;
        margin:0 auto;
        width:100%;
        padding:10px 5px;;
        background-position:left center;
        border:0;
        outline:0;
    }
    .hot-key{
        padding:0 10px;
        font-size:16px;
    }
    .hot-key h1{
        padding:10px 0;
        color:#fff;
    }
    .hot-key li{
        display: inline-block;
        padding: 5px 10px;
        margin: 0 20px 10px 0;
        border-radius: 6px;
        background-color:#333;
    }
    .hot-key span{
        color:#bbb;
    }
</style>
