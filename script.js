const taxItem = document.querySelectorAll(".tax-item");
const inputVal = document.querySelector("#inputVal")
const inputAmount = document.querySelector("#inputAmount");

const subValue = document.querySelector(".subValue")
const taxValue = document.querySelector(".taxValue");
const sumValue = document.querySelector(".sumValue")
const taxSale = document.querySelector(".taxSale")
const alertSale = document.querySelector(".alertSale")
const taxPercent = document.querySelector(".taxPercent")
let newAmount = ""
let newSub=""
const saleStatus =()=>{
    if( inputAmount.value>=10000 && inputAmount.value<=99999){
        taxSale.innerHTML=500
        alertSale.classList.remove("d-none")
        console.log(taxSale);
  
        
    }else if(inputAmount.value>=100000){
        taxSale.innerHTML=10000
        alertSale.classList.remove("d-none")
        subValue.innerHTML = inputAmount.value - taxSale.innerText
    }else{
        taxSale.innerHTML=0
        alertSale.classList.add("d-none")
    }
    console.log(taxSale);
    
    if(inputAmount.value >= 10000){
        subValue.innerText = inputAmount.value - taxSale.innerHTML
     }else{
        subValue.innerText="0,00"
     }
}

taxItem.forEach((tax) => {
    tax.addEventListener("click", () => {

        removeActive()
        tax.classList.add("active")

        if (tax.classList.contains("active")) {
          
            console.log(tax.innerText);
            inputVal.value = (tax.innerText)
            console.log(inputVal.value);
            newAmount = inputVal.value * inputAmount.value 
            
            taxValue.innerHTML = newAmount
            taxPercent.innerHTML = `Vergi (${tax.innerText})`;
             newSub = subValue.textContent
            console.log(newSub);
            sumValue.innerHTML =  parseInt(newSub) + parseInt(newAmount)
            
            }

     
        saleStatus()
       
       
      
        console.log(taxSale);
        console.log(newAmount);
     console.log(subValue.innerHTML);
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
        sumValue.innerHTML =  parseInt(newSub) + parseInt(newAmount)
        taxPercent.innerHTML = `Vergi (${inputVal.value})`
   
        }

})
const removeActive = () => {
    taxItem.forEach(tax => {
        tax.classList.remove("active")
    })
}