
function set_price(){
    document.getElementById("item_price").innerHTML = "...";
    setTimeout(setPrice, 2000);
}
function setPrice(){
    var get_assest_id = document.getElementsByClassName("current")[0].attributes["data-asset-id"].value;
    var add_numb_for_price = add_number(get_assest_id);
    var formatted_price = formatter.format(add_numb_for_price)
    document.getElementById("item_price").innerHTML = formatted_price;
}


// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

function add_number(asset_id){
    let temp_to_int = 0;
    if((asset_id % 2) == 0){
        if(asset_id < 10){
            let temp = "7"+asset_id+"0";
            temp_to_int = parseInt(temp);
        } else if(asset_id < 20){
            let temp = "1"+asset_id+"0";
            temp_to_int = parseInt(temp);
        } else if(asset_id < 30){
            let temp = "3"+asset_id+"0";
            temp_to_int = parseInt(temp);
        } else {
            let temp = "2"+asset_id+"0";
            temp_to_int = parseInt(temp);
        }
    }else{
        if(asset_id < 10){
            let temp = "8"+asset_id+"0";
            temp_to_int = parseInt(temp);
        } else if(asset_id < 20){
            let temp = "4"+asset_id+"0";
            temp_to_int = parseInt(temp);
        } else if(asset_id < 30){
            let temp = "1"+asset_id+"0";
            temp_to_int = parseInt(temp);
        } else {
            let temp = "2"+asset_id+"0";
            temp_to_int = parseInt(temp);
        }
    }

    return temp_to_int;
}