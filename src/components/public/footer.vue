<template>
    <div class="footer-menu">
      <router-link to="/"><img src="../../assets/img/home.png" alt="">首页</router-link>
      <router-link to="category"><img src="../../assets/img/category.png" alt="">分类</router-link>
      <router-link to="shopcar"><img src="../../assets/img/shopcar.png" alt="">购物车</router-link>
      <router-link to="user"><img src="../../assets/img/user.png" alt="">我的</router-link>
    </div>
</template>

<script>
	export default {
		name: "foot"
	}
</script>

<style lang="scss">
.footer-menu{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  padding: 6px 0;
  background-color:#fff;
  border-top: 1px solid #888;
  a{
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    color: #111111;
    font-size: 14px;
    img{
      filter: grayscale(100%);
    }
    &.router-link-exact-active{
      color:#1296db;
      img{
        filter: grayscale(0);
      }
    }
  }
}
</style>
