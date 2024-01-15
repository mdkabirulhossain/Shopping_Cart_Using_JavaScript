function IncreaseAndDecrase(inputID, flag){
    const getInput = document.getElementById(inputID);
    const getInputValue = getInput.value;
    const getInputInteger = parseInt(getInputValue);
    let updatevalue;
    if (flag === true){
        updatevalue = getInputInteger + 1;
    }
    else{
        updatevalue = getInputInteger - 1;
    }

    return getInput.value = updatevalue;
    
}
//balance update function for phone
function phonePriceUpdate(IncreaseResult){

    const totalIncreaseAmmount = IncreaseResult * 1219;
    const getElement = document.getElementById('phone_price');
    getElement.innerText = totalIncreaseAmmount;
}
//Balance update function for case
function CasePriceUpdate(IncreaseResult){
    const totalIncreaseAmmount = IncreaseResult * 59;
    const getElement = document.getElementById('case_price');
    getElement.innerText = totalIncreaseAmmount;
}
//For current phone and case price
function currentPrice(elementID){
    const getElement = document.getElementById(elementID);
    const getElementValue = getElement.innerText;
    const getElementValueInt = parseInt(getElementValue);
    return getElementValueInt;
}
// For subtotal
function subTotalFunction(){
    const phoneCurrentPrice = currentPrice('phone_price');
    const caseCurrentPrice = currentPrice('case_price');
    const Intotal = phoneCurrentPrice + caseCurrentPrice;
    const gettotalElement = document.getElementById('Final_ammount');
    gettotalElement.innerText = Intotal;
    //calculate tax Assume tax 10%
    let taxammount = Intotal * 0.10;
    taxammount = taxammount.toFixed(2);
    const finalTaxammount = parseFloat(taxammount);
    const taxElement = document.getElementById('tax_ammount');
    taxElement.innerText = finalTaxammount;
    // Calculate final ammount
    const finalAmmount = Intotal + finalTaxammount ;
    const finalElement = document.getElementById('sub_total');
    finalElement.innerText = finalAmmount;
    
}
//For Phone
document.getElementById('phone_increase_btn').addEventListener('click', function(){
    
     const IncreaseResult = IncreaseAndDecrase('phone_input_field', true);

    //  const totalIncreaseAmmount = IncreaseResult * 1219;

    //  const getElement = document.getElementById('phone_price');
    //  getElement.innerText = totalIncreaseAmmount;

    //call function
    phonePriceUpdate(IncreaseResult);

    //----------for sub total --------------
    subTotalFunction();

})
// Decrase
document.getElementById('phone_decrease_btn').addEventListener('click', function(){
    
    const DecraseResult = IncreaseAndDecrase('phone_input_field', false);

    // const totalDecraseAmmount = DecraseResult * 1219;

    // const getElement = document.getElementById('phone_price');
    // getElement.innerText = totalDecraseAmmount;
    phonePriceUpdate(DecraseResult);

    //call subtoal function
    subTotalFunction();

})

// For Case

document.getElementById('case_increase_btn').addEventListener('click', function(){
    
    const IncreaseResult = IncreaseAndDecrase('case_input_field', true);
// If we want then we use anothe function here for update case price
   CasePriceUpdate(IncreaseResult);
   //call subtoal function
   subTotalFunction(); 

})

//decrase
document.getElementById('case_decrase_btn').addEventListener('click', function(){
    
    const DecraseResult = IncreaseAndDecrase('case_input_field', false);

    CasePriceUpdate(DecraseResult);

    //call subtoal function
    subTotalFunction();
})






