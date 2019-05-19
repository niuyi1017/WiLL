<template>
  <div class="schoolsResult">
    <m-header title="择校结果"></m-header>
     <div class="scroll-wrapper">
      <scroll :data="schools" class="scroll">
        <div>
          <div class="card" v-for="(school, index) in schools" :key="index">
            <div class="top">
              <div class="pic">
                <img :src="school.logo" alt="" srcset="">
              </div>
              <div class="content">
                <div class="left">
                  <div class="school-name">{{school.name}}</div>
                  <div class="tags">
                    <div class="tag" v-show="school.is985">985</div>
                    <div class="tag" v-show="school.is211">211</div>
                    <div class="tag" v-show="school.isDual_class">双一流</div>
                  </div>
                </div>
                <div class="right">
                  <div class="type">{{school.recom}}</div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="item">
                <div class="score">{{school.max}}</div>
                <div class="desc">最高分</div>
              </div>
              <div class="item">
                <div class="score">{{school.average}}</div>
                <div class="desc">平均分</div>
              </div>
              <div class="item">
                <div class="score">{{school.min}}</div>
                <div class="desc">最低分</div>
              </div>
            </div>
          </div>
      </div>
    </scroll>
   </div>
    <div class="block"></div>
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
import Scroll from '@/base/scroll/scroll'
import {getSchoolsByScore,getSchoolsByRank} from '@/api/schools'
import {mapGetters} from 'vuex'
export default {
  name: 'getSchoolResult',
  components: {
    MHeader,
    Scroll
  },
  // props: {
  //   schools:[]
  // },
  data() {
    return {
      schools:[]
    }
  },
  computed: {
    ...mapGetters(['chooseSchools'])
  },
  methods: {
    _getSchools(){
      console.log(this.chooseSchools)
        if(this.chooseSchools.score){
          getSchoolsByScore(this.chooseSchools).then(res => {
            if(res.code==0&&res.data){
              let schools = res.data
              let ret = []
              for(let i = 0;i<schools.length;i++){
                let result = {
                  logo: `https://static-data.eol.cn/upload/logo/${schools[i].school_id}.jpg`,
                  name: schools[i].name,
                  is211: schools[i].f211==1,
                  is985: schools[i].f985==1,
                  isDual_class: schools[i].dual_class_name,
                  average: schools[i].average,
                  min: schools[i].min,
                  max: schools[i].max,
                  recom: schools[i].recom
                }
                ret.push(result)
              }
              this.schools = ret
              console.log(ret)
            }
        })
        }else{
          getSchoolsByRank(this.chooseSchools).then(res => {
            if(res.code==0&&res.data){
              let schools = res.data
              let ret = []
              for(let i = 0;i<schools.length;i++){
                let result = {
                  logo: `https://static-data.eol.cn/upload/logo/${schools[i].school_id}.jpg`,
                  name: schools[i].name,
                  is211: schools[i].f211==1,
                  is985: schools[i].f985==1,
                  isDual_class: schools[i].dual_class_name,
                  average: schools[i].average,
                  min: schools[i].min,
                  max: schools[i].max,
                  recom: schools[i].recom
                }
                ret.push(result)
              }
              this.schools = ret
            }
        })
      }
    }
  },
  mounted() {
    this._getSchools()
  },
  activated() {
    this._getSchools()
  },

}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.schoolsResult
  height 100%
  .scroll-wrapper
    width: 100%
    position fixed
    top 1rem
    bottom 0rem
    overflow hidden
    .scroll
      height 100%
      background $cl-bg
      .card
        margin-bottom .1rem 
        .top
          position relative
          height 2rem
          background #fff
          display flex
          align-items center
          .pic
            height 1.5rem
            width 1.5rem
            margin 0 .4rem
            img 
              height 100%
              width 100%
          .content
            display flex
            align-items center
            justify-content space-between
            .left
              display flex
              flex-direction column
              justify-content center
              .school-name
                height .8rem
                line-height .8rem
                font-size .46rem
                margin-bottom .2rem
              .tags
                display flex
                .tag
                  height .4rem
                  line-height .4rem
                  border-radius .1rem
                  color #fff
                  margin-right .2rem
                  color $cl-yellow
                  border .02rem solid $cl-yellow
                  padding 0 .2rem
            .right
              position absolute
              height .2rem
              line-height .2rem
              font-size .44rem
              color $cl-yellow
              right 0.4rem     
      .bottom
        height 1.2rem
        background #fff
        display flex
        justify-content space-around
        align-items center
        .item
          display flex
          flex-direction column
          align-items center
          justify-content center
          // border-right .02rem solid #ccc
          .score
            color $cl-blue
            font-size .48rem
          .desc
            color $cl-subColor
  .block
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #fff
    z-index -1
</style>
