/*import './assets/main.css'*/

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

const messages = {
    nl: {
        message: {
            salaryMainApp: 'Jouw Maandsalaris',
            salarySecondApp: 'Maandsalaris Partner',
            multipleApplicants: 'Aanvragen met partner',
            insufficientSalaryError: 'Geindexeerd jaarsalaris moet meer zijn dan 10.000',
            calculateMortgage: 'Bereken Hypotheek',
            mortgageLength: 'Looptijd hypotheek',
            years: 'jaar',
            mortgageLengthError: 'Looptijd hypotheek moet langer dan 0 en niet meer dan 30 jaar zijn',
            indexedMonthlySalary: 'Geindexeerd maandsalaris',
            indexedYearlySalary: 'Geindexeerd jaarsalaris',
            totalMortgage: 'Totale Hypotheek',
            costPerMonth: 'Kosten per maand',
            selectLanguage: 'Selecteer Taal',
            zeroSalaryError: 'Er moet een hoger salaris ingevuld worden dan 0'
        }
    },
    en: {
        message: {

            salaryMainApp: 'Your Monthly Salary.',
            salarySecondApp: "Partner's Monthly Salary.",
            multipleApplicants: 'Apply with partner',
            insufficientSalaryError: 'Indexed Yearly salary must exceed 10.000',
            calculateMortgage: 'Calculate Mortgage',
            mortgageLength: 'Mortgage length',
            years: 'years',
            mortgageLengthError: 'Mortgage has to have a length of more then 0 and no more then 30 years',
            indexedMonthlySalary: 'Indexed monthly salary',
            indexedYearlySalary: 'Indexed yearly salary',
            totalMortgage: 'Total Mortgage',
            costPerMonth: 'Cost per month',
            selectLanguage: 'Select Language',
            zeroSalaryError: 'A higher salary then 0 must be given'
        }
    }
}

const i18n = createI18n({
    locale: 'nl',
    fallbackLocale: 'en',
    messages,
})

const app = createApp(App);
app.use(i18n);
app.mount('#app');
