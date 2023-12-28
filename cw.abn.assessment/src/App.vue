<script lang="ts">
    import MortgageForm from './components/MortageForm.vue';
    export default {
        data() {
            return { langs: ['nl', 'en'] }
        },
        components: {
            MortgageForm
        }
    }
</script>

<template>
    <div class="locale-changer">
        <label>{{ $t("message.selectLanguage") }}</label>
        <select id="locale-changer" v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                {{ lang }}
            </option>
        </select>
    </div>
    <MortgageForm></MortgageForm>
</template>


<style>
    #app {
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .locale-changer label {
        margin-right: 20px;
    }

    select#locale-changer option[value="nl"]{
        background-image: url(./assets/nl-flag.svg);
    }

    select#locale-changer option[value="en"] {
        background-image: url(./assets/nl-flag.svg);
    }

    body {
        margin: 0;
        background: #eee;
    }
</style>
