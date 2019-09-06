<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市" :list="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问" :list="rencentList" />
    </el-row>
    <el-row>
        <category />
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js"
import Category from "@/components/changeCity/category.vue";
import hot from "@/components/changeCity/hot.vue";
import Province from "@/components/changeCity/province.vue";
export default {
  data() {
    return {
      hotList: [
        // "山东",
        // "福建",
        // "上海",
        // "广州",
        // "浙江",
        // "温州",
        // "大连",
        // "哈尔冰",
        // "南京",
        // "北京",
        // "青岛",
        // "厦门"
      ],
      rencentList: []
      // rencentList: ["大连", "哈尔冰", "南京", "北京", "青岛", "厦门"]
    };
  },
  components: {
    Province,
    hot,
    Category
  },
  created () {
    api.getHotCity ().then(res => {
      this.hotList = res.data.data.map((item)=> item.name)
    }),
    api.getRecentCity().then(res => {
      this.rencentList = res.data.data.map((item) => item.name)
    })
  }
};
</script>
