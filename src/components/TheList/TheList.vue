<template>
    <div class="list__container">
        <list-item
            v-for="option in options"
            :checked="value.includes(option.id)"
            :fieldId="option.name"
            :label="option.name"
            :key="option.id"
            @update:checked="check(option.id, $event)"
        />
    </div>
</template>
<script setup lang="ts">
import ListItem from "../ListItem/ListItem.vue";
import { toRefs } from "vue";

interface IProps {
    value: number[];
    options: {
        name: string;
        id: number;
    }[];
}

const props = defineProps<IProps>();
const emit = defineEmits(["update:value"]);
const { value, options } = toRefs(props);

const check = (optionId: number, checked: boolean) => {
    let updatedValue = [...value.value];

    if (checked) {
        updatedValue.push(optionId);
    } else {
        updatedValue.splice(updatedValue.indexOf(optionId), 1);
    }

    emit("update:value", updatedValue);
};
</script>

<style scoped lang="scss">
.list__container {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>
