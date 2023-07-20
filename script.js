const taxItem = document.querySelectorAll(".tax-item");
const inputVal = document.querySelector("#inputVal")
const inputAmount = document.querySelector("#inputAmount");
const taxBtn = document.querySelectorAll(".tax-btn");
/*Vergiler Dahil */
const taxIncluded = document.querySelector(".taxIncluded")
const subValue = document.querySelector(".subValue")
const taxValue = document.querySelector(".taxValue");
const sumValue = document.querySelector(".sumValue")
const taxSale = document.querySelector(".taxSale")
const alertSale = document.querySelector(".alertSale")
const taxPercentValue = document.querySelector(".taxPercent")

/**Vergiler Hariç */
const taxExcluded = document.querySelector(".taxExcluded")
const taxTotal = document.querySelector(".taxTotal")
const taxExcludedSum = document.querySelector(".taxExcludedSum")
const percentExcluded = document.querySelector(".percentExcluded")


const taxBtnFirst = document.querySelector(".tax-btn-one");
const taxBtnSecond = document.querySelector(".tax-btn-two");

const formatMoney = (money) => {

    const tl = money.toLocaleString("tr-TR", { style: "currency", currency: "TRY" });;
    return tl

}

taxBtnFirst.addEventListener("click", () => {
    taxBtnFirst.classList.add("active")
    taxBtnSecond.classList.remove("active")

    if (taxBtnFirst.classList.contains("active")) {
        taxIncluded.classList.remove("d-none")
        taxExcluded.classList.add("d-none")

    }

})

taxBtnSecond.addEventListener("click", () => {
    taxBtnFirst.classList.remove("active")
    taxBtnSecond.classList.add("active")

    if (taxBtnSecond.classList.contains("active")) {
        taxIncluded.classList.add("d-none")
        taxExcluded.classList.remove("d-none")

    }
})


const calculateTax = (tax, amount) => {
    let taxExcludedValue = (amount - (amount * tax))
    let taxStatus = amount * tax
    let amountTotal = amount + taxStatus

    return {
        taxExcludedValue: (taxExcludedValue),
        taxStatus: (taxStatus),
        amountTotal: (amountTotal)
    }
}

const resultArea = () => {

    let inputValueStatus = parseFloat(inputVal.value)
    let inputAmountStatus = parseFloat(inputAmount.value);

    let taxPercent = inputValueStatus
    let amount = inputAmountStatus
    if (isNaN(amount) || isNaN(taxPercent)) {
        alert("Lütfen tutarlı miktar ve kdv oranı giriniz")
        return
    }
    let taxIncludedStatus = calculateTax(taxPercent, amount)
    //vergiler Dahil
    sumValue.textContent = formatMoney(taxIncludedStatus.amountTotal)
    subValue.textContent = formatMoney(taxIncludedStatus.taxExcludedValue)
    taxValue.textContent = formatMoney(taxIncludedStatus.taxStatus)
    taxPercentValue.innerHTML = `Vergi (${inputVal.value})`;

    //vergiler Hariç
    taxTotal.textContent = formatMoney(taxIncludedStatus.taxStatus)
    taxExcludedSum.textContent = formatMoney(amount)
    percentExcluded.innerHTML = `Vergi (${inputVal.value})`
}
inputAmount.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        resultArea()
    }
    percentExcluded.innerHTML = `Vergi (${inputVal.value})`
})


taxItem.forEach((tax) => {
    tax.addEventListener("click", () => {

        removeActive()
        tax.classList.add("active")

        if (tax.classList.contains("active")) {

            if (tax.textContent === "%1") {
                inputVal.value = 0.01
            } else if (tax.textContent === "%8") {
                inputVal.value = 0.08
            } else {
                inputVal.value = 0.18
            }
        }
       
        resultArea()
    })
})


const removeActive = () => {
    taxItem.forEach(tax => {
        tax.classList.remove("active")
    })
}
