function myFun(){
    var date = document.getElementById("date").value;
    var rdate = document.getElementById("rdate");
    rdate.innerHTML = date;
    console.log(date);

    var purchase_amount = document.getElementById("purchase-amount").value;

    var purchase_amount1 = document.getElementById("purchase-amount1");
    purchase_amount1.innerHTML = purchase_amount;

    var rpurchase_amount = document.getElementById("rpurchase-amount");
    rpurchase_amount.innerHTML = purchase_amount;


    var purchase_money = document.getElementById("purchase-money").value;
    var rpurchase_money = document.getElementById("rpurchase-money");
    rpurchase_money.innerHTML = purchase_money;

    var ptotal = purchase_amount * purchase_money * 30
    console.log(ptotal);
    var total_amount = document.getElementById("total-amount");
    total_amount.innerHTML = ptotal;
    var rtotal_amount = document.getElementById("rtotal-amount");
    rtotal_amount.innerHTML = ptotal;

    var commission_amount = document.getElementById("commission-amount").value;
    var rcommission_amount = document.getElementById("rcommission-amount");
    rcommission_amount.innerHTML = commission_amount;

    var commission_money = document.getElementById("commission-money").value;
    var rcommission_money = document.getElementById("rcommission-money");
    rcommission_money.innerHTML = commission_money;

    var ctotal = commission_money * commission_amount;
    var commission_total = document.getElementById("commission-total");
    commission_total.innerHTML = ctotal;
    var rcommission_total = document.getElementById("rcommission-total");
    rcommission_total.innerHTML = ctotal;

    var total = document.getElementById("total");
    total.innerHTML = ptotal + ctotal;

    var total_th = document.getElementById("total-th");
    total_th.innerHTML = ptotal + ctotal;

    var rtotal = document.getElementById("rtotal");
    rtotal.innerHTML = ptotal + ctotal;


    var rtotal_th = document.getElementById("rtotal-th");
    rtotal_th.innerHTML = ptotal + ctotal;

    var left_date = document.getElementById("left-date").value;
    var rleft_date = document.getElementById("rleft-date");
    rleft_date.innerHTML = left_date;

    var left_amount = document.getElementById("left-amount").value;
    var rleft_amount = document.getElementById("rleft-amount");
    rleft_amount.innerHTML = left_amount;

    var rpurchase_amt = document.getElementById("rpurchase-amt");
    rpurchase_amt.innerHTML = purchase_amount;

    var rpdate = document.getElementById("rpurchase-date");
    rpdate.innerHTML = date;

    var total_amount_left = parseInt(left_amount) + parseInt(purchase_amount);
    document.getElementById("total-left").innerHTML = total_amount_left;
    document.getElementById("rtotal-left").innerHTML = total_amount_left;

    var car_amount = document.getElementById("car-amount").value;
    document.getElementById("rcar-amount").innerHTML = car_amount;

    document.getElementById("leftamount-after-car").innerHTML = total_amount_left - car_amount;
    document.getElementById("rleftamount-after-car").innerHTML = total_amount_left - car_amount;

    var destionation = document.getElementById("destination").value;
    document.getElementById("rdestination").innerHTML = destionation;

    var car = document.getElementById("car").value;
    document.getElementById("rcar").innerHTML = car;
}  

document.getElementById("capture").addEventListener("click", function() {
    html2canvas(document.getElementById("captureArea")).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'screenshot.jpg';
        link.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        link.click();
    });
});

document.getElementById("submit").addEventListener("click", function(){
    myFun();
})