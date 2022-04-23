function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    //test if amount>0 and alert
    if (principal<=0){
        alert("Please enter a positive number as amount");
    }
    
    //calculate
    var rate = document.getElementById("rate").value; 
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    //convert years
    var year = new Date().getFullYear()+parseInt(years);
    
    //result presentation incl. highlighting the numbers
    document.getElementById("result").innerText=interest;
    document.getElementById("result").innerHTML="If you deposit "+"<mark class='highlight'>"+principal+"</mark>"+",\<br\>at an interest rate of "+"<mark class='highlight'>"+rate+"</mark>"+"%\<br\>You will receive an amount of "+"<mark class='highlight'>"+interest+"</mark>"+",\<br\>in the year "+"<mark class='highlight'>"+year+"</mark>"+"\<br\>"  
}

//update rate when using the slider
function updateRate() 
{
var rateval = document.getElementById("rate").value;
document.getElementById("rate_val").innerText=rateval;
}           
