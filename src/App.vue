<template>
  <div id="app">
    <play-music v-if="changePage"></play-music>
    <Music-list v-else></Music-list>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
// import MusicList from './views/musicList/MusicList'
import MusicList from './views/musicList/MusicList'
import PlayMusic from './views/playMusic/PlayMusic'
export default {
  components:{
    MusicList,
    PlayMusic
  },
  computed:{
    changePage(){
      return this.$store.state.isPlayPage;
    }
  }
}
</script>



<style lang="less">
@import './assets/fonts/iconfont.css';
 *{
   padding: 0;
   margin: 0;
 }
 html,body,#app,#palyMusic{
   height: 100%;
 }
 #app{
   background:  rgb(51, 50, 50);
 }
</style>
