import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      musicList:[{
        musicId:1,
        musicName:'晚婚',
        src:'http://182.140.219.28/amobile.music.tc.qq.com/C400003xpmyL4XxupF.m4a?guid=7341183205&vkey=E0D2A3AC51965AD605C47B22106A210B9A2B48EE34D2C52834CC23FFC8F51FD7502700D46D325B375469726F53BD71C5D04E5C4B187E921F&uin=0&fromtag=66',
        athoer:'谭维维',
        // imgSrc:'https://y.gtimg.cn/music/photo_new/T002R300x300M000002E8Dz42hgp4e.jpg?max_age=2592000'
        imgSrc:'./assets/imgs/1.jpg'
        },{
        musicId:2,
        musicName:'星',
        src:'http://182.140.219.28/amobile.music.tc.qq.com/C400001RGrEX3ija5X.m4a?guid=7341183205&vkey=777D70A1C5410A7C4C0E117353AFDF98B1B74C1AA2E11AAE98511E1BB406BD164517D8B7086CEECB99BB0A95A1CECF69E19312955A666039&uin=0&fromtag=66',
        athoer:'杨宗纬',
        imgSrc:'https://y.gtimg.cn/music/photo_new/T002R300x300M000003jZxLY2aUYIk.jpg?max_age=2592000'
        },{
        musicId:3,
        musicName:'Who Do You Love',
        src:'http://182.140.219.28/amobile.music.tc.qq.com/C400000HAEw30G6Kvk.m4a?guid=7341183205&vkey=C6F8C5939D6164C6F8CD4AAD2E05DCB1FA1DE62EF5E5A79D45E4DBCA9AA9DEC24AE1E0631E88C507E6346A57E6D59A7D50D57D34F44E583C&uin=0&fromtag=66',
        athoer:'The Chainsmokers',
        imgSrc:'https://y.gtimg.cn/music/photo_new/T002R300x300M000003p4va02dlZQf.jpg?max_age=2592000'
        },{
        musicId:4,
        musicName:'没有情人的情人节',
        src:'http://182.140.219.28/amobile.music.tc.qq.com/C400004XglnP0WzRrk.m4a?guid=7341183205&vkey=E85686A0F0E3FA0AC8627DDFB9832D605FAB93188E590D048328C2DED6582E26C746D3F3C713F0D036CE61FA9D36ECE832287CF2E02E4E6F&uin=0&fromtag=66',
        athoer:'孟庭苇',
        imgSrc:'https://y.gtimg.cn/music/photo_new/T002R300x300M000002QFmun1vsuvo.jpg?max_age=2592000'
        },{
        musicId:5,
        musicName:'奉献',
        src:'http://182.140.219.28/amobile.music.tc.qq.com/C400003WqxoZ2ndppU.m4a?guid=7341183205&vkey=C8E976B15DFAF2DF1972A1E237049BC7C0BF624E4A6112F848C6DE63EC2D6C854059F4F52DC8D2AB7ED3828839274B7E000E5AF45DAAD5A9&uin=0&fromtag=66',
        athoer:'韩寒',
        imgSrc:'https://y.gtimg.cn/music/photo_new/T002R300x300M000001mvVmj0koeIl.jpg?max_age=2592000'
        },{
        musicId:6,
        musicName:'时光卷轴 ',
        src:'http://110.185.115.25/amobile.music.tc.qq.com/C400001lnvXG0SrupZ.m4a?guid=7341183205&vkey=2B937A102C9D968AF587EC2E66A14BCEDDC013AEDDD24F0102A74B5908179541560A86F40E967964472370EEF14F2E5150A5988801CEB9DB&uin=0&fromtag=66',
        athoer:'封茗囧菌 / 双笙',
        imgSrc:'https://y.gtimg.cn/music/photo_new/T002R300x300M0000027ymgC4Sw3Au.jpg?max_age=2592000'
        },{
        musicId:7,
        musicName:'Shut Up',
        src:'http://110.185.115.25/amobile.music.tc.qq.com/C400003i1HMq0l5Dc3.m4a?guid=7341183205&vkey=B1D66CC64336D7E0D32817962C7C2F739E4701A811044B3137912159B5FEB9B999901CB165063B11433F08FE0DFC942E92854017D6465E98&uin=0&fromtag=66',
        athoer:'Greyson Chance',
        imgSrc:'https://y.gtimg.cn/music/photo_new/T002R300x300M000000GyXJm3b9A7i.jpg?max_age=2592000'
        },{
        musicId:8,
        musicName:'달라달라',
        src:'http://110.185.115.25/amobile.music.tc.qq.com/C400000UNTu92rjBfY.m4a?guid=7341183205&vkey=C9B3900E0D9B6541B818B9B7CA336CCFAA37C3DBCC53A68A8C0A8F5A0E0F8D572F4A30EA65CD6269FA9C8F86601AC60A0D2938C4AB11C115&uin=0&fromtag=66',
        athoer:'ITZY',
        imgSrc:'https://y.gtimg.cn/music/photo_new/T002R300x300M000003tpYwV4Spb2w.jpg?max_age=2592000'
        },{
        musicId:9,
        musicName:'听说',
        src:'http://110.185.115.25/amobile.music.tc.qq.com/C4000040lGFQ3ZqMvE.m4a?guid=7341183205&vkey=B93095ED58A538A61F4966213C8F39F404387013D7953B879B247564DBA2721118DB6B53751AA5E4C0EA2D07867D92C22CAD7526601BEE27&uin=0&fromtag=66x',
        athoer:'丛铭君',
        imgSrc:'https://y.gtimg.cn/music/photo_new/T002R300x300M000000hj2em054Hil.jpg?max_age=2592000'
        }
      ],
      isPlayPage:false
  },
  mutations: {
    m_changePage(state,obj){
      state.isPlayPage = obj.isPlayPage;
    }
  },
  actions: {

  }
})
