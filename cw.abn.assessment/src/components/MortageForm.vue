<script lang="ts">
    import MonetaryField from './MonetaryField.vue';
    import { defineComponent } from 'vue';
    import { GetIndexedYearlySalary, GetIndexedMonthlySalary, CalculateMortgageCost } from '../Logic/functions'
    export default defineComponent({
        data() {
            return {
                multiApplicant: false,
                mainSalary: 4000,
                secondarySalary: 2500,
                mortgageLength: 30,
                salaryError: false,
                mortgageLengthError: false,
                calculated: false,
                calculatedMortgageCost: 0,
                mainsalaryError: false,
                secondarysalaryError: false
            }
        },
        components: {
            MonetaryField
        },
        methods: {
            calculateMortgage() {
                if (this.checkInputs()) {
                    this.calculatedMortgageCost = CalculateMortgageCost(this.mainSalary, this.multiApplicant ? this.secondarySalary : 0, this.mortgageLength);
                    this.calculated = true;
                }
            },
            calculateTotalMonthly() {
                return GetIndexedMonthlySalary(this.mainSalary, this.multiApplicant ? this.secondarySalary : 0);
            },
            calculateTotalYearly() {
                return GetIndexedYearlySalary(this.mainSalary, this.multiApplicant ? this.secondarySalary : 0);
            },
            checkInputs() {
                this.calculated = false;
                this.mainsalaryError = this.mainSalary <= 0;
                this.secondarysalaryError = this.multiApplicant && this.secondarySalary <= 0;
                const totalYearlySalary = GetIndexedYearlySalary(this.mainSalary, this.multiApplicant ? this.secondarySalary : 0);
                this.salaryError = totalYearlySalary <= 10000;
                this.mortgageLengthError = !(this.mortgageLength > 0 && this.mortgageLength <= 30);
                return !this.salaryError && !this.mortgageLengthError;
            }
        }
    })
</script>

<template>
    <form @submit.prevent="calculateMortgage">
        <div class="multi-applicant">
            <input type="checkbox" v-model="multiApplicant" />
            <label>{{ $t("message.multipleApplicants") }}</label>
        </div>
        <MonetaryField :text="$t('message.salaryMainApp')" v-model:value='mainSalary' />
        <div class="error">
            <p v-if="mainsalaryError">{{ $t("message.zeroSalaryError") }}</p>
        </div>
        <MonetaryField v-if="multiApplicant" :text="$t('message.salarySecondApp')" v-model:value='secondarySalary' />
        <div class="error">
            <p v-if="secondarysalaryError">{{ $t("message.zeroSalaryError") }}</p>
        </div>
        <div class="combined-salaries">
            <p>{{ $t("message.indexedMonthlySalary") }} <b>{{ calculateTotalMonthly() }}</b> </p>
            <p>{{ $t("message.indexedYearlySalary") }} <b>{{ calculateTotalYearly() }}</b> </p>
        </div>
        <div class="error">
            <p v-if="salaryError">{{ $t("message.insufficientSalaryError") }}</p>
        </div>
        <label>{{ $t("message.mortgageLength") }}</label>
        <div class="length-slider">
            <input type="range" min="1" max="30" v-model="mortgageLength" />
            <label> {{ mortgageLength }} {{ $t("message.years") }}</label>
        </div>
        <div class="error">
            <p v-if="mortgageLengthError">{{ $t("message.mortgageLengthError") }}</p>
        </div>
        <div class="submit">
            <button>{{ $t("message.calculateMortgage") }}</button>
        </div>
    </form>
    <div v-if="calculated" class="result">
        <label>{{ $t("message.costPerMonth") }}</label>
        <p>EUR: {{calculatedMortgageCost}}</p>
    </div>
</template>

<style scoped>
    .result {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

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

        input[type="checkbox"] {
            display: inline-block;
            width: 16px;
            margin: 0 10px 0 0;
            position: relative;
            top: 2px;
        }

    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }

    .length-slider {
        display: block;
    }

        .length-slider input[type="range"] {
            display: inline-block;
            width: 80%;
            padding: 0;
        }

        .length-slider label {
            display: inline-block;
            position: relative;
            width: auto;
            margin: 0;
            margin-left: 10px;
            text-align: center;
            vertical-align: central;
            bottom: 5px;
        }



    .submit {
        text-align: center;
    }

    .error {
        color: red;
    }
</style>