function proceed(){
    setTimeout(() =>{
        document.getElementById("payment_form").submit;
        alert("Your payment information has been successfully submitted for review");
    }, 1000);

    var addressDomain = window.location.origin;
    document.getElementById("_nextPage").value = addressDomain + "/career/payment/index.html";
} 