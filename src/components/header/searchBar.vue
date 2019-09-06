<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link to="/index">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <!-- 热门搜索 -->
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link :to="{name:'goods',params: {name: item}}">{{ item }}</router-link>
            </dd>
          </dl>
          <!-- 提示框信息 -->
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name: 'goods',params:{name: item}}">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item,index) in suggestList" :key="index">
              <router-link :to="{name: 'goods',params:{name: item}}">{{ item }}</router-link>            
          </a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from '@/axios.js';
import api from "@/api/index.js";
// import axios from  'axios'
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      // hotPlaceList: [],
      hotPlaceList: [],
      searchList: ['shanh','广州长隆欢乐世界','MidNight酒吧','广州动物园'],
      suggestList: ['beijing','广州长隆欢乐世界','MidNight酒吧','广州动物园']
    };
  },
  // 创建组件的时候就获取到
  created() {
    // axios.get ('/api/meituan/header/searchHotWords.json').then (res => {
    //   console.log(res.data.data,'searchHotWords')
    // })
    api.searchHotWords().then(res=>{
      // console.log(res,"searchHotWords")
      this.hotPlaceList = res.data.data
    });
     api.resultsByKeywords().then(res=>{
      console.log(res,"getSearchList")
      // this. = res.data.data
    });
    
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.searchWorld;
    },
    isSearchList: function() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      // // 失去焦点加一个定时器先点击在消失，使能够跳转
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 2000);

      // this.isFocus = false
    },
    input() {
      // console.log(this.searchWord);
      let val = this.searchWord;
      api.getSearchList().then(res => {
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1;
        });
      });
    }
  },
  // dom结构创建完成之后获取数据
  mounted() {}
};
</script>
