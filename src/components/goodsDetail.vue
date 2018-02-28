<template>
  <transition name="fade">
  <div class="detail-pages" v-if="$store.getters.staus">
    <div class="detail">
      <div class="title">
        <h1 @click="goBack">＜</h1>
        <span>{{$store.getters.msg.options.name}}</span>
      </div>
      <div class="detail">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="url in $store.getters.msg.options.img">
            <img :src="url" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="introduce">
        <p class="introdice-name">{{$store.getters.msg.options.name}}</p>
        <p class="introdice-detail">{{$store.getters.msg.options.explain}}</p>
        <p class="introdice-price">¥{{$store.getters.msg.options.price}}</p>
      </div>
      <div class="others">
        <span>商品详情</span>
        <span>评价</span>
      </div>
      <div class="info">
        <img src="../assets/img/noInfo.png">
      </div>
    </div>
      <div class="handle">
        <div class="cart">加入购物车</div>
        <div class="order">立即购买</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		name: "goods-detail",
    data(){
		  return{

      }
    },
    computed:{
		  ...mapGetters(['msg'])

    },
    methods:{
		  ...mapActions(['goBack'])
    },
    mounted(){
    }
	}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active{
    transition: all .2s;
  }
  .fade-enter, .fade-leave-to{
    transform:translateX(-100%);
    opacity:.4;
  }
.detail-pages{
  position:fixed;
  z-index:20;
  top:0;
  bottom:0;
  width:100%;
  background-color:#fff;
  .detail{
    .title{
      padding-left: 10px;
      line-height: 36px;
      font-size: 14px;
      text-align: center;
      color: #fff;
      background-color: #1296db;
      h1{
        position: absolute;
        top:-2px;
      }
    }
    .detail{
      .mint-swipe{
        height:40vh;
        img{
          width:100%;
          height: 40vh;
        }
        .mint-swipe-indicator{
          opacity:.6;
        }
      }
    }
    .introduce{
      padding-left: 10px;
      .introdice-name{
        line-height: 40px;
        font-size: 22px;
      }
      .introdice-detail{
        color: #555;
      }
      .introdice-price{
        font-size: 18px;
        font-weight: 700;
        line-height: 36px;
        color: #e8380d;
      }
    }
    .others{
      margin-top: 10px;
      display: -ms-flexbox;
      display: flex;
      text-align: center;
      background-color: #f6f6f6;
      span{
        flex: 1;
        margin: 10px 0;
        line-height: 20px;
      }
      span:not(:last-child){
        border-right: 1px solid #aaa;
      }
    }
    .info{
      padding-top: 20px;
      img{
        display: block;
        width: 100%;
      }
    }
  }
  .handle{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    box-shadow: 0 -1px 10px 1px #ddd;
    .cart{
      float: left;
      width: 50%;
      background-color: #1296db;
    }
    .order{
      float: right;
      width: 50%;
      background-color: #e8380d;
    }
  }
}
</style>
