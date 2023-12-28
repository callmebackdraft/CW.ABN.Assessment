import { expect, test } from 'vitest'
import { GetIndexedMonthlySalary, CalculateMortgageCost } from './functions'

test('Checks indexing of 2 known salaries', () => {
    expect(GetIndexedMonthlySalary(3000, 2000)).toBe(4400);
})

test('Checks the mortgage cost calculation with 2 known values (5200 & 2000) with 30 years', () => {
    expect(CalculateMortgageCost(3000, 2000, 30)).toBe(35640);
})