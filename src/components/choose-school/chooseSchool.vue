<template>
  <div class="page-wrapper">
    <m-header title="智能择校"></m-header>
    <div class="content-wrapper">
      <div class="type">
            <div class="item byScore" :class="{chosen: isByScore}" @click="handleTypeClick(1)">根据分数择校</div>
            <div class="item byRank" :class="{chosen: isByRank}" @click="handleTypeClick(2)">根据位次择校</div>
      </div>
      <div class="form-wrapper">
        <div class="form-item choose-province">
          <div class="title">生源地：</div>
          <div class="chosen-province" @click="handleOpenProvince">{{province.name}}<span>（点击切换生源地）</span></div>
        </div>
        <div class="form-item choose-subject">
          <div class="title">科类：</div>
          <div class="chosen-subject " :class="{'chosen-subject-isChosen': isScience}" @click="handleSubjectClick(1)">理科</div>
          <div class="chosen-subject" :class="{'chosen-subject-isChosen': isArt}" @click="handleSubjectClick(2)">文科</div>
        </div>
        <div class="form-item choose-score" v-if="isByScore">
          <div class="title">考分：</div>
          <div class="chosen-score"><input type="text" v-model="score" placeholder="请输入考分"></div>
        </div>
        <div class="form-item choose-score" v-if="isByRank">
          <div class="title">位次：</div>
          <div class="chosen-score"><input type="text" v-model="rank" placeholder="请输入位次"></div>
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button" @click="handleQuery">点击查询</div>
      </div>
    </div>
    <div class="province-wrapper" v-if="openProvince">
      <ul class="provinces" v-if="provinceCode">
        <li class="province" @click="handleProvinceClick(province)" v-for="province in provinceCode" :key="province.code">{{province.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/header/header'
import {provinceCode} from '@/common/js/provinceCode'
import {mapActions} from 'vuex'
export default {
  name: "ChooseSchool",
  components:{
    MHeader
  },
  data() {
    return {
      provinceCode:[],
      type: 1,
      subjectId: 1,
      province:{
        name:'山东',
        code: 37
      },
      score:'',
      rank:'',
      openProvince: false
    }
  },
  methods: {
    handleTypeClick(type){
      this.type = type
    },
    handleSubjectClick(subjectId){
      this.subjectId = subjectId
    },
    handleProvinceClick(province){
      this.province=province
      this.openProvince = false
    },
    handleOpenProvince(){
      this.openProvince = true
    },
    handleQuery(){
      let data = {}
      if(this.isByScore){
        data = {
          province_id: this.province.code,
          subject_id: this.subjectId,
          score: this.score
        }
      }else{
        data = {
          province_id: this.province.code,
          subject_id: this.subjectId,
          rank: this.rank
        }
      }
      this.setChoolSchools(data)
      this.$router.push('/chooseSchoolResult')
    },
    ...mapActions(['setChoolSchools'])
  },
  computed: {
    isByScore(){
      return this.type == 1?true:false
    },
    isByRank(){
      return this.type == 2?true:false
    },
    isScience(){
      return this.subjectId == 1?true:false
    },
    isArt(){
      return this.subjectId == 2?true:false
    }

  },
  mounted() {
    this.provinceCode = provinceCode
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.page-wrapper
  .content-wrapper
    position  fixed
    bottom 0
    top 1.05rem
    left 0
    right 0
    background #ffffff
    height 20rem
    .type
      height 2rem
      display flex
      justify-content space-evenly
      align-items center
      line-height .7rem
      font-size .38rem
      .item
        padding 0 .4rem
        color $cl-disabled
      .chosen
        padding 0 .4rem
        color $cl-yellow
        border-bottom .02rem solid $cl-yellow
    .form-wrapper
      // background #cccccc
      padding .8rem 0
      display flex
      flex-direction column
      justify-content space-around
      width 80%
      margin-left 10%
      align-items center
      .form-item
        width 80%
        // background #ddd
        display flex
        align-items center
        height .8rem
        line-height .8rem
        font-size .36rem
        .title
          width 30%
          text-align center
        .chosen-province
          span 
            font-size .24rem
        .chosen-subject
          height .45rem
          line-height .45rem
          padding 0.05rem .4rem
          border .02rem solid #ccc
          margin-right .2rem
          font-size .28rem
          border-radius .1rem
        .chosen-subject-isChosen
          border .02rem solid $cl-yellow
          color $cl-yellow
        input
          width 70%
          font-size .24rem
          height .5rem
          line-height .5rem
          padding-left .2rem
          border .02rem solid #cccccc
          border-radius .1rem
    .button-wrapper
      width 100% 
      height 1rem
      display flex
      justify-content center
      margin-top 1rem
      .button
        height .8rem
        line-height .8rem
        width 80%
        text-align center
        border-radius .1rem
        color #fff
        background $cl-yellow
        box-shadow 0 .2rem 1rem $cl-yellow
  .province-wrapper
    z-index 1000
    position fixed
    background rgba(0,0, 0,.4)
    top 0
    left 0
    right 0
    bottom 0
    display flex
    justify-content center
    align-items center
    .provinces
      height 8.2rem
      width 85%
      background #fff
      border-radius .2rem
      box-shadow 0 0 1rem #fff
      padding .2rem 0
      padding-left .5rem
      // overflow scroll
      // display flex
      .province
        width 2rem
        float left
        height .4rem
        line-height .4rem
        padding 0.05rem 0rem
        margin-right .2rem
        margin-bottom .15rem
        text-align center
        // background #ccc
        border-radius .05rem
        border .02rem solid #ccc




        


</style>