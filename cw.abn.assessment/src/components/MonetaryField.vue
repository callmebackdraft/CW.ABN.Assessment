<script setup lang="ts">
    defineProps({
        text: String,
        value: Number
    })
    defineEmits(['update:value'])
</script>

<template>
    <div class="salary">
        <label>{{text}}</label>
        <input :value="value" @input="$emit('update:value', Number($event.target.value))" type="number" required/>
    </div>
</template>

<style scoped>
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
</style>