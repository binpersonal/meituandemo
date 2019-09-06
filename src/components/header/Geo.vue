<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{$store.state.position.name}}
            <router-link :to="{name: 'changecity'}" class="changeCity">
                切换城市
                [ 
                    <a href="">佛山</a>
                    <a href="">顺德</a>
                    <a href="">南沙</a>
                ]
            </router-link>
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
      <router-link class="resgister" :to="{name: 'register'}">注册</router-link>
        </div>
    </div>
</template>
