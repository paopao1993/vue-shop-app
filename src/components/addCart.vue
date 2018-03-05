<template>
    <transition name="cart">

        <div class="add-cart" v-if="$store.getters.cart">
            <div class="mask" @click="toBuy" v-if="shopMsg.img"></div>
            <div class="cart-content" v-if="shopMsg.img">
                <div class="cart-detail">
                    <img class="product-img" :src="shopMsg.img[0]" alt="">
                    <div class="info">
                        <p class="name">{{shopMsg.name}}</p>
                        <p class="price">¥{{shopMsg.price}}</p>
                        <div class="add">
                            <span class="jian"  @click="reduce(shopMsg.id)" :class="single_num==0?'none':'active'">-</span>
                            <span class="num">{{single_num}}</span>
                            <span class="jia" @click="increase(shopMsg.id)">+</span>
                        </div>
                    </div>
                </div>
                <div class="handle">
                    <div class="cart-total">
                        合计:
                        <span class="price">¥{{single_num*shopMsg.price}}</span>
                    </div>
                    <span class="order" @click="toShopCar(shopMsg)">立即购买</span>
                </div>
            </div>
        </div>

    </transition>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import * as Types from '../store/type'
    export default {
        name: "add-cart",
        data() {
            return {
                single_num: 0
            }
        },
        props:{
            shopMsg:{}
        },
        computed: {
            ...mapGetters(['cart', 'shop_msg']),
        },
        methods: {
            ...mapActions(['toBuy', 'toShopCar']),
            increase(id){
                this.$store.commit(Types.INCREASE_NUM,id);
                this.single_num=this.$store.getters.getCartNum(id).num;
                console.log(this.$store.getters.getCartNum(id).num)
            },
            reduce(id){
                if(this.single_num===0){
                    return
                }
                this.$store.commit(Types.REDUCE_NUM,id);
                console.log(this.$store.getters.getCartNum(id).num);
                this.single_num=this.$store.getters.getCartNum(id).num
            },
        },
        beforeUpdate(){
                this.$store.commit(Types.SET_CART_NUM,this.shopMsg);
                this.single_num=this.$store.getters.getCartNum(this.shopMsg.id).num

        },
        mounted() {
        },

    }
</script>

<style lang="scss">
    .cart-enter-active, .cart-leave-active {
        transition: all .2s;
    }

    .cart-enter, .cart-leave-to {
        transform: translateY(100%);
        opacity: .4;
    }

    .add-cart {
        position: fixed;
        z-index: 30;
        top: 0;
        bottom: 0;
        width: 100%;
        .mask {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, .6);
        }
        .cart-content {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: #fff;
            .cart-detail {
                display: flex;
                align-items: center;
                .product-img {
                    margin: 0 10px;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
                .info {
                    position: relative;
                    width: 100%;
                    .name {
                        line-height: 30px;
                    }
                    .price {
                        font-size: 14px;
                        line-height: 20px;
                        color: #e8380d;
                    }
                    .add {
                        position: absolute;
                        top: 50%;
                        right: 10px;
                        transform: translateY(-50%);
                        .jian {
                            display: inline-block;
                            width: 25px;
                            height: 25px;
                            text-align: center;
                            background: rgb(238, 238, 238);
                            border-radius: 50%;
                            font-weight: 100;
                            color: #fff;
                        }
                        .active {
                            background: rgb(18, 150, 219);
                        }
                        .num {
                            margin: 0 10px;
                            line-height: 30px;
                            font-size: 20px;
                        }
                        .jia {
                            display: inline-block;
                            width: 25px;
                            height: 25px;
                            text-align: center;
                            background: rgb(18, 150, 219);
                            border-radius: 50%;
                            font-weight: 100;
                            color: #fff;
                        }
                    }
                }
            }
            .handle {
                margin-top: 10px;
                line-height: 36px;
                font-size: 14px;
                .cart-total {
                    padding-left: 20px;
                    float: left;
                    width: 50%;
                    .price {
                        font-size: 16px;
                        color: #e8380d;
                    }
                }
                .order {
                    float: right;
                    width: 50%;
                    text-align: center;
                    color: #fff;
                    background-color: #e8380d;
                }
            }

        }
    }
</style>
