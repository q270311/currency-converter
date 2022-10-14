let amountOfMoneyElement = document.querySelector(".js-amountOfMoney");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");

let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amountOfMoney = amountOfMoneyElement.value;
    let inputCurrency = inputCurrencyElement.value;
    let inputCurrencyText = inputCurrencyElement.options[inputCurrencyElement.selectedIndex].text;
    let outputCurrency = outputCurrencyElement.value;
    let outputCurrencyText = outputCurrencyElement.options[outputCurrencyElement.selectedIndex].text;

    let calculation = (amountOfMoney * inputCurrency / outputCurrency).toFixed(2);


    let calculationResult = `${amountOfMoney} ${inputCurrencyText} = <strong>${calculation} ${outputCurrencyText}</strong>`;
    resultElement.innerHTML = calculationResult;
});

let currencySwitchElement = document.querySelector(".js-arrows");
currencySwitchElement.addEventListener("click", () => {
    let inputCurrencySelectedIndex = inputCurrencyElement.selectedIndex;
    let outputCurrencySelectedIndex = outputCurrencyElement.selectedIndex;
    let tmp = inputCurrencySelectedIndex;

    inputCurrencyElement.options[outputCurrencySelectedIndex].selected = 'selected';
    outputCurrencyElement.options[tmp].selected = 'selected';

});