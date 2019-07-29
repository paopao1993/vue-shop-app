import * as TYPES from './type'

const state = {
    isBlock: false,//是否显示详情页
    cart: false,//是否显示添加购物
    msg: {},//详情页信息
    shop_car_status: true,
    shop_num: [],//添加购物车的商品
    hasBuy:[],//已经购买的订单
};
const getters = {
    staus: state => state.isBlock,
    msg: state => state.msg,
    cart: state => state.cart,
    shop_car_status: state => state.shop_car_status,
    shop_num: state => state.shop_num,
    getCartNum: (state) => (id) => {
        return state.shop_num.find(item => item.id === id)
    },
};

const actions = {
    toDetail({commit}, options) {
        commit(TYPES.TO_DETAIL, {
            options
        })
    },//点击去详情页
    goBack({commit}) {
        commit(TYPES.GO_BACK)
    },//从详情页返回首页
    toBuy({commit}) {
        commit(TYPES.CART_STATUS)
    },//去添加购物页
    reduce({commit}) {
        commit(TYPES.REDUCE_NUM)
    },//商品数量减少
    increase({commit}, item) {
        commit(TYPES.INCREASE_NUM, {
            item
        })
    },//商品数量增加
    toShopCar({commit}, shop_msg) {
        console.log(shop_msg,'state')
        commit(TYPES.TO_SHOP_CAR, {shop_msg})
    }
};
const mutations = {
    [TYPES.TO_DETAIL](state, opt) {
        state.isBlock = !state.isBlock;
        state.msg = opt
    },
    [TYPES.GO_BACK](state) {
        state.isBlock = !state.isBlock;

    },
    [TYPES.CART_STATUS](state) {
        state.cart = !state.cart;
    },
    [TYPES.REDUCE_NUM](state, id) {
        let shop_num = state.shop_num;
        for (let i = 0; i < shop_num.length; i++) {
            if (shop_num[i].id === id) {
                shop_num[i].num--;
                return
            } else {
                continue
            }
        }
    },
    [TYPES.INCREASE_NUM](state, id) {
        let shop_num = state.shop_num;
        for (let i = 0; i < shop_num.length; i++) {
            if (shop_num[i].id === id) {
                shop_num[i].num++;
                return
            } else {
                continue
            }
        }
    },
    [TYPES.TO_SHOP_CAR](state, val) {
        // state.isBlock=!state.isBlock;
        state.shop_car_status = false;
        state.cart = !state.cart;
        window.location.href = '/#/shopcar';
        let shop_num = state.shop_num;
        for (let i = 0; i < shop_num.length; i++) {
            if (shop_num[i].id === val.shop_msg.id) {
                if (shop_num[i].num > 0) {
                    return
                } else {
                    shop_num[i].num = 1;
                    return
                }
            } else {
                continue
            }
        }
        val.shop_msg.num = 1;
        val.shop_msg.chooseStatus = false;
        state.shop_num.push(val.shop_msg);
    },
    [TYPES.SET_CART_NUM](state, val) {
        let shop_num = state.shop_num;
        for (let i = 0; i < shop_num.length; i++) {
            if (shop_num[i].id === val.id) {
                return
            } else {
                continue
            }
        }
        val.num = 0
        val.chooseStatus = false
        shop_num.push(val)
    },
    [TYPES.SHOP_CAR](state,val){
        let shop_num=state.shop_num;
        state.isBlock=false
        for(let i=0;i<shop_num.length;i++){
            if(shop_num[i].id===val.id){
                if(shop_num[i].num>0){
                    return
                }else{
                    shop_num[i].num=1;
                    return
                }
            }else{
                continue
            }
        }
        val.num=1;
        val.chooseStatus=false;
        shop_num.push(val)
    },
    [TYPES.HAS_ORDER](state,val){
        console.log(val,'val')
        state.hasBuy.push(val)
        console.log(state.hasBuy)
    },
    [TYPES.CLEAR_CAR](state){
        state.shop_num=[]
    }

};

export default {
    state,
    getters,
    actions,
    mutations
}
