<template>
    <div class="shop-car">
        <div class="shop-car-main">
            <p class="shop-car-title" v-if="orderList.length>0">购物车 </p>
            <p v-if="orderList.length===0">
                <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsAWgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKA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"
                    alt="">
            </p>
            <ul class="goods-list" v-if="">
                <li v-for="(item,index) in orderList">
                    <span class="icon" @click="select(item,index)" :class="item.chooseStatus? 'active':''"></span>
                    <img :src="item.img[0]" alt="">
                    <p class="name">{{item.name}}</p>
                    <div class="price">
                        <p class="single">单价:{{item.price}}</p>
                        <p class="all">总价:{{item.price*item.num}}</p>
                    </div>
                    <div class="add">
                        <span class="jian" @click.stop="reduce(item,index)">-</span>
                        <span class="num">{{item.num}}</span>
                        <span class="jia" @click.stop="increase(item,index)">+</span>
                    </div>
                    <div class="remove" @click="remove(item)">删除</div>
                </li>
            </ul>
        </div>
        <div class="total">
            <span class="icon" @click="selectAll" :class="{'icon-active':chooseAll}"></span>
            <div class="content">
                合计
                <span class="price">¥ {{totalNum}}</span>
                <span class="order" @click="confirmOrder">结算</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import * as TYPES from '../store/type'
    import { MessageBox } from 'mint-ui'

    export default {
        name: "shop-car",
        data() {
            return {
                orderList: [],
            }
        },
        computed: {
            ...mapGetters(['shop_car_status', 'shop_msg']),
            buyList() {
                let buyList = [];
                this.orderList.forEach(item => {
                    if (item.chooseStatus) {
                        buyList.push(item)
                    }
                });
                return buyList
            },
            totalNum() {
                let num = 0;
                this.buyList.forEach((item, index) => {
                    num += item.num * item.price;
                });
                return num
            },
            chooseAll(){
                if(this.orderList.length==0){
                    return
                }
                for(let i=0;i<this.orderList.length;i++){
                    if(!this.orderList[i].chooseStatus){
                        return false
                    }
                }
                return true
            }
        },
        methods: {
            ...mapActions(['reduce', 'increase']),
            getList() {
                this.$store.getters.shop_num.forEach(item => {
                    if (item.num > 0) {
                        this.orderList.push(item)
                    }
                })
            },
            increase(item, index) {
                this.$store.commit(TYPES.INCREASE_NUM, item.id);
                this.$set(this.orderList, index, item)
            },
            reduce(item, index) {
                if (item.num === 1) {
                    return
                }
                this.$store.commit(TYPES.REDUCE_NUM, item.id);
                this.$set(this.orderList, index, item)
            },
            select(item, index) {
                item.chooseStatus = !item.chooseStatus;
                this.$set(this.orderList, index, item)
            },
            selectAll(){
                if(this.chooseAll){
                    this.orderList.forEach((item,index)=>{
                        item.chooseStatus=false;
                        this.$set(this.orderList,index,item)
                    })
                }else{
                    this.orderList.forEach((item,index)=>{
                        item.chooseStatus=true;
                        this.$set(this.orderList,index,item)
                    })
                }
            },
            remove(item){
                this.orderList.splice(item,1);
                this.$set(this.orderList)
            },
            confirmOrder(){
                if(this.buyList.length===0){
                    MessageBox('提示','请先购买商品');
                    return
                }
                MessageBox.confirm(`确认购买共:${this.totalNum}元`).then(res=>{
                    console.log(this.buyList,'buy')
                    this.$store.commit(TYPES.HAS_ORDER,this.buyList)
                    MessageBox.alert('购买成功');
                    this.$router.push('/user')
                })
            }

        },
        mounted() {
            this.getList()
        }
    }
</script>

<style lang="scss">
    .shop-car {
        position: fixed;
        top: 0;
        bottom: 60px;
        width: 100%;
        .shop-car-main {
            .shop-car-title {
                padding-left: 10px;
                font-size: 14px;
                line-height: 40px;
                color: #fff;
                background-color: #1296db;
            }
            .goods-list {
                li {
                    font-size: 12px;
                    position: relative;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-align: center;
                    align-items: center;
                    width: 100%;
                    border-bottom: 1px solid #ddd;
                    span {
                        padding: 0 6px;
                        color: #1296db;
                    }
                    .icon {
                        margin-left: 6px;
                        padding: 0;
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        background: url("../assets/选择.png") no-repeat;
                        background-size: cover;
                    }
                    .active {
                        background: url("../assets/选择按钮.png") no-repeat;
                    }
                    img {
                        margin: 4px 10px;
                        width: 40px;
                        height: 41px;
                        border-radius: 50%;
                    }
                    .name {
                        width: 80px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .price {
                        margin-left: 10px;
                        color: #e8380d;
                        .single {
                            margin-top: 8px;

                        }
                        .all {
                            line-height: 20px;
                        }
                    }
                    .add {
                        position: absolute;
                        top: 50%;
                        right: 60px;
                        transform: translateY(-50%);
                        .num {
                            color: #000;
                            margin: 0 6px;
                            line-height: 20px;
                            font-size: 14px;
                        }
                        .jia {
                            display: inline-block;
                            width: 14px;
                            height: 14px;
                            text-align: center;
                            line-height: 12px;
                            padding: 0;
                            background: rgb(18, 150, 219);
                            border-radius: 50%;
                            color: #fff;
                        }
                        .jian {
                            display: inline-block;
                            width: 14px;
                            height: 14px;
                            text-align: center;
                            line-height: 12px;
                            padding: 0;
                            border-radius: 50%;
                            color: #fff;
                            background: rgb(238, 238, 238)
                        }
                        .active {
                            background: rgb(18, 150, 219);
                        }
                    }
                    .remove {
                        position: absolute;
                        top: 0;
                        bottom: -1px;
                        right: 0;
                        width: 50px;
                        line-height: 50px;
                        text-align: center;
                        color: #fff;
                        background-color: #e8380d;
                    }
                }
            }
        }
        .total {
            position: absolute;
            z-index: 2;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            bottom: 0;
            width: 100%;
            height: 40px;
            background-color: #fff;
            border-top: 1px solid #ddd;
            .icon {
                display: inline-block;
                width: 16px;
                height: 16px;
                margin-left: 6px;
                padding: 0;
                color: #1296db;
                background: url("../assets/选择.png") no-repeat;
                background-size: cover;
            }
            .icon-active {
                background: url("../assets/选择按钮.png") no-repeat;
            }
            .content {
                margin-left: 10px;
                width: 100%;
                line-height: 40px;
                .price {
                    margin-left: 10px;
                    font-size: 14px;
                    color: #e8380d;
                }
                .order {
                    float: right;
                    width: 50%;
                    font-size: 14px;
                    text-align: center;
                    color: #fff;
                    background-color: #e8380d;
                }
            }
        }
    }
</style>
