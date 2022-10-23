<template>
    <todo-list
        title="SHOPPING LIST"
        :positionX="POSITION.LEFT"
        :positionY="POSITION.TOP"
        :initialvalue="shopingInitialValue"
        :options="shopingList"
    >
    </todo-list>

    <the-card
        title="MAMAAA OOOO"
        :positionX="POSITION.LEFT"
        :positionY="POSITION.BOTTOM"
    >
        <template #body>
            <p class="text">
                THIS ONE IS NOT A LIST - JUST SOME PLAIN OL’ TEXT.
            </p>
            <p>
                IS THIS THE REAL LIFE IS THIS JUST FANTASY CAUGHT IN A LANDSIDE
                NO ESCAPE FROM REALITY
            </p>
            <p>
                BY THE WAY IF THERE WAS A REALLY LONG LINE, I’M PRETTY SURE AT
                SOME POINT IT WOULD WRAP TO THE NEXT LINE. JUST LIKE THE OTHER
                ELEMENTS ON THIS PAGE, THIS ONE HAS A PRE-DEFINED MAX-WIDTH
            </p>
        </template>
    </the-card>

    <the-card
        title="KITTY"
        :positionX="POSITION.RIGHT"
        :positionY="POSITION.TOP"
    >
        <template #body>
            <div class="img__wrapper" ref="img">
                <img :src="kitty" alt="kitty" />
            </div>
            <button class="btn" @click="() => handleClick(img)">AWW :3</button>
        </template>
    </the-card>

    <todo-list
        title="BOOKS TO READ"
        :positionX="POSITION.RIGHT"
        :positionY="POSITION.BOTTOM"
        :initialvalue="booksInitialValue"
        :options="booksList"
    >
    </todo-list>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoList from "../../core/components/TodoList/TodoList.vue";
import TheCard from "../../components/TheCard/TheCard.vue";
import kitty from "../../assets/KITTY.jpeg";
import { POSITION } from "../../components/TheCard/utils";
import { booksList } from "../../moks/BooksList";
import { shopingList } from "../../moks/shopingList";
import { createHeart } from "./createHeart";

const booksInitialValue: number[] = [];
const shopingInitialValue: number[] = [];

const img = ref<HTMLElement>();

const handleClick = (node: HTMLElement | undefined) => {
    if (!node) {
        return;
    }

    createHeart(node);
};
</script>

<style scoped lang="scss">
.text {
    max-width: 300px;
    & ~ * {
        max-width: 300px;
    }
}

.img__wrapper {
    width: 200px;
    height: 200px;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.btn {
    width: 100%;
    background: $black;
    padding: 9px 20px;
    border: none;
    color: $white;
    border-radius: 5px;
    cursor: pointer;
}
</style>
