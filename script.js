const taxItem = document.querySelectorAll(".tax-item");
const inputVal = document.querySelector("#inputVal")
const inputAmount = document.querySelector("#inputAmount");


   

let newAmount = ""
taxItem.forEach((tax) => {
    tax.addEventListener("click", () => {

        removeActive()
        tax.classList.add("active")

        if (tax.classList.contains("active")) {

            console.log(tax.innerText);
            inputVal.value = (tax.innerText)
            console.log(inputVal.value);
            newAmount = inputVal.value * inputAmount.value

        }



        console.log(newAmount);
    })
})

inputAmount.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        newAmount = event.target.value * inputVal.value;
        console.log(newAmount);
    }



})
const removeActive = () => {
    taxItem.forEach(tax => {
        tax.classList.remove("active")
    })
}