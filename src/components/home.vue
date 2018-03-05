<template>
    <div>
        <div class="home">
            <Search></Search>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="banner in bannerList ">
                    <img :src="banner.url" :alt="banner.name">
                </mt-swipe-item>
            </mt-swipe>
            <ul class="type-list clearfix">
                <li class="list" v-for="item in typeList">
                    <a href="#">
                        <span class="icon" :style="{'background':'url('+item.url+')',backgroundSize:'cover'} "></span>
                        <span class="text">{{item.name}}</span>
                    </a>
                </li>
            </ul>
            <div class="goods">
                <div class="goods-items" v-for="(item,index) in goodsList">
                    <h4>
                        {{item.goods.type}}
                        <span>P{{index+1}}</span>
                    </h4>
                    <ul class="clearfix">
                        <li v-for="itm in item.goods.list " @click="toDetail(itm)">
                            <img class="product" :src="itm.img[0]" alt="">
                            <span class="price">¥{{itm.price}}</span>
                            <span class="name">{{itm.name}}</span>
                            <img class="car" src="../assets/cart.png" alt="" @click.stop="toBuy(itm)">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <goods-detail></goods-detail>
        <addCart :shopMsg="shopMsg"></addCart>
    </div>

</template>

<script>
    import Search from './public/search'
    import img1 from '../assets/img/banner_1.jpg'
    import img2 from '../assets/img/banner_2.jpg'
    import img3 from '../assets/img/banner_3.jpg'
    import img4 from '../assets/img/banner_4.jpg'
    import img5 from '../assets/img/banner_5.jpg'
    import GoodsDetail from './GoodsDetail'
    import addCart from './addCart'
    import {mapState, mapGetters, mapActions} from 'vuex'
    import * as TYPES from '../store/type'
    export default {
        name: "home",
        components: {
            Search,
            GoodsDetail,
            addCart
        },
        data() {
            return {
                bannerList: [
                    {name: 'banner_1', url: img1},
                    {name: 'banner_2', url: img2},
                    {name: 'banner_3', url: img3},
                    {name: 'banner_4', url: img4},
                    {name: 'banner_5', url: img5},
                ],
                typeList: [],
                goodsList: [],
                shopMsg: {} //点击当前项的数据
            }
        },
        computed: {
            ...mapState(['test']),
            ...mapGetters(['home'])

        },
        methods: {
            getDataList() {
                this.$axios.get('../static/data.json').then(res => {
                    console.log(res.data.goodsList);
                    this.typeList = res.data.typeList;
                    this.goodsList = res.data.goodsList
                }).catch(err => {
                    alert('加载失败')
                })
            },
            ...mapActions(['toDetail']),
            toBuy(opt) {
                this.shopMsg = opt;
                this.$store.commit(TYPES.CART_STATUS)
            }
        },
        mounted() {
            this.getDataList();
           console.log(this)
        }
    }
</script>

<style lang="scss">
    body {
        .mint-swipe {
            height: 200px;
            img {
                width: 100%;
                height: 200px;
            }
            .mint-swipe-indicator {
                opacity: .6;
            }
        }
        .type-list {
            background: #f6f6f6;
            .list {
                width: 20%;
                padding: 6px 0;
                text-align: center;
                float: left;
                a {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .icon {
                        flex-direction: column;
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                    }
                    .text {
                        color: #555;
                        font-size: 12px;
                    }
                }
            }
        }
        .goods {
            background-color: #f6f6f6;
            .goods-items {
                h4 {
                    padding: 0 10px;
                    line-height: 36px;
                    font-size: 14px;
                    background-color: #fff;
                    span {
                        float: right;
                    }
                }
                h4:before {
                    content: "";
                    display: inline-block;
                    margin-right: 6px;
                    width: 4px;
                    height: 12px;
                    background-color: #e8380d;
                }
                ul {
                    li {
                        border-top: 1px solid #ddd;
                        border-bottom: 1px solid #ddd;
                        position: relative;
                        float: left;
                        display: flex;
                        flex-direction: column;
                        width: 50%;
                        padding: 6px 0;
                        .product {
                            margin: 10px 0;
                            width: 100%;
                            height: 100px;
                        }
                        .price {
                            padding-left: 10px;
                            font-size: 14px;
                            color: #e8380d;
                        }
                        .name {
                            padding-left: 10px;
                            font-size: 12px;
                        }
                        .car {
                            position: absolute;
                            width: 16px;
                            bottom: 3px;
                            right: 5px;
                        }
                    }
                    li:not(:last-child) {
                        border-right: 1px solid #ddd;
                    }
                }

            }
        }
    }
</style>
