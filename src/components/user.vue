<template>
    <div class="user">
        <div class="title">个人信息</div>
        <div class="info clearfix">
            <img src="../assets/img/user_png.png">
            <div class="name">
                <a href="#" target="_blank">个人主页</a>
                <a href="#" target="_blank">项目地址</a>
            </div>
        </div>
        <div class="order-list">
            <p>已购买清单</p>
            <div class="remind" v-if="$store.state.hasBuy.length===0">当前没有订单
                <div class="to-shop">
                    <span @click="goHome">去逛逛</span>
                </div>
            </div>
            <ul class="list" v-if="$store.state.hasBuy.length>0">
                <li class="list-item" v-for="(item,index) in list" @click="changeState(index)">
                    <span>订单{{index+1}}</span>
                    <span>></span>
                    <ul class="order-detail">
                        <li v-for="itm in item" v-if="order===index">
                            商品名称:{{itm.name}}
                            价格:¥{{itm.price}}*{{itm.num}}=¥{{itm.price*itm.num}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import * as TYPES from '../store/type'

    export default {
        name: "user",
        data() {
            return {
                list: [],
                order: null,
            }
        },
        methods: {
            getList() {
                this.list = this.$store.state.hasBuy;
            },
            changeState(index) {
                if (this.order === index) {
                    this.order = null;
                    return
                } else {
                    this.order = index
                }

            },
            goHome() {
                this.$router.push('/')
            },
        },
        mounted() {
            this.getList();
            console.log(this.list, 'list');
            this.$store.commit(TYPES.CLEAR_CAR)
        }
    }
</script>

<style lang="scss">
    .user {
        position: fixed;
        top: 0;
        bottom: 60px;
        width: 100%;
        overflow-y: auto;
        .title {
            font-size: 14px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            background-color: #1296db;
        }
        .info {
            img {
                float: left;
                margin: 10px;
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
            .name {
                margin-left: 100px;
                padding-top: 20px;
                padding-left: 40px;
                height: 100px;
                a {
                    display: block;
                    font-size: 16px;
                    line-height: 30px;
                    color: #000;
                }
            }
        }
        .order-list {
            padding-top: 10px;
            p {
                padding-left: 20px;
                font-size: 14px;
                line-height: 40px;
                background-color: #fff;
                border-bottom: 1px solid #ddd;
            }
            .remind {
                padding-left: 20px;
                font-size: 14px;
                line-height: 40px;
                background-color: #fff;
                border-bottom: 1px solid #ddd;
                .to-shop {
                    margin-right: 20px;
                    float: right;
                    font-weight: 700;
                    color: #e8380d;
                }
            }
            .list {
                .list-item {
                    padding-left: 20px;
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 36px;
                    color: #2f2f2f;
                    border-bottom: 1px solid #ddd;
                    .order-detail {
                        font-weight: 400;
                        line-height: 20px;
                        color: #1296db;
                    }
                }
            }
        }
    }
</style>
