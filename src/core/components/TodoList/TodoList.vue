<template>
    <the-card :title="header" :positionX="positionX" :positionY="positionY">
        <template #body>
            <the-list v-model:value="values" :options="options" />
        </template>
    </the-card>
</template>

<script setup lang="ts">
import TheCard from "../../../components/TheCard/TheCard.vue";
import TheList from "../../../components/TheList/TheList.vue";
import { computed, ref, toRefs } from "vue";
import { POSITION } from "../../../components/TheCard/utils";

interface IProps {
    title: string;
    initialvalue: number[];
    options: {
        name: string;
        id: number;
    }[];
    positionY: POSITION.TOP | POSITION.BOTTOM;
    positionX: POSITION.LEFT | POSITION.RIGHT;
}

const props = defineProps<IProps>();
const { title, initialvalue, options, positionX, positionY } = toRefs(props);

const values = ref(initialvalue.value);

const header = computed((): string => {
    return `${title.value} [${values.value.length} / ${options.value.length}]`;
});
</script>
