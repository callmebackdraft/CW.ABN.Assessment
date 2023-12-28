const fakeInterest = 0.25;

export function CalculateMortgageCost(mainSalary: number, secondarySalary: number, length: number): number {
    return roundToTwoDecimals((GetIndexedYearlySalary(mainSalary, secondarySalary) * length * fakeInterest) / 12);
}

export function GetIndexedMonthlySalary(mainSalary: number, secondarySalary: number): number {
    if (secondarySalary > 0) {
        return mainSalary + IndexMonthlySalary(secondarySalary);
    }
    return mainSalary;
}

//Yearly salary = monthly salary * 12 * 1.08 (1.08 = 8% "vakantiegeld")
export function GetYearlySalary(monthlySalary: number): number {
    return monthlySalary * 12 * 1.08;
}

export function GetIndexedYearlySalary(mainSalary: number, secondarySalary: number): number {
    if (secondarySalary > 0) {
        return roundToTwoDecimals((GetYearlySalary(mainSalary) + MonthlySalaryToIndexedYearly(secondarySalary)));
    }
    return roundToTwoDecimals(GetYearlySalary(mainSalary));
}

function roundToTwoDecimals(value: number): number {
    return Math.round((value + Number.EPSILON) * 100) / 100;
}

function MonthlySalaryToIndexedYearly(salary: number): number {
    return GetYearlySalary(IndexMonthlySalary(salary));
}

function IndexMonthlySalary(salary: number): number {
    return 0.7 * salary;
}