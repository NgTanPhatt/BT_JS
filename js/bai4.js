document.getElementById("btn4").onclick = function(){
    var chieuRong = Number(document.getElementById("cr").value);
    var chieuDai = Number(document.getElementById("cd").value);
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById("cv").innerHTML = chuVi;
    document.getElementById("dt").innerHTML = dienTich;
}