<template>
    <div>
        <!-- 头部 -->
        <header>
        <a href="#">&lt;</a>
        <span>Musics</span>
        <div class="moreinfo">
            <span>...</span>
        </div>
        </header>
        <!-- 内容 -->
        <main>
        <ul>
            <li v-for="(item,index) in musicList" @click="clickMusic(item.musicId,index)">
              <div class="music-box">
                  <span>{{index+1}}</span>
                  <div>
                  <p class="musicName">{{item.musicName}}</p>
                  <p class="auther">{{item.athoer}}</p>
                  </div>
              </div>
              <p><i class="iconfont icon-icon_video"></i><span>...</span></p>
            </li>
        </ul>
        </main>
        <!-- 脚部 -->
        <footer>
        <ul>
            <li><i class="iconfont icon-faxian"></i>发现</li>
            <li><i class="iconfont icon-icon_video"></i>视频</li>
            <li><i class="iconfont icon-yinyue"></i>我的</li>
            <li><i class="iconfont icon-pengyou"></i>朋友</li>
            <li><i class="iconfont icon-zhanghao"></i>账号</li>
        </ul>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            musicList:[]
          }
        },
        created(){
          this.musicList = this.$store.state.musicList;
        },
        methods:{
          clickMusic(id,index){
            sessionStorage.musicId = id;
            sessionStorage.musicIndex = index;
            this.$store.commit({
              type:'m_changePage',
              isPlayPage:true
            })
          }
        }
    }
</script>
<style scoped lang='less'>
  header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    line-height: 50px;
    color:rgb(191, 195, 199);
    background: linear-gradient(left,rgb(85, 84, 84),rgb(150, 147, 147));
    >a{
      text-decoration: none;
      padding: 0 10px;
      font-size: 24px;
      font-weight: bold;
      color: slategrey;
    }
    .moreinfo{
      padding: 0 10px;
      font-size: 24px;
      font-weight: bold;
      color: rgb(80, 81, 82);
    }
  }
  footer{
    height: 80px;
    background: #000;
    color: rgb(173, 166, 166);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    ul{
      list-style: none;
      padding: 10px 0;
      margin: 0;
      font-size: 14px;
      display: flex;
      justify-content: space-around;
      li{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        i.iconfont{
          font-size: 20px;
        }
      }
    }
  }
  main{
    ul{
      list-style: none;
      padding: 10px;
      color: rgb(124, 118, 118);
      background: rgb(51, 50, 50);
      li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(116, 115, 115);
        .music-box{
          display: flex;
          justify-content: space-between;
          align-items: center;
          span{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px;
            font-weight: bold;
          }
          .musicName{
            font-size: 16px;
          }
          .auther{
            font-size: 12px;
          }
        }
        >p{
          font-size: 18px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          i.iconfont{
            margin:5px;
          }
        }
      }
    }
  }
</style>