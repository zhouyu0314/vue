<template>
    <div id="tab-bar">
        <tab-bar-item>
            <img src="../../../assets/img/tabbar/home.svg" slot="tabBarItem-icon">
            <img src="../../../assets/img/tabbar/home_active.svg" slot="tabBarItem-icon-active">
            <div slot="tabBarItem-text">首页</div>
        </tab-bar-item>
        <tab-bar-item>
            <img src="../../../assets/img/tabbar/category.svg" slot="tabBarItem-icon">
            <img src="../../../assets/img/tabbar/category_active.svg" slot="tabBarItem-icon-active">
            <div slot="tabBarItem-text">分类</div>
        </tab-bar-item>
        <tab-bar-item>
            <img src="../../../assets/img/tabbar/shopcart.svg" slot="tabBarItem-icon">
            <img src="../../../assets/img/tabbar/shopcart_active.svg" slot="tabBarItem-icon-active">
            <div slot="tabBarItem-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item>
            <img src="../../../assets/img/tabbar/profile.svg" slot="tabBarItem-icon">
            <img src="../../../assets/img/tabbar/profile_active.svg" slot="tabBarItem-icon-active">
            <div slot="tabBarItem-text">我的</div>
        </tab-bar-item>

    </div>
</template>

<script>
    import TabBarItem from "./TabBarItem";

    export default {
        name: "TabBar",
        components: {
            TabBarItem
        }
    }
</script>

<style scoped>
    #tab-bar {
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    }
</style>