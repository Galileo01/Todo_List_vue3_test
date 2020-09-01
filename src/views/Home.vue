<template>
    <div class="home">
        <header>
            <img alt="Vue logo" src="../assets/logo.png" class="logo" />
            <h2>Todo List</h2>
        </header>
        <main>
            <section class="list">
                <TodoItem
                    :item="item"
                    @update="saveStorage"
                    v-for="(item, index) in list"
                    :key="index"
                    @remove="removeHandler"
                ></TodoItem>
            </section>
            <section class="input">
                <div class="wapper">
                    <input type="text" v-model="input" @keyup.enter="addItem" />
                    <MyButon @click="addItem">添加</MyButon>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue';
import TodoItem from 'components/TodoItem';
import MyButon from 'components/Button';
export default {
    name: 'Home',
    components: {},
    setup() {
        const data = reactive({
            list: [],
            input: '',
            currentID: 0,
        });

        const list = JSON.parse(localStorage.getItem('list'));
        data.list = list || [];
        if (list) data.currentID = list[list.length - 1].id;
        //移除 item
        function removeHandler(id) {
            console.log(id);
            const index = data.list.findIndex((item) => item.id === id);
            data.list.splice(index, 1);
            saveStorage();
        }
        //添加 item
        function addItem() {
            data.list.push({
                title: data.input,
                finished: false,
                time: Date.now().toString(),
                id: data.currentID + 1,
            });
            // console.log(data.list);
            saveStorage();
            data.input = '';
        }
        //保存到locolstorage  watch没有生效
        // watch(
        //     () => data.list,
        //     (list, pre) => {
        //         console.log(list);
        //         localStorage.setItem('list', JSON.stringify(list));
        //     }
        // );
        function saveStorage() {
            localStorage.setItem('list', JSON.stringify(data.list));
        }

        return {
            ...toRefs(data),
            removeHandler,
            addItem,
            saveStorage,
        };
    },
    components: {
        TodoItem,
        MyButon,
    },
};
</script>

<style lang="less" scoped>
.home {
    width: 70%;
    margin: 0 auto;

    header {
        display: flex;
        align-items: center;
        height: 60px;
        .logo {
            width: 50px;
            height: 50px;
        }
    }
    main {
        background-color: #7084d5;
        height: calc(100vh - 60px);
        position: relative;
        .list {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .input {
            height: 60px;
            width: 98%;

            padding: 20px;
            border-radius: 5px;
            box-sizing: border-box;
            background-color: #5c70be;

            position: absolute;
            bottom: 0;
            left: 1%;
            .wapper {
                display: flex;
                align-items: center;
                width: 80%;
                margin: 0 auto;
                justify-content: space-between;
                input {
                    outline: none;
                    border: none;
                    width: 80%;
                    height: 30px;
                    border-radius: 5px;
                    display: block;
                }
            }
        }
    }
}
</style>
