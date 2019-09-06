<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{ item.text }}</dd>
      <!-- <dd :class="{active :kind == 'all'}" data-type="all">全部</dd>
      <dd :class="{active :kind == 'food'}" data-type="food">约会聚餐</dd>
      <dd :class="{active :kind == 'spa'}" data-type="spa">丽人SPA</dd>
      <dd :class="{active :kind == 'movie'}" data-type="movie">电影演出</dd>
      <dd :class="{active :kind == 'travel'}" data-type="travel">品质出游</dd>-->
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class='image'>
           <div class="cbody">
            <div class="title">{{item.title}}</div>
            <div class="sub-title" >{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="old-price">{{item.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      kind: "all",
      resultsData: {},
      list: [
        // {
        //   image:
        //     "//p1.meituan.net/bbia/9e9d8322fb54999971c544947745160f287603.jpg@368w_208h_1e_1c",
        //   title: "友间蛋糕店（北京路店",
        //   sub_title: "火烈鸟网红蛋糕1个，约8英寸，圆形",
        //   price_info: {
        //     current_price: 138,
        //     old_price: 238
        //   },
        //   address: "北京路商业区"
        // }
      ]
    };
  },
  props: ["nav"],
  created() {
    api.resultsByKeywords().then(res => {
      return (this.resultsData = res.data.data);
    });
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //   ajax请求，获取数据
      // ...........
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
