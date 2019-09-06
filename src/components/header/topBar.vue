<template>
    <div class="m-header-topbar m-header">
    <el-col :span="10" >
        <geo />
    </el-col>
    <el-col :span="14">
        <m-nav />
    </el-col>
    </div>
</template>
<script>
import geo from './Geo.vue'
import MNav from './Mnav.vue'
export default {
    components: {
        geo,
        MNav
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss'
</style>
