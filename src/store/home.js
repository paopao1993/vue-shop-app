import * as TYPES from './type'

const state = {
  isBlock:false,//是否显示详情页
  cart:false,//是否显示添加购物
  msg:{},//详情页信息
  shop_msg:{},//购物信息
  single_num:0,//单件物品数量

};
const getters = {
  staus:state=>state.isBlock,
  msg:state=>state.msg,
  cart:state=>state.cart,
  shop_msg:state=>state.shop_msg.shop_msg,
  single_num:state=>state.single_num
};

const actions = {
  toDetail({commit},options){
    commit(TYPES.TO_DETAIL,{
      options
    })
  },//点击去详情页
  goBack({commit}){
    commit(TYPES.GO_BACK)
  },//从详情页返回首页
  toBuy({commit},shop_msg){
    commit(TYPES.CART_STATUS,{
      shop_msg
    })
  },//去添加购物页
  del({commit}){commit(TYPES.CANCEL)},//从购物页返回首页
  reduce({commit}){commit(TYPES.REDUCE_NUM)},//商品数量减少
  increase({commit}){commit(TYPES.INCREASE_NUM)},//商品数量增加

};
const mutations = {
  [TYPES.TO_DETAIL](state,opt){
    state.isBlock=!state.isBlock;
    state.msg=opt
  },
  [TYPES.GO_BACK](state){
    state.isBlock=!state.isBlock;

  },
  [TYPES.CART_STATUS](state,opt){
    state.cart=!state.cart;
    state.shop_msg=opt
  },
  [TYPES.REDUCE_NUM](state){
    if(state.single_num<=0){
      state.single_num=0
    }else {
      state.single_num--
    }

  },
  [TYPES.INCREASE_NUM](state){
    state.single_num++
  }

};

export default {
  state,
  getters,
  actions,
  mutations
}
