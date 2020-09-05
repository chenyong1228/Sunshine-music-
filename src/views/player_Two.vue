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
			<img src="../assets/向下箭头.png" alt="">
		</div>
		<!-- 下拉三角结束 -->
		<!-- 歌词开始 -->
    <div class="song" id="song">
      	<p v-for="(item,index) of lyric_song" :key="index" id="song_p">{{item}}</p>
    </div>
		<!-- 歌词结束 -->
    <!-- 模糊背景开始 -->
    <div class="background">
      <img :src="require(`../assets/BeiJing/${Beijing[i]}.jpg`)" alt />
    </div>
    <!-- 模糊背景结束 -->
    <!-- 音乐切换开始 -->
    <div class="position">
      <div class="cut" style="margin-top:100px">
       <router-link to="/player_Two"> <img class="cut_img1" src="../assets/圆角矩形-歌词切换.png" alt /></router-link>
       <router-link to="/player"> <img class="cut_img2"  src="../assets/圆形-歌词切换.png" alt /></router-link>
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
      music_music: ["火羊瞌睡了 - 信仰（翻自 张信哲）", "肥皂菌丨珉珉的猫咪丨 - 天下", "予安- - 隔岸"],
      //旋转图片链接
      img: ["6 - 副本", "zhangjie", "moo"],
      //歌手名称
      music_name: ["周杰伦", "张杰", "张韶涵"],
      //歌曲名称
      music_song: ["稻香", "天下", "欧若拉"],
      //背景图片
      Beijing: ["zhoujielun_bj", "zhangjie_bj", "zhangshaohan_bj"],
      // //歌词音乐
      lyric_time: ["28.00","35.00","42.00","52.00","56.00","57.00"],
      // //歌词
      lyric_song:["烽烟起寻爱似浪淘沙","遇见她如春水映梨花","挥剑断天涯相思轻放下","梦中我痴痴牵挂","顾不顾将相王侯","管不管万世千秋","求只求爱化解","这万丈红尘纷乱永无休","爱更爱天长地久","要更要似水温柔","谁在乎谁主春秋","一生有爱何惧风飞沙","悲白发留不住芳华","抛去江山如画换她笑面如花","抵过这一生空牵挂","心若无怨爱恨也随他","天地大情路永无涯","只为她袖手天下"," ","顾不顾将相王侯","管不管万世千秋","求只求爱化解","这万丈红尘纷乱永无休","爱更爱天长地久","要更要似水温柔","谁在乎谁主春秋","一生有爱何惧风飞沙","悲白发留不住芳华","抛去江山如画换她笑面如花","抵过这一生空牵挂","心若无怨爱恨也随他","天地大情路永无涯","只为她袖手天下"," ","一生有爱何惧风飞沙","悲白发留不住芳华","抛去江山如画换她笑面如花","抵过这一生空牵挂","心若无怨爱恨也随他","天地大情路永无涯","只为她袖手天下"," ","烽烟起寻爱似浪淘沙","遇见她如春水映梨花","挥剑断天涯相思轻放下","梦中我痴痴牵挂"]
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
      // var geci = document.getElementById("song").children[0];
      // console.log(rotate_img);
      if (audio.paused) {
        audio.play();
        play_icon.src = require("../assets/暂停.png");
        //点击播放时开始歌词高亮显示
        // console.log(geci);
        // geci.style.color="red"this.currentTime
      } else if (audio.play()){
        audio.pause();
        play_icon.src = require("../assets/播放.png");
      }
    }
     // -----------------------播放暂停结束-----------------------------
  },
  watch: {}
};
</script>


<style>
	#player{
		position: relative;
	}
	/* ......................音乐进度条适应开始.................... */
  	@media (max-width:557px) {
      	.song{
          height: 420px;
        }
    }
		@media (min-width:992px) {
			.position>.cut{
				position: fixed;
				top: 450px;
				left: 0;
				right: 0;
			}
			.position>.progress_bar{
				position: fixed;
				top: 480px;
				left: 0;
				right: 0;
			}
			.position>.anniu{
				position: fixed;
				top: 530px;
				left: 0;
				right: 0;
			}
      .song{
        height: 300px;
      }
		}
		
	/* ......................音乐进度条适应结束.................... */
	.music_name{
		color: #fff;
		font-size: 18px;
		font-weight: 800;
		text-align: center;
		padding: 16px 0 10px 0 ;
	}
	.name{
		color: #fff;
		font-size: 14px;
		font-weight: 800;
		text-align: center;
		margin-bottom: 24px;
	}
	.background{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		opacity: .6;
		filter: blur(20px);
		}
	.background>img{
		width: 100%;
		height: 100%;
	}
	.down_icon{
		position: absolute;
		left: 10px;
		top: 10px;
	}
	.cut{
		text-align: center;
		margin: 0px 0 10px 0 !important;
	}
	.cut img{
		padding: 5px;
	}
	.cut_img1{
		width: 20px; height: 8px;
	}
	.cut_img2{
		width: 8px; height: 8px;
	}
	/* 进度条 */
	.progress_bar{
		margin: 0 auto;
		width: 85%;
	}
	.mt-range-thumb{
		width: 23px !important;
		height: 23px !important;
		top: 3px !important;
	}
	.progress_bar div{
		color: #FFFFFF;
	}
	.progress_bar font{
		margin: 0 5px;
	}
	/* 进度条结束 */
	.anniu{
		margin-top: 25px;
		display: flex;
		justify-content: space-around;
	}
	.song{
    margin: 10px;
    padding: 10px 0;
		text-align: center;
		line-height: 30px;
    /* height: 420px; */
		color: rgba(250, 250, 250, 1);
		overflow: hidden;
		text-overflow:ellipsis;
	}
</style>



