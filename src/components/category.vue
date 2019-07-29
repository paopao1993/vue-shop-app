<template>
    <div class="category">
        <div class="category-title">
            <ul>
                <li :class="curIndex===0?'active':''" @click="all">全部</li>
                <li v-for="(goods,index) in goodsList" @click="tabs(index+1)" :class="curIndex===index+1?'active':''">
                    {{goods.goods.type}}
                </li>
            </ul>
        </div>
        <div class="category-content">
            <div class="item" :class="curIndex===0?'active':''">
                <ul v-for="item in goodsList" >
                    <li v-for="itm in item.goods.list" class="clearfix" @click="toDetail(itm)">
                        <img :src="itm.img[0]" alt="">
                        <span>{{itm.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="item" v-for="(good,idx) in goodsList" @click="tabs(idx+1)"
                 :class="curIndex===idx+1?'active':''">
                <ul>
                    <li v-for="one in good.goods.list" @click="toDetail(one)">
                        <img :src="one.img[0]" alt="">
                        <span>{{one.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <goods-detail></goods-detail>
    </div>
</template>

<script>
    import GoodsDetail from './GoodsDetail'

    import { mapGetters, mapActions} from 'vuex'
    export default {
        name: "category",
        data() {
            return {
                curIndex: 0,
                goodsList: [],
            }
        },
        components:{
            GoodsDetail,
        },
        methods: {
            getDataList() {
                this.$axios.get('../static/data.json').then(res => {
                    console.log(res.data.goodsList);
                    this.goodsList = res.data.goodsList
                })
            },
            tabs(index) {
                this.curIndex = index
            },
            all() {
                this.curIndex = 0
            },//显示全部
            ...mapActions(['toDetail'])
        },
        mounted() {
            this.getDataList()
        },
        watch: {
            '$route' (val, old) {
                // 当前路由
                console.log(val)
                // 上一个路由
                console.log(old)
            }
        }
    }
</script>

<style lang="scss">
    .category {
        /*position: fixed;*/
        /*z-index: 3;*/
        /*top: 0;*/
        /*bottom: 60px;*/
        /*width: 100%;*/
        .category-title {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100px;
            border-right: 1px solid #ddd;
            overflow-y: auto;
            ul {
                li {
                    font-size: 14px;
                    line-height: 50px;
                    text-align: center;
                    border-bottom: 1px solid #ddd;
                }
                .active {
                    color: red;
                }
            }
        }
        .category-content {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 100px;
            right: 0;
            overflow-y: auto;
            .item {
                display: none;
                li {
                    border-bottom: 1px solid #ddd;
                    img {
                        float: left;
                        margin: 10px;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                    }
                    span {
                        line-height: 70px;
                        font-size: 12px;
                    }
                }
            }
            .active {
                display: block;
            }
        }
    }

</style>
