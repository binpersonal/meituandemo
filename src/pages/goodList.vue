<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <!-- 头部定位展示区 -->
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy />
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span="5">map + fav</el-col>
    </el-row>
  </div>
</template>

<script>
import categroy from "@/components/products/categroy.vue";
import crumbs from "@/components/products/crumbs.vue";
export default {
  components: {
    crumbs,
    categroy
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>
