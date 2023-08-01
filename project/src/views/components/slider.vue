<template>
<div>
    <transition-group name='fade' tag='div'>
      <div v-for="i in [currentIndex]" :key='i'>
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href='#'>&#10094;</a>
  <a class="next" @click="next" href='#'>&#10095;</a>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      images: {
        // MIA
        'LeBron_Wade_Bosh':
          ['https://heatnation.com/wp-content/uploads/2022/09/USATSI_4980938_168386351_lowres-e1664300749515.jpg',
          'https://cdn-wp.thesportsrush.com/2021/06/fb47aa67-miami-3.jpg',
          'https://storage.googleapis.com/afs-prod/media/d5e5785f498546c29aa6f4db9c04ad6f/3000.jpeg',
          'https://www.10wallpaper.com/wallpaper/1366x768/1205/Dwyane_Wade-2011-12_NBA_season_the_Heat_Wallpaper_1366x768.jpg',
          'https://www.essentiallysports.com/wp-content/uploads/164213930.jpeg',
          'https://heatnation.com/wp-content/uploads/2016/05/Chris-Bosh-1024x697.jpg'],
        // GSW
        'Curry_Thompson_Green':
          ['https://a.espncdn.com/photo/2016/0128/r48874_5_1296x729_16-9.jpg',
          'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/tw0qpaqzxv7m4ugmoooh/draymond',
          'https://www.nbcsports.com/sites/rsnunited/files/styles/article_video_thumbnail/public/short_form_video/hero/STEPH-KLAY-TENURE-TOGETHER_101521.jpg',
          'https://media.cnn.com/api/v1/images/stellar/prod/220611102335-steph-curry-finals-game-4.jpg?c=original',
          'https://nba.nbcsports.com/wp-content/uploads/sites/12/2016/05/535101044-e1464495003127.jpg?w=1024',
          'https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-05/nba-plain--0c9788e4-318f-4ada-90a9-84068e77f305.png?itok=GGMfFi8t'],
        // GSW2
          'Curry_Thompson_Durant':
            ['https://www.teahub.io/photos/full/181-1819365_kevin-durant-stephen-curry-klay-thompson-all-50.jpg',
            'https://www.nbcsports.com/sites/rsnunited/files/article/hero/Kevin-Durant-Klay-Thompson-Steph-Curry-Getty-1140426816.jpg',
            'https://i.ytimg.com/vi/rDmhO7t3CY8/maxresdefault.jpg',
            'https://media.cnn.com/api/v1/images/stellar/prod/220611102335-steph-curry-finals-game-4.jpg?c=original',
            'https://nba.nbcsports.com/wp-content/uploads/sites/12/2016/05/535101044-e1464495003127.jpg?w=1024',
            'https://sportshub.cbsistatic.com/i/r/2019/01/27/367ca5d9-a85c-41a9-b0d4-c31a2319486a/thumbnail/1200x675/6a87e24101db3136136e63c6bb24e9e2/kevin-durant-warriors.jpg'],
        // OKC
          'Durant_Westbrook_Harden':
            ['https://www.si.com/.image/t_share/MTY4MDA4MDI5NjczODkxMjAw/westbrook-durant-hardenjpg.jpg',
            'https://basketballforever.com/wp-content/uploads/2022/04/okc-Cropped.jpg',
            'https://thespun.com/.image/t_share/MTgzMTI4MzMxODUwMjk0NjI0/oklahoma-city-thunder.jpg',
            'https://www.si.com/.image/t_share/MTgxNDQ0OTI2OTMwNjkyMDQz/sipa_13042070.jpg',
            'https://miro.medium.com/max/1400/1*DB9WO-nK6bafv07wjLqCGw.jpeg'],
        // BOS
          'Pierce_Garnett_Allen':
            ['https://www.basketuniverso.it/wp-content/uploads/2014/11/0601_bigthree.jpg',
            'https://img.bleacherreport.net/img/images/photos/002/294/150/hi-res-81610274_crop_north.jpg?1367714853&w=3072&h=2048',
            'https://www.bostonglobe.com/resizer/zY8xW9wAxWRtBv2MV5VmJPhzbmw=/arc-anglerfish-arc2-prod-bostonglobe/public/NTERV2HTYF7BGCUY72JVSYDNCU.JPG',
            'https://cdn2.storyasset.link/sDME5E2o7ETvqY3WVKOYWppiR1J3/Ray%20Allen%203-ms-xstrwuezic.jpeg',
            'https://cdn.vox-cdn.com/thumbor/F69GQNCTDTLqux9OGQ537yDbFnA=/0x0:4240x2827/1200x800/filters:focal(1365x50:2043x728)/cdn.vox-cdn.com/uploads/chorus_image/image/66602231/167980826.jpg.0.jpg'],

        // CLE
          'LeBron_Irving_Love':
            ['https://img.bleacherreport.net/img/images/photos/003/567/112/hi-res-b36d40e96a8ba04a5af296afeb62f0c2_crop_north.jpg?1453351956&w=3072&h=2048',
            'https://img.bleacherreport.net/img/images/photos/003/071/600/cb9f5ef937a50ee16c32268d62ef9d9d_crop_exact.png?w=1200&h=1200&q=75',
            'https://www.cleveland.com/resizer/mltrKIKgzAncB4ODqsIY9ZSAl_Y=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/CVJTIJ5RKZBPFDFDWZRVAOYPXU.JPG',
            'https://i.insider.com/576855c552bcd020008ca5fa?width=1000&format=jpeg&auto=webp',
            'https://cdn.vox-cdn.com/thumbor/9dA6ros12BF6By8EKHsnXsncCbs=/0x0:5184x3456/1200x800/filters:focal(2354x443:3182x1271)/cdn.vox-cdn.com/uploads/chorus_image/image/54603839/usa_today_10027230.0.jpg'],
        //SAS
          'Duncan_Parker_Ginobili':
            ['https://cdn0.vox-cdn.com/thumbor/gzZ_2S8II_PiS-ifhikfsH-ZggI=/0x0:3000x1571/fit-in/1200x630/cdn2.vox-cdn.com/uploads/chorus_asset/file/9242309/53104441.jpg',
            'https://c4.wallpaperflare.com/wallpaper/117/594/503/nba-basketball-san-antonio-spurs-san-antonio-tony-parker-manu-ginobili-tim-duncan-spurs-wallpaper-preview.jpg',
            'https://cdn.vox-cdn.com/thumbor/dWuSwLEkl6JQhseGVSCbscGYxpQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23257825/53142074.jpg',
            'https://www.gannett-cdn.com/-mm-/cccaacda38df0eea5050262c546beafa9d46a733/c=0-152-3031-1864/local/-/media/2016/07/11/USATODAY/USATODAY/636038294784773256-c02-refer-0512.jpg',
          'https://cdn.vox-cdn.com/thumbor/b_lOn5HOoUjibn27FtEelDcr3Cs=/0x0:2886x2345/1200x800/filters:focal(1236x246:1696x706)/cdn.vox-cdn.com/uploads/chorus_image/image/58409683/908554688.jpg.0.jpg'],
        // SAS2
          'Duncan_Parker_Kawhi':
            ['https://static01.nyt.com/images/2018/07/18/sports/basketball/19spurs_web1/merlin_141451806_0fcd89b9-6360-4732-9677-c6338b0f705b-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            'https://s4.reutersmedia.net/resources/r/?m=02&d=20140616&t=2&i=908758966&w=780&fh=&fw=&ll=&pl=&sq=&r=LYNXMPEA5F04X',
            'https://static01.nyt.com/images/2018/06/16/sports/16kawhi-print/merlin_136971180_df7b0b8d-8f9f-496c-b583-f6ed57fb0406-superJumbo.jpg',
            'https://www.gannett-cdn.com/-mm-/cccaacda38df0eea5050262c546beafa9d46a733/c=0-152-3031-1864/local/-/media/2016/07/11/USATODAY/USATODAY/636038294784773256-c02-refer-0512.jpg',
            'https://cdn.vox-cdn.com/thumbor/b_lOn5HOoUjibn27FtEelDcr3Cs=/0x0:2886x2345/1200x800/filters:focal(1236x246:1696x706)/cdn.vox-cdn.com/uploads/chorus_image/image/58409683/908554688.jpg.0.jpg'],
        // LAC
          'Paul_Griffin_Jordan':
            ['https://cdn.vox-cdn.com/thumbor/OFow9msWWYcXkxuLxxGwoU6okK0=/12x154:2222x1501/1400x788/filters:focal(958x318:1312x672):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55502459/usa_today_9972422.1498744987.jpg',
            'https://clipperholics.com/wp-content/uploads/getty-images/2015/10/462013396.jpeg',
            'https://img.bleacherreport.net/img/images/photos/001/657/328/139781983_crop_north.jpg?1334545076&w=3072&h=2048',
            'https://staticg.sportskeeda.com/editor/2019/07/97618-15625673196441-800.jpg',
            'https://staticg.sportskeeda.com/editor/2019/07/8aecc-15625672404873-800.jpg'],
        // LAC
          'Kobe_Gasol_Bynum':
            ['https://a.espncdn.com/photo/2012/0522/nba_g_kobefriends_cr_576.jpg',
            'https://nba.nbcsports.com/wp-content/uploads/sites/12/2011/09/88025941.jpg?w=594',
            'https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/kobe-bryant-getty-022720-ftrjpg_133gft6g4mxsu1jg75nkkmcln6.jpg?itok=lLuopBPj',
            'https://s22928.pcdn.co/wp-content/uploads/2020/05/pau-gasol-2010-nba-finals-640x430.jpg',
            'https://hoopshabit.com/wp-content/uploads/getty-images/2018/08/142537479.jpeg']
        },
      timer: null,
      currentIndex: 0,
      // name,
    }
  },

  
    mounted: function() {
      // this.name = this.$route.query.name;
      console.log(this.$route.query.name);
      this.startSlide();
    },
  
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.sl, 3000);
      },
      
      sl: function(){
        this.currentIndex += 1
      },
  
      next: function() {
        clearInterval(this.timer);
        this.currentIndex += 1;
        this.timer = setInterval(this.sl, 5000);
      },
      prev: function() {
        clearInterval(this.timer);
        this.currentIndex -= 1;
        this.timer = setInterval(this.sl, 5000);
      }
    },
  
    computed: {
      currentImg: function() {
        // return this.images[Math.abs(this.currentIndex) % this.images.length];
        var il = this.images[this.$route.query.name];
        // return this.images[this.$route.query.name][(this.currentIndex % this.images.length + this.images.length) % this.images.length];
        return il[(this.currentIndex % il.length + il.length) % il.length];
      }
    }
  
}
</script>

<style>
/*.fade-enter-active,*/
/*.fade-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:80%;
  opacity: 1;
}*/

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
height:850px;
width:100%
  }

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
}

.prev {
  left: 0;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>
