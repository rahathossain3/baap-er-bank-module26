// headle deposit button event by

//first get button
document.getElementById('deposit-button').addEventListener('click', function () {

    //get  the amount deposited
    // get input field------- 
    const depositInput = document.getElementById('deposit-input');
    //get input value---------
    const depositAmmount = depositInput.value;
    console.log(depositAmmount);

    // whice position value show
    const depositTatal = document.getElementById('deposit-total');
    // value set
    depositTatal.innerText = depositAmmount;

    //clear the deposit input field
    depositInput.value = '';

})