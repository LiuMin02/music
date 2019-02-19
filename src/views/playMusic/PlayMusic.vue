<template>
    <div id="palyMusic">
        <header>
            <div>
                <span @click="clickBack" class="back">&lt;</span>
                <div class="music-top-div">
                    <p class="p1">{{singleMusic.musicName}}</p>
                    <p class="p2">{{singleMusic.athoer}}</p>
                </div>
            </div>
            <div class="moreinfo">
                <i class="iconfont icon-guanzhu1"></i>
                <span>关注</span>
                <i class="iconfont icon-iconfontfenxiang3"></i>
            </div>
        </header>
        <main>
            <div class="music-img">
                <img id="imgmusic" :src="singleMusic.imgSrc" class="quanquan">
            </div>
            <div class="music-controlls">
                <audio @loadstart="loadMusic()" @canplay="funTime()" :src="singleMusic.src"></audio>
                <!-- 进度条 -->
                <div class="progress">
                    <span>{{currTime}}</span>
                    <div class="progressBar">
                        <div class="progressCircle"><div></div></div>
                    </div>
                    <span>{{allTime}}</span>
                </div>
                <ul>
                    <li><i class="iconfont icon-icon--1" v-if="type==2" @click="changeType(1)"></i><i @click="changeType(2)" class="iconfont icon-icon--" v-else></i></li>
                    <li><i class="iconfont icon-shangyiqu" @click="shangyiqu"></i></li>
                    <li><i class="iconfont icon-bofang" v-if="isPaly" @click="clickPaly"></i><i @click="clickPaly" class="iconfont icon-pause" v-else></i></li>
                    <li><i class="iconfont icon-xiayiqu" @click="xiayiqu"></i></li>
                    <li><i class="iconfont icon-caidan"></i></li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                singleMusic:{},
                isPaly:false, //标杆判断是否播放
                type:1,
                allTime:'00:00',
                currTime:'00:00',
                timeId:null
            }
        },
        methods:{
            clickBack(){
                this.$store.commit({
                    type:'m_changePage',
                    isPlayPage:false
                })
            },
            // 播放控制函数
            playMusic(){
                this.isPaly = false;
                document.getElementsByTagName('audio')[0].play();
                document.getElementById('imgmusic').style.animationPlayState = "running";
            },
            pauseMusic(){
                this.isPaly = true;
                document.getElementsByTagName('audio')[0].pause();
                document.getElementById('imgmusic').style.animationPlayState = "paused";
            },
            // 播放时间函数
            funTime(){
                clearInterval(this.timeId);
                // 获取总时间
                let timeAll = Math.ceil(document.querySelector('audio').duration);
                let minu1 = Math.floor(timeAll/60);
                let second1 = timeAll%60;
                if(second1<10){
                    second1 = '0'+second1;
                }
                this.allTime = '0'+minu1+':'+second1;
                
                this.timeId=setInterval(()=>{
                    // 获取当前时间
                    let currTime = Math.ceil(document.querySelector('audio').currentTime);
                    if(currTime>=timeAll){
                        this.xiayiqu();
                    }
                    let minu2 = Math.floor(currTime/60);
                    let second2 = currTime%60;
                    if(second2<10){
                        second2 = '0'+second2;
                    }
                    this.currTime = '0'+minu2+':'+second2;
                    // 获取进度比设置进度宽度 progressCircle
                    let ratio = currTime/timeAll;
                    let width = Math.floor(document.querySelector('.progressBar').offsetWidth*ratio);
                    document.querySelector('.progressCircle').style.width = width+'px';
                    
                },1000)
            },
            // 播放切换按钮
            clickPaly(){
                if(this.isPaly){
                    this.playMusic()
                }else{
                    this.pauseMusic()
                }
            },
            shangyiqu(){
                //type判断当前播放类型 1表示顺序循环播放 2表示随机播放
                if(this.type===1){
                    let num = sessionStorage.musicIndex;
                    num--;
                    sessionStorage.musicIndex = num;
                    if(num <0){
                        num = this.$store.state.musicList.length-1;
                        sessionStorage.musicIndex = num;
                        this.singleMusic = this.$store.state.musicList[num];
                    }else{
                        this.singleMusic = this.$store.state.musicList[num];
                    }
                }else{
                    let len = this.$store.state.musicList.length;
                    let num = Math.floor(Math.random()*len);
                    this.singleMusic = this.$store.state.musicList[num];
                }
            },
            xiayiqu(){
                //type判断当前播放类型 1表示顺序循环播放 2表示随机播放
                if(this.type===1){
                    let num = sessionStorage.musicIndex;
                    num++;
                    sessionStorage.musicIndex = num;
                    if(num >= this.$store.state.musicList.length){
                        num = 0;
                        sessionStorage.musicIndex = num;
                        this.singleMusic = this.$store.state.musicList[num];
                    }else{
                        this.singleMusic = this.$store.state.musicList[num];
                    }
                }else{
                    let len = this.$store.state.musicList.length;
                    let num = Math.floor(Math.random()*len);
                    this.singleMusic = this.$store.state.musicList[num];
                }
            },
            loadMusic(){
                this.playMusic();
            },
            changeType(type){
                this.type = type;
            }
        },
        created(){
            let musicId = sessionStorage.musicId;
            this.singleMusic = this.$store.state.musicList[musicId-1];
        },
        mounted(){
            this.playMusic();
        }
    }
</script>

<style scoped lang="less">
 header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    height: 10%;
    color:rgb(191, 195, 199);
    background: linear-gradient(left,#000,rgb(43, 42, 42));
    >div{
      display: flex;
      align-items: center;
      padding:0 10px;
      .back{
          padding: 10px;
      }
      .music-top-div{
          margin: 0 5px;
          .p1{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 14px;
          }
          .p2{
              font-size: 12px;
          }
      }
    }
    .moreinfo{
        span{
            margin: 0 20px 0 8px;
        }
    }
  }
  main{
      height: 90%;
      background:linear-gradient(bottom,rgb(42, 66, 77),rgb(17, 19, 22)) ;
      .music-img{
          height: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
              border-radius: 50%;
              height: 50%;
          }
          .quanquan{
              animation: myfirst 5s linear infinite;
          }
          @keyframes myfirst{
            from {transform: rotate(0deg);}
            to {transform: rotate(360deg);}
          }
      }
      .music-controlls{
          .progress{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              padding: 0 20px;
              color: #fff;
              .progressBar{
                  width: 80%;
                  height: 0;
                  border: 2px solid #ccc;
                  margin-top: 10px;
                  position: relative;
                  .progressCircle{
                        width: 0;
                        height: 0;
                        border: 2px solid rgb(236, 98, 98);
                      position: absolute;
                      top: -2px;
                      left: -2px;
                      div{
                            position: absolute;
                            height: 0;
                            width: 0;
                            border: 6px solid rgb(236, 98, 98);
                            border-radius: 50%;
                            top: -5px;
                            right: -5px;
                      }
                  }
              }
              span{
                  margin:0 10px;
              }
          }
          ul{
              list-style: none;
              padding: 20px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              color: #fff;
              i.iconfont{
                  font-size: 40px;
              }
          }
      }
  }
</style>