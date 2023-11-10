document.getElementById("btn5").onclick = function(){
    var so = document.getElementById("b5").value;
    var hangChuc = Math.floor(so / 10);
    var donVi = so % 10;
    var tongKySo = hangChuc + donVi;
    document.getElementById("kyso").innerHTML = tongKySo;

}