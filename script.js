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
const taxPercent = document.querySelector(".taxPercent")

/**Vergiler Hariç */
const taxExcluded = document.querySelector(".taxExcluded")
const taxTotal = document.querySelector(".taxTotal")
const taxExcludedSum = document.querySelector(".taxExcludedSum")
const percentExcluded = document.querySelector(".percentExcluded")


const taxBtnFirst = document.querySelector(".tax-btn-one");
const taxBtnSecond = document.querySelector(".tax-btn-two");
let newAmount = ""
let newSub = ""

function formatTL(amount) {
  return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' TL';
}

taxBtnFirst.addEventListener("click", () => {
    taxBtnFirst.classList.add("active")
    taxBtnSecond.classList.remove("active")

    if (taxBtnFirst.classList.contains("active")) {
        taxIncluded.classList.remove("d-none")
        taxExcluded.classList.add("d-none")
        alertSale.classList.remove("d-none")
    }


})

taxBtnSecond.addEventListener("click", () => {
    taxBtnFirst.classList.remove("active")
    taxBtnSecond.classList.add("active")

    if (taxBtnSecond.classList.contains("active")) {
        taxIncluded.classList.add("d-none")
        taxExcluded.classList.remove("d-none")
        alertSale.classList.add("d-none")
    }

})

const saleStatus = () => {
    if (inputAmount.value >= 10000 && inputAmount.value <= 99999) {
        taxSale.innerHTML = 500
        alertSale.classList.remove("d-none")
    } else if (inputAmount.value >= 100000) {
        taxSale.innerHTML = 10000
        alertSale.classList.remove("d-none")
        subValue.innerHTML = inputAmount.value - taxSale.innerText
    } else {
        taxSale.innerHTML = 0
        alertSale.classList.add("d-none")
    }

    if (inputAmount.value >= 10000) {
        subValue.innerText = inputAmount.value - taxSale.innerHTML
    } else {
        subValue.innerText = "0,00"
    }
}

taxItem.forEach((tax) => {
    tax.addEventListener("click", () => {

        removeActive()
        tax.classList.add("active")

        if (tax.classList.contains("active")) {

            inputVal.value = (tax.innerText)            
            newAmount = inputVal.value * inputAmount.value
            taxValue.innerHTML = newAmount
            taxPercent.innerHTML = `Vergi (${tax.innerText})`;
            newSub = subValue.textContent          
            sumValue.innerHTML = parseInt(newSub) + parseInt(newAmount)
            

            //vergiler Hariç
            taxTotal.innerHTML = newAmount
            percentExcluded.innerHTML = `Vergi (${tax.innerText})`
            taxExcludedSum.innerHTML = inputAmount.value


        }

    })
})




inputAmount.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        newAmount = event.target.value * inputVal.value;
        console.log(newAmount);
        
            saleStatus()
        
        console.log(subValue);
        taxValue.innerHTML = newAmount

        newSub = subValue.textContent
        console.log(newSub);
        sumValue.innerHTML = parseInt(newSub) + parseInt(newAmount)
        taxPercent.innerHTML = `Vergi (${inputVal.value})`

        //vergiler Hariç
        taxTotal.innerHTML = newAmount
        percentExcluded.innerHTML = `Vergi (${inputVal.value})`
        taxExcludedSum.innerHTML = inputAmount.value

    }

})

const removeActive = () => {
    taxItem.forEach(tax => {
        tax.classList.remove("active")
    })
}
