
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
       <!-- 搜索框开始 --> 

    <div class=" div1 ">
        <mt-search placeholder="热门"></mt-search>


        <!-- 这部分是我加的，这主要是歌手栏的循环，没有用mint ui -->
        
          <div class="geshou">  <!-- 这个标签主要是为了编写样式时避免和 Mint ui 生成的标签冲突  -->
              <!-- <a href="javascript:;" v-for="(v,i) of arr" :key="i"  >
                <img :src="v.simage" >
                <router-link to="/detail">
                <span class="ename" v-text="v.sname"></span>
                </router-link>  
              </a> -->
     
          </div>

              <mt-index-list :show-indicator="false">
                <mt-index-section :index="key" v-for="(item, key) in arr" :key="key">
                  <mt-cell :title="i.sname" v-for="(i, index) in item" :key="index"></mt-cell>
                </mt-index-section>
            
              </mt-index-list>
        <!-- 循环结束  这部分就是歌手信息 -->

    </div> 

    <!-- 这里是右侧导航栏 -->
    <!-- 代码不难   主要是样式比较难写 样式在下面  可以看看-->
    <!-- <div class="div3">
      <button>热</button>
      <button>A</button>
      <button>B</button>
      <button>C</button>
      <button>D</button>
      <button>E</button>
      <button>F</button>
      <button>G</button>
      <button>H</button>
      <button>J</button>
      <button>K</button>
      <button>L</button>
      <button>M</button>
      <button>N</button>
      <button>P</button>
      <button>Q</button>
      <button>R</button>
      <button>S</button>
      <button>T</button>
      <button>W</button>
      <button>X</button>
      <button>Y</button>
      <button>Z</button>
    </div> -->
    
<!-- 页面开始 -->
<!-- <mt-index-list>
  <mt-index-section index="A">
    <mt-cell title="Aaron">
      <img src="../assets/img/1.jpg" alt="">
    </mt-cell>
    <mt-cell title="Alden"></mt-cell>
    <mt-cell title="Austin"></mt-cell>
  </mt-index-section>
  <mt-index-section index="B">
    <mt-cell title="Baldwin"></mt-cell>
    <mt-cell title="Braden"></mt-cell>
  </mt-index-section>
</mt-index-list>
<mt-index-list :show-indicator="false">
</mt-index-list> -->
</div>

</template>



<style>
.mint-indexlist {
  color: red;
}
.mint-cell {
 color: #000!important;
}
  /* 右侧导航栏样式   */
  .div3{
    width: 25px;                 /* 导航栏宽度 */ 
    position: fixed;             /* 这是把导航栏固定再右侧 */ 
    right: 0;top: 165px;         /* 固定位置 */ 
    border-top-left-radius: 20px;       /* 导航栏左上倒角 */ 
    border-bottom-left-radius: 20px;    /* 导航栏左下倒角 */ 
    background-color: rgba(30,30,30,0.6);      /* 导航栏背景颜色 */ 
    padding: 20px 0 20px;                         /* 导航栏内边距  为了让导航栏好看点 */ 
  }
  /* 设置导航栏内的  字母样式   */ 
  .div3>button{
    width: 25px;                        /* 宽度与导航栏内一致 */ 
    border: none;                       /* 因为button自带背景颜色和边框    所以这里是清楚边框 */ 
    color:#fff;                       /* 改变字母颜色 */ 
    background-color: rgba(0,0,0,0);            /* 改变字母背景颜色 */ 
  }
  .div3>button:hover{
    color: #EFC621;
    outline: none;
  }
  .div2{
    min-height: 900px;
  }

  .div1{
    width: 100%;
    height: 48px;
    
  }
  .div1>.geshou>a{
    box-sizing: border-box;
    height: 70px;
    line-height: 36px;
    padding: 10px 0px 10px 20px;
    display: flex;
    align-items: center;
    background-color: #1f1d1d;
    outline: #000;
  }
  .div1>.geshou>a:hover{
    background-color: #343434;
  }
  .div1>.geshou>a>img{
    height: 48px;
    border-radius: 50%;
  }
  .ename{
    padding-left: 10px;
  }

  .div1>.mint-search{
    height: 36px;
  }

  .mint-header-title{
    font-size:24px!important;
    font-weight: 200!important;
  }
  .mint-header{
   background: #1f1d1d!important;
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
     background: #1f1d1d !important;
 }
 .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #EFC621!important ;
    color:#EFC621!important;
    margin-bottom: -3px!important;
}
a{ color:#fff!important;
text-decoration: none;}
 .mint-tab-item-label{
     color:#fff!important
 }
 .mint-navbar{
     background: #1f1d1d!important;
 }
 .img{
   width:100%!important;
   height:300px!important;
   margin: 0px auto!important;}


.mint-swipe-indicator.is-active{
  background-color: #EFC621!important;}

  /* 头部样式 */
  .mint-header-title{color:#EFC621!important}
  /* search */
  .mint-searchbar-core, .mint-searchbar, .mint-searchbar-inner{
      background-color: #2e2d2d!important;
  }
  .mint-searchbar{
      height: 37px;
  }
  /* .mint-search{
    height: 100%;
  } */

</style>

<script>
  export default {
    data(){
      return{
        active:2,
        arr:[
          // {image:require('../assets/img/薛之谦.jpg'),name:'薛之谦'},
          // {image:require('../assets/img/周杰伦.jpg'),name:'周杰伦'},
          // {image:require('../assets/img/陈奕迅.jpg'),name:'陈奕迅'},
          // {image:require('../assets/img/郭顶.jpg'),name:'郭顶'},
          // {image:require('../assets/img/李荣浩.jpg'),name:'李荣浩'},
          // {image:require('../assets/img/任然.jpg'),name:'任然'},
          // {image:require('../assets/img/王力宏.jpg'),name:'王力宏'},
          // {image:require('../assets/img/汪苏泷.jpg'),name:'汪苏泷'},
          // {image:require('../assets/img/林俊杰.jpg'),name:'林俊杰'},
          // {image:require('../assets/img/A-Lin.jpg'),name:'A-Lin'},
          // {image:require('../assets/img/安又琪.jpg'),name:'安又琪'},
          // {image:require('../assets/img/白小白.jpg'),name:'白小白'},
          // {image:require('../assets/img/陈慧娴.jpg'),name:'陈慧娴'},
          // {image:require('../assets/img/胡歌.jpg'),name:'胡歌'},
          // {image:require('../assets/img/胡夏.jpg'),name:'胡夏'},
          // {image:require('../assets/img/林忆莲.jpg'),name:'林忆莲'},
          // {image:require('../assets/img/潘玮柏.jpg'),name:'潘玮柏'},
          // {image:require('../assets/img/任贤齐.jpg'),name:'任贤齐'},
          // {image:require('../assets/img/王心凌.jpg'),name:'王心凌'},
          // {image:require('../assets/img/许嵩.jpg'),name:'许嵩'},
          // {image:require('../assets/img/易烊千玺.jpg'),name:'易烊千玺'},
          // {image:require('../assets/img/于文文.jpg'),name:'于文文'},
          // {image:require('../assets/img/郁可唯.jpg'),name:'郁可唯'},
          // {image:require('../assets/img/张韶涵.jpg'),name:'张韶涵'},
          // {image:require('../assets/img/周笔畅.jpg'),name:'周笔畅'}
        ]
      }
    },
    created() {
      this.aa()
    },
    methods: {
      aa() {
        this.axios.get('/singer').then(res=>{
          
          let data=res.data.results;
          // this.arr = data
          console.warn(data)
          let obj = {}
          data.forEach(item => {
            if (obj[item.skey]) {
              obj[item.skey].push(item)
            } else {
              obj[item.skey] = [item]
            }
          })
          console.log(obj)
          this.arr = obj
        });
        
      }

    }
  }
</script>