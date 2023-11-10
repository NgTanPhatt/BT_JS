document.getElementById("btn2").onclick = function(){
    var soThuNhat = Number(document.getElementById("one").value);
    var soThuHai = Number(document.getElementById("two").value);
    var soThuBa = Number(document.getElementById("three").value);
    var soThuTu = Number(document.getElementById("four").value);
    var soThuNam = Number(document.getElementById("five").value);
    var trungBinhCong = Number((soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam)/ 5);
    document.getElementById("tbc").innerHTML = trungBinhCong;
}
