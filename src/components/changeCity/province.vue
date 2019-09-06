<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <!-- remoteMethod 输入时可进行远程搜索 -->
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import api from "@/api/index.js";
import MSelect from "./select.vue";
export default {
  components: {
    MSelect
  },
  data() {
    return {
      provinceList: [
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
        // "厦门",
        // "青海",
        // "广西"
      ],
      province: "省份",
      cityList: [
        // "山东",
        // "福建",
        // "上海",
        // "广州",
        // "浙江",
        // "温州",
        // "山东",
        // "福建",
        // "上海",
        // "广州",
        // "浙江",
        // "温州"
      ],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      searchWord: "",
      loading: false,
      cityDisabled: true
    };
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      //   加一层判断变成互斥
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(val) {
      // 请求后端接口
      // console.log(document.cookie, localStorage)
    }
  },
  created() {
    api.getProvinceList().then(res => {
      console.log(res)
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
