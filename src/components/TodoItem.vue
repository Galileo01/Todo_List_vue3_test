<template>
    <div class="todo_item">
        <input
            type="checkbox"
            name="fished"
            v-model="item.finished"
            @change="$emit('update')"
        />
        <div class="title" :class="{ finished: item.finished }">
            {{ item.title }}
        </div>
        <MyButon type="danger" @click="$emit('remove', item.id)">删除</MyButon>
    </div>
</template>

<script>
import MyButon from 'components/Button';
export default {
    name: 'TodoItem',
    props: {
        item: {
            type: Object,
        },
    },
    setup(props, { emit }) {
        // console.log(props);
        //删除
    },
    components: {
        MyButon,
    },
};
</script>

<style scoped lang="less">
.todo_item {
    width: 80%;
    height: 50px;
    line-height: 50px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
    box-shadow: 0 0 10px #ddd;
    background-color: #fff;
    border-radius: 5px;
    .finished {
        text-decoration: line-through;
    }
}
</style>
