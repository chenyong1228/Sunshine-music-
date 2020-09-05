<template>
  <div id="player">
    <!-- 标题开始 -->
    <div>
      <p class="music_name">{{music_name[i]}}</p>
      <p class="name">{{music_song[i]}}</p>
    </div>
    <!-- 标题结束 -->
    <!-- 下拉三角开始 -->
    <div class="down_icon">
     <router-link to="list"> <img src="../assets/向下箭头.png" alt /> </router-link>
    </div>
    <!-- 下拉三角结束 -->
    <!-- 旋转圆形开始 -->
    <div class="rotate">
      <img :src="require(`../assets/music_img/${img[i]}.jpg`)" class="rotate_img" />
    </div>
    <!-- 旋转圆形结束 -->
    <!-- 模糊背景开始 -->
    <div class="background">
      <img :src="require(`../assets/BeiJing/${Beijing[i]}.jpg`)" alt />
    </div>
    <!-- 模糊背景结束 -->
    <!-- 音乐切换开始 -->
    <div class="position" style="margin-top:140px;">
      <div class="cut">
        <router-link to="/player_Two">  <img class="cut_img1" src="../assets/圆角矩形-歌词切换.png" alt /></router-link>
       <router-link to="/player">   <img class="cut_img2"  src="../assets/圆形-歌词切换.png" alt /></router-link>
      </div>
      <!-- 音乐切换结束 -->
      <!-- 视频进度条开始 -->
      <mt-range
        id="progress_bar"
        class="progress_bar"
        :min="10"
        :max="90"
        :step="10"
        :bar-height="8"
      >
        <div slot="start" class="left">00:00</div>
        <div slot="end" class="right">00:00</div>
      </mt-range>
      <div>
        <audio
          controls
          class="music"
          id="music"
          @canplay="getDuration"
          @timeupdate="updateTime"
          ref="audio"
          :src="require(`../assets/media/${music_music[i]}.mp3`)"
        ></audio>
      </div>
      <!-- 视频进度条结束 -->
      <!-- 音乐按钮开始 -->
      <div class="anniu">
        <div>
          <img src="../assets/随机播放.png" @click="random" class="random_icon" />
        </div>
        <div>
          <img src="../assets/后退.png" @click="left" />
        </div>
        <div>
          <img src="../assets/播放.png" @click="play_music" id="play_icon" />
        </div>
        <div>
          <img src="../assets/前进.png" @click="right" />
        </div>
        <div @click="onlike">
          <img src="../assets/收藏.png" class="collect_icon" v-if="like" />
          <img src="../assets/红色收藏.png" v-else />
        </div>
      </div>
    </div>
    <!-- 音乐按钮结束 -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      value: 50,
      i: 1,
      like: true,
      //歌曲链接
      music_music: ["火羊瞌睡了 - 信仰（翻自 张信哲）", "bad", "予安- - 隔岸"],
      //旋转图片链接
      img: ["6 - 副本", "zhangjie", "moo"],
      //歌手名称
      music_name: ["周杰伦", "张杰", "张韶涵"],
      //歌曲名称
      music_song: ["稻香", "天下", "欧若拉"],
      //背景图片
      Beijing: ["zhoujielun_bj", "zhangjie_bj", "zhangshaohan_bj"]
    };
  },
  methods: {
    //.......................获取当前时间和总时间开始.......................
    getDuration() {
      // console.log(this.$refs.audio.duration); //此时可以获取到duration
      this.duration = this.$refs.audio.duration;
      //获取想要修改的元素
      var right = document.getElementsByClassName("right")[0];
      //时间传递给想要修改的元素
      // right.innerText = ((this.$refs.audio.duration)/60).toFixed(2)
      right.innerText = toTimg(this.$refs.audio.duration);
      // console.log(right);
      //....................一个方法用于把时间分成分和秒开始....................
      function toTimg(t) {
        // 计算,10进制，以及取模 video.duration视频播放总时间
        //      console.log(video.duration);
        //分钟
        var minutes = parseInt(t / 60, 10);
        //秒
        var seconds = parseInt(t % 60, 10);
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
      }
      //....................一个方法用于把时间分成分和秒结束....................
    },
    updateTime(e) {
      var audio = document.getElementById("music");
      this.currentTime = e.target.currentTime; //获取audio当前播放时间
      //获取想要修改的元素
      var left = document.getElementsByClassName("left")[0];
      // left.innerText = ((this.currentTime)/60).toFixed(2);
      left.innerText = toTimg(this.currentTime);
      //....................一个方法用于把时间分成分和秒开始...................
      function toTimg(t) {
        // 计算,10进制，以及取模 video.duration视频播放总时间
        //      console.log(video.duration);
        //分钟
        var minutes = parseInt(t / 60, 10);
        //秒
        var seconds = parseInt(t % 60, 10);
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
      }
      //....................一个方法用于把时间分成分和秒结束....................
      //获取想要修改的进度条
      var mt_range_progress = document.getElementsByClassName("mt-range-progress")[0];
      // console.log(mt_range_progress);
      mt_range_progress.style.width = (audio.currentTime / audio.duration) * 100 + "%";
      //获取想要修改的进度条圆点
      var mt_range_thumb = document.getElementsByClassName("mt-range-thumb")[0];
      mt_range_thumb.style.left = (audio.currentTime / audio.duration) * 100 + "%";
    },
    //.......................获取当前时间和总时间结束.......................
    // .......................上一首开始.......................
    left() {
      var audio = document.getElementById("music");
      if(this.i >0){
        this.i--;
        console.log("上一首" + this.i);
      }else{
        this.i=this.music_music.length-1
     }
      //......................切换进度条归0开始......................
     //获取想要修改的进度条
      var mt_range_progress = document.getElementsByClassName("mt-range-progress")[0];
      // console.log(mt_range_progress);
      mt_range_progress.style.width = 0;
      //获取想要修改的进度条圆点
      var mt_range_thumb = document.getElementsByClassName("mt-range-thumb")[0];
      mt_range_thumb.style.left = 0;
      //......................切换进度条归0开始......................
      // this.play_music();
      //.......................自动调用播放函数开始...............
     setTimeout(()=>{
       this.play_music();
     },0)
     //.......................自动调用播放函数结束...............
    },
    // .......................上一首结束.......................
    // .......................下一首开始.......................
    right() {
     var audio = document.getElementById("music");
     //判断下一首
     if(this.i<this.music_music.length-1){
       this.i++;
       console.log("下一首" + this.i);
     }else{
       this.i=0;
     }  
     //......................切换进度条归0开始......................
     //获取想要修改的进度条
      var mt_range_progress = document.getElementsByClassName("mt-range-progress")[0];
      // console.log(mt_range_progress);
      mt_range_progress.style.width = 0;
      //获取想要修改的进度条圆点
      var mt_range_thumb = document.getElementsByClassName("mt-range-thumb")[0];
      mt_range_thumb.style.left = 0;
      //......................切换进度条归0开始......................
      // this.play_music();
      //.......................自动调用播放函数开始...............
     setTimeout(()=>{
       this.play_music();
     },0)
     //.......................自动调用播放函数结束...............
    },
    // .......................下一首结束.......................
    // .......................随机播放开始.........................
    random() {
      this.i = parseInt(Math.random() * this.music_music.length);
      //......................切换进度条归0开始......................
     //获取想要修改的进度条
      var mt_range_progress = document.getElementsByClassName("mt-range-progress")[0];
      // console.log(mt_range_progress);
      mt_range_progress.style.width = 0;
      //获取想要修改的进度条圆点
      var mt_range_thumb = document.getElementsByClassName("mt-range-thumb")[0];
      mt_range_thumb.style.left = 0;
      //......................切换进度条归0结束......................
      //.......................自动调用播放函数开始...............
     setTimeout(()=>{
       this.play_music();
     },0)
     //.......................自动调用播放函数结束...............

    },
    // .......................随机播放结束.........................
    // -----------------------收藏开始-----------------------------
    onlike() {
      this.like = !this.like;
    },
    // -----------------------收藏结束-----------------------------
    // -----------------------播放暂停开始-----------------------------
    play_music() {
      console.log(this.i);
      var audio = document.getElementById("music");
      var play_icon = document.getElementById("play_icon");
      var rotate_img = document.getElementsByClassName("rotate_img")[0];
      // console.log(rotate_img);
      if (audio.paused) {
        audio.play();
        play_icon.src = require("../assets/暂停.png");
        //点击播放时开始旋转
        rotate_img.style.animation= "changeright 20s linear infinite"
      } else if (audio.play()) {
        audio.pause();
        play_icon.src = require("../assets/播放.png");
        //点击暂停时结束旋转
        rotate_img.style.animation= ""
      }
    }
    // -----------------------播放暂停结束-----------------------------
  },
  watch: {}
};
</script>


<style>
#player {
  position: relative;
}
.music {
  position: fixed;
  top: 280px;
  right: 50%;
  left: 50%;
  display: none;
}
/* ......................音乐进度条适应开始.................... */
@media (min-width: 992px) {
  .position > .cut {
    position: fixed;
    top: 280px;
    left: 0;
    right: 0;
  }
  .position > .progress_bar {
    position: fixed;
    top: 480px;
    left: 0;
    right: 0;
  }
  .position > .anniu {
    position: fixed;
    top: 530px;
    left: 0;
    right: 0;
  }
}
.mt-range-progress {
  background-color: #ffcd32 !important;
}
/* ......................音乐进度条适应结束.................... */
.music_name {
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  padding: 16px 0 10px 0;
}
.name {
  color: #fff;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 24px;
}
/* .rotate{
		margin: 0 auto;
		background-color: #42B983;
		width: 302px; height: 302px;
		border-radius: 50%;
		background-color: rgba(28,28,28,.2);
		position: relative;
	} */
/* .rotate>img{
		width: 282px; height: 282px;
		border-radius: 50%;
		background-color: red;
		position: absolute;
		top: 10px;
		left: 10px;
	} */
/* ............................手写媒体查询开始.............................. */
@media (max-width: 576px) {
  .rotate {
    margin: 0 auto;
    background-color: #42b983;
    width: 302px;
    height: 302px;
    border-radius: 50%;
    background-color: rgba(28, 28, 28, 0.2);
    position: relative;
  }
}
@media (min-width: 992px) {
  .rotate {
    margin: 0 auto;
    background-color: #42b983;
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    background-color: rgba(28, 28, 28, 0.2);
    position: relative;
  }
}
@media (max-width: 579px) {
  .rotate > img {
    width: 282px;
    height: 282px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 10px;
    left: 10px;
  }
}
@media (min-width: 992px) {
  .rotate > img {
    width: 950px;
    height: 950px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 25px;
    left: 25px;
  }
}
/* ............................手写媒体查询结束.............................. */
.background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  filter: blur(20px);
}
.background > img {
  width: 100%;
  height: 100%;
}
.down_icon {
  position: absolute;
  left: 10px;
  top: 10px;
}
/* ..............................进度条模块开始........................... */
.cut {
  text-align: center;
  margin: 160px 0 10px 0;
}
.cut img {
  padding: 5px;
}
.cut_img1 {
  width: 20px;
  height: 8px;
}
.cut_img2 {
  width: 8px;
  height: 8px;
}
.progress_bar {
  margin: 0 auto;
  width: 85%;
}
.mt-range-thumb {
  width: 23px !important;
  height: 23px !important;
  top: 3px !important;
}
.progress_bar div {
  color: #ffffff;
}
.progress_bar font {
  margin: 0 5px;
}
.anniu {
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
}
/* ..............................进度条模块结束........................... */
/* 旋转动画开始 */
@keyframes changeright {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
/* .rotate_img {
  animation: changeright 6s linear infinite;
} */

/* 旋转开始结束 */
</style>



