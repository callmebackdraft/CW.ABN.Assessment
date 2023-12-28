# Input for ABN Job interview Assessment

For this assessment i was tasked with the following:

_**Create a Javascript application (in a framework of your own preference e.g. Angular/Vue) that fulfills the following requirements (in a new branch)**_

## Requirements
**1. HTML Form:**

Include an HTML form with the following fields:
* Selection for 1 or 2 applicants. :heavy_check_mark:
* Input field for "Your Monthly Salary." :heavy_check_mark:
* Input field for "Partner's Monthly Salary." (Only when there is a 2nd applicant) :heavy_check_mark:
* Display the total salary, with the following sum (Salary applicant 1 + (0.7 * Salary applicant 2) :heavy_check_mark:
* Select the 'Length of mortgage in years' (looptijd) (values range from 1-30) :heavy_check_mark:
* A button to trigger the calculation. The result should be displayed in months (divide by 12). (Yearly salary * looptijd * 0.25 (imaginary interest/quote) / 12 :heavy_check_mark:
* Add a unittest :heavy_check_mark:
* Make the page multilingual (EN/NL) - Bonus (use i18n package for example) :heavy_check_mark:

**2. JavaScript Logic:**

* Write JavaScript logic to calculate the total costs of the mortgage in months. :heavy_check_mark:
* Use the provided template or create your own structure. :heavy_check_mark:

**3. Output:**

* Display the result on the web page (e.g., below the button). :heavy_check_mark:


## Choices

some of the choices i made:

* I chose to use Vue because i am less farmiliar with it, making it somewhat more of a challenge
* since i was using vite as a build tool i used vitest for unit testing
* since no calculation method was provided for getting the Yearly salary i assumed that i needed to add "vakantiegeld" to it.
* for the bonus i made the page multilingual with the use of i18n

## Screenshot

![image](https://github.com/callmebackdraft/CW.ABN.Assessment/assets/14372954/b2b74e72-5b51-40de-a760-51b85f77fb2b)



