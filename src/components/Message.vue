

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    message: { type: String, required: true },
    category: { type: String, required: true },
})

</script>
<template>
    <div class="alert alert-success">
        <strong>{{ props.category }}</strong> {{ props.message }}
    </div>
</template>