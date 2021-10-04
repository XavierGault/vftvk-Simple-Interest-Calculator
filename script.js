function compute()
{
    var Principal = document.getElementById("principal").value;
    var Rate = document.getElementById("rate").value;
    var Years = document.getElementById("years").value;
    var Interest = Principal * Years * Rate /100;
    var Year = new Date().getFullYear()+parseInt(Years);
    var Result = document.getElementById("result");

    if(Principal<=0)
    {
        alert("Enter a positive value");
        principal.focus();
    }
    else
    {
         Result.innerHTML="If you deposit "+Principal+",\<br\>at an interest rate of "+Rate+"%\<br\>You will receive an amount of "+Interest+",\<br\>in the year "+Year+"\<br\>"
         result.focus();
    }
}
   

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
