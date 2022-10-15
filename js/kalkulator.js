{
    const updateResultText = (text) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = text;
    }
    const convertCurrencies = (amountOfMoneyElement, inputCurrencyElement, outputCurrencyElement) => {
        const amountOfMoney = amountOfMoneyElement.value;
        const inputCurrency = inputCurrencyElement.value;
        const inputCurrencyText = inputCurrencyElement.options[inputCurrencyElement.selectedIndex].text;
        const outputCurrency = outputCurrencyElement.value;
        const outputCurrencyText = outputCurrencyElement.options[outputCurrencyElement.selectedIndex].text;

        const calculation = (amountOfMoney * inputCurrency / outputCurrency).toFixed(2);
        return `${amountOfMoney} ${inputCurrencyText} = <strong>${calculation} ${outputCurrencyText}</strong>`;
    }
    const switchCyrrency = (inputCurrencyElement, outputCurrencyElement) => {
        const inputCurrencySelectedIndex = inputCurrencyElement.selectedIndex;
        const outputCurrencySelectedIndex = outputCurrencyElement.selectedIndex;
        const tmp = inputCurrencySelectedIndex;

        inputCurrencyElement.options[outputCurrencySelectedIndex].selected = 'selected';
        outputCurrencyElement.options[tmp].selected = 'selected';
    }
    const init = () => {
        const amountOfMoneyElement = document.querySelector(".js-amountOfMoney");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const text = convertCurrencies(amountOfMoneyElement, inputCurrencyElement, outputCurrencyElement);
            updateResultText(text);
        });

        const currencySwitchElement = document.querySelector(".js-arrows");
        currencySwitchElement.addEventListener("click", () => {
            switchCyrrency(inputCurrencyElement, outputCurrencyElement);
        });
    }
    init();
}