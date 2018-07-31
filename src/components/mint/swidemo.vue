<template>
    <div class="swidemo">
        <p>toast demo</p>
        <mt-button type="primary" @click="showToast()">toast</mt-button>
        <div class="box">
            <mt-swipe :auto="4000" class="swiper-box">
                <mt-swipe-item class="item-swipe item-swipe-1">1</mt-swipe-item>
                <mt-swipe-item class="item-swipe item-swipe-2">2</mt-swipe-item>
                <mt-swipe-item class="item-swipe item-swipe-3">3</mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import { Swipe, SwipeItem } from 'mint-ui';
    import Vue from 'vue'
    Vue.component('mt-swipe', Swipe);
    Vue.component('mt-swipe-item', SwipeItem);
    export default {
        data(){
            return{

            }
        },
        methods:{
            showToast(){
                Toast('提示信息');
            }
        }
    }
</script>
<style>
.item-swipe{
    width: 100%;
    height: 100%;
}
</style>
