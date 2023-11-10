document.getElementById("btn3").onclick = function(){
    var menhGia = 23500;
    var Usd = Number(document.getElementById("usd").value);
    var quyDoi = Usd * menhGia;
    document.getElementById("vnd").innerHTML = quyDoi;
}