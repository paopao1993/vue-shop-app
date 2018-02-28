<template>
    <div class="search">
      <img class="search-icon" src="../../assets/search.png" alt="">
      <input class="search-input" v-model="value" type="text" placeholder="请输入" @keyup.13="search">
      <span class="search-delete" @click="del">X</span>
    </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
	export default {
		name: "search",
    data(){
		  return{
		    value:''
      }
    },
    methods:{
		  del(){
		    this.value=''
      },
      search(){
        MessageBox('提示', `搜索内容为${this.value}`)
      }
    }
	}
</script>

<style lang="scss">
.search{
  padding: 6px 12px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  .search-icon{
    position: absolute;
    top: 9px;
    left: 14px;
  }
  .search-input{
    width: 100%;
    line-height: 26px;
    color: #fff;
    background-color: hsla(0,0%,78%,.6);
    border-radius: 6px;
    padding: 0 20px;
  }
  .search-delete{
    color: #fff;
    position: absolute;
    right: 15px;
    top:8px;
  }
}
</style>
