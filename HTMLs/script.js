let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

function obsver(){
    var x = document.getElementById("obs").value;
    var p = document.getElementById("pedido").value;
    document.getElementById("res").innerHTML = x;
    document.getElementById("res2").innerHTML = p;
}

