
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    message: { type: String, required: true },
    class: { type: String, required: true },
})

</script>
<template>
    <div :class="props.class">
     {{ props.message }}
    </div>
</template>