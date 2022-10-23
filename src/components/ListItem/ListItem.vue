<template>
    <label :for="fieldId" class="label">
        <input
            @change="(event) => $emit('update:checked', ((event.target) as HTMLInputElement).checked)"
            type="checkbox"
            :checked="checked"
            :id="fieldId"
            class="checkbox"
        />
        <span>{{ label }}</span>
    </label>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

interface IProps {
    label: string;
    fieldId: string;
    checked: boolean;
}

const props = defineProps<IProps>();
const { label, fieldId, checked } = toRefs(props);
</script>

<style scoped lang="scss">
.label {
    cursor: pointer;
}

input.checkbox {
    visibility: hidden;
    z-index: -1;
    position: absolute;
    min-width: 0;
    max-height: 0;
}

input.checkbox:checked + span {
    text-decoration: line-through;
}
</style>
