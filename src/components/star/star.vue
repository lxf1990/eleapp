<template>
<div class="star" :class="'star-'+size">
  <span class="star-item" :class="c" v-for="c in starClasses"></span>
</div>
</template>
<script>
//  最高分：5分
//  小数部分>=0.5
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'

    export default {
        props:{
          score: Number,
          size: Number
        },
      computed:{
            starClasses () {
              const scs = []
              //向scs中添加CLASS_ON
              var score = this.score
              var scoreInteger = Math.floor(score)
              for (let i = 0 ; i < scoreInteger; i++) {
                   scs.push(CLASS_ON)
              }
              //向scs中添加CLASS_HALF
              if (score-scoreInteger>0.5) {
                  scs.push(CLASS_HALF)
              }
              //向scs中添加CLASS_OFF
              while(scs.length<5){
                  scs.push(CLASS_OFF)
              }
              return scs
            }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 22px
        background-size: 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>
