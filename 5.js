function st(){
var kol=document.getElementById("kol").value;
var stm=document.getElementById("price").value;
var r=document.getElementById("res");
r.innerHTML=kol*stm;
}
window.document.addEventListener("DOMContentLoaded", function (st) {
    console.log("DOM fully loaded and parsed");
    var b = document.getElementById("sumbit");
    b.addEventListener("click", st);
});