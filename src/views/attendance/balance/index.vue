<template>
    <div class="balance">
        <ul class="b-main">
            <li class="item">
                <p class="title">年假</p>
                <div class="i-main">
                    <div>
                        <p class="text">剩余可请天数</p>
                        <p class="num">{{ remAnnual }}</p>
                    </div>
                    <div>
                        <p class="text">合计可请天数</p>
                        <p class="num">{{ sumAnnual }}</p>
                    </div>
                </div>
            </li>
            <li class="item">
                <p class="title">年假</p>
                <div class="i-main">
                    <div>
                        <p class="text">剩余可请天数</p>
                        <p class="num">{{ remAnnual }}</p>
                    </div>
                    <div>
                        <p class="text">合计可请天数</p>
                        <p class="num">{{ sumAnnual }}</p>
                    </div>
                </div>
            </li> 
            <li class="item">
                <p class="title">年假</p>
                <div class="i-main">
                    <div>
                        <p class="text">剩余可请天数</p>
                        <p class="num">{{ remAnnual }}</p>
                    </div>
                    <div>
                        <p class="text">合计可请天数</p>
                        <p class="num">{{ sumAnnual }}</p>
                    </div>
                </div>
            </li>
            <li class="item">
                <p class="title">年假</p>
                <div class="i-main">
                    <div>
                        <p class="text">剩余可请天数</p>
                        <p class="num">{{ remAnnual }}</p>
                    </div>
                    <div>
                        <p class="text">合计可请天数</p>
                        <p class="num">{{ sumAnnual }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                remAnnual: '90',
                sumAnnual: '90'
            }
        },
    }
</script>
<style scoped>
    .balance .b-main {
        padding: 20px 20px;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .balance .item {
        width: 30%;
        margin: 20px 40px;
        border: 1px solid gray;
        border-radius: 3px;
        list-style: none;
    }

    .item p {
        margin: 0;
    }

    .item .title {
        /* margin: 0; */
        padding: 10px 10px;
        background-color: rgb(155, 155, 155);
    }
    .i-main{
        width: 100%;
        margin: 10px 0;
    }
    .item .text,
    .item .num {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
    }

    .item .text {
        padding-left: 10px;
        width: 70%;
    }

    .item .num {
        text-align: center;
        width: 30%;
    }
</style>