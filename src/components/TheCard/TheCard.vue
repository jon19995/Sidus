<template>
    <div class="card__container" :class="positionClassContainer">
        <header class="card__header">{{ title }}</header>

        <body>
            <slot name="body" />
        </body>

        <Transition name="bounce-btn-with-title">
            <label v-show="!isOpenCard" class="checkbox__container">
                <input
                    type="checkbox"
                    class="checkbox__input"
                    v-model="isOpenCard"
                />
                <i
                    class="icon icon__arrow"
                    :class="positionX === 'right' ? 'left' : 'right'"
                />
                <span class="checkbox__title">{{ title }}</span>
            </label>
        </Transition>

        <Transition name="bounce-btn-without-title">
            <label v-show="isOpenCard" class="checkbox__container">
                <input
                    type="checkbox"
                    class="checkbox__input"
                    v-model="isOpenCard"
                />
                <i class="icon icon__arrow" :class="positionX" />
            </label>
        </Transition>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs } from "vue";
import { POSITION } from "./utils";

interface IProps {
    title: string;
    positionY: POSITION.TOP | POSITION.BOTTOM;
    positionX: POSITION.LEFT | POSITION.RIGHT;
}

const props = defineProps<IProps>();
const { title, positionX, positionY } = toRefs(props);

const isOpenCard = ref(false);

const positionClassContainer = computed(
    (): Record<string, boolean> => ({
        active: isOpenCard.value,
        hidden: !isOpenCard.value,
        [positionX.value]: true,
        [positionY.value]: true,
    })
);
</script>
<style scoped lang="scss">
.card__container {
    padding: 40px;
    position: absolute;

    &.hidden {
        &.left {
            animation: bounce-out-left 0.5s linear;
            transform: translateX(-100%);
        }

        &.right {
            animation: bounce-out-right 0.5s linear;
            transform: translateX(100%);
        }
    }
    &.active {
        &.left {
            animation: bounce-in-left 0.5s linear;
            transform: translateX(0%);
        }

        &.right {
            animation: bounce-in-right 0.5s linear;
        }
    }

    &.top {
        top: 10%;
    }

    &.bottom {
        top: 50%;
    }

    &.left {
        left: 0%;
        background: linear-gradient(-55deg, transparent 5%, $light 0) bottom
            right;
        .checkbox__container {
            border-bottom: 0;
            left: 100%;
            top: -43px;
            transform-origin: 0% 100%;
        }
    }

    &.right {
        right: 0%;
        background: linear-gradient(45deg, transparent 5%, $light 0) bottom
            right;
        .checkbox__container {
            border-top: 0;
            left: 0%;
            transform-origin: 0% 0%;
            top: 0;
        }
    }

    .card__header {
        margin-bottom: 47px;
    }
}
.checkbox__container {
    position: absolute;
    border: 1px solid $light;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    background: $black;
    color: $white;
    padding: 10px;
    transition: background 0.3s linear;
    transform: rotate(90deg);
    &:hover {
        background: $grey;
    }

    input {
        visibility: hidden;
        z-index: -1;
        position: absolute;
        min-width: 0;
        max-height: 0;
    }

    .checkbox__title {
        font-weight: 400;
        font-size: 16px;
    }
}
// Анимации исчезновения для POSITION.RIGHT(начало)
// Карточка
@keyframes bounce-in-right {
    0% {
        transform: translateX(100%);
    }
    25% {
        transform: translateX(150%);
    }
    50% {
        transform: translateX(100%);
    }
    75% {
        transform: translateX(50%);
    }
    100% {
        transform: translateX(0%);
    }
}

@keyframes bounce-out-right {
    0% {
        transform: translateX(0%);
    }
    25% {
        transform: translateX(50%);
    }
    50% {
        transform: translateX(100%);
    }
    75% {
        transform: translateX(150%);
    }
    100% {
        transform: translateX(100%);
    }
}

// Анимации исчезновения для POSITION.LEFT(начало)
// Карточка

@keyframes bounce-in-left {
    0% {
        transform: translateX(-100%);
    }
    25% {
        transform: translateX(-150%);
    }
    50% {
        transform: translateX(-100%);
    }
    75% {
        transform: translateX(-50%);
    }
    100% {
        transform: translateX(0%);
    }
}

@keyframes bounce-out-left {
    0% {
        transform: translateX(0%);
    }
    25% {
        transform: translateX(-50%);
    }
    50% {
        transform: translateX(-100%);
    }
    75% {
        transform: translateX(-150%);
    }
    100% {
        transform: translateX(-100%);
    }
}

// кнопки скрытия/появления карточки

.bounce-btn-with-title-enter-active {
    animation: bounce-with-title 0.5s linear;
}

.bounce-btn-with-title-leave-active {
    animation: bounce-with-title 0.5s reverse linear;
}

@keyframes bounce-with-title {
    0% {
        opacity: 0;
    }
    76% {
        opacity: 0;
    }
    77% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}
.bounce-btn-without-title-enter-active {
    animation: bounce-without-title 0.5s reverse linear;
}

.bounce-btn-without-title-leave-active {
    animation: bounce-without-title 0.5s linear;
}

@keyframes bounce-without-title {
    0% {
        opacity: 1;
    }
    76% {
        opacity: 1;
    }
    77% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}
// Анимации исчезновения (конец)
</style>
