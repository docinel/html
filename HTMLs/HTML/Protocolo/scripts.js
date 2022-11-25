
var repeat=0 
var title=document.title
var leng=title.length
var start=1
function titlemove() {
titl=title.substring(start, leng) + title.substring(0, start)
document.title=titl
start++
if (start==leng+1) {
start=0
if (repeat==0)
return
}
setTimeout("titlemove()",200)
}
if (document.title)
titlemove()

/////////////////////////////////////////////////////////////////////////////////
/* window.alert("Para iluminar o ambiente com a sua presença, com o seu carisma: \nSeja sincero, seja discreto, seja simples, seja verdadeiro!") */
////////////////////////////////////////////////////////////////////

function verificar(){
    var n1 = Number(window.prompt('Valor inical: '));
    
  if(n1<=0){
    alert("O valor inicial não pode ser menor ou igual a 0!");
    document.getElementById("res").innerHTML = "";
  }else{
    var n2 = Number(window.prompt('Valor final: '));
    var s4 = n2 - n1;
    var s5 = s4;
    var s6 = s4 / n1;
    var s7 = s6 * 100;

  }
  document.getElementById("res").innerHTML = ` Aumento de ` + parseFloat(s7.toFixed(2)) + `%`;
}

//alert('Para pesquisar digite na caixa de pesquisa! Utilize letras minúsculas!')
document.getElementById('filtro-nome').addEventListener('keyup', (ev) => {
	const input = ev.target;
	input.value = input.value.toUpperCase();
});

 var filtro = document.getElementById('filtro-nome');
 var tabela = document.getElementById('lista');
  filtro.onkeyup = function () {
   var nomeFiltro = filtro.value;
   for (var i = 1; i < tabela.rows.length; i++) {
     var conteudoCelula =tabela.rows[i].cells[0].innerText;
     var corresponde = conteudoCelula.toUpperCase().indexOf(nomeFiltro) >= 0;
     tabela.rows[i].style.display = corresponde ? '' : 'none';
   }
 };
 
 
 // Função para formatar 1 em 01
 const zeroFill = n => {
    return ('0' + n).slice(-2);
}

// Cria intervalo
const interval = setInterval(() => {
    // Pega o horário atual
    const now = new Date();

    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    // Exibe na tela usando a div#data-hora
    document.getElementById('data-hora').innerHTML = dataHora;
}, 1000);
/////////////////////////////////////////////////////////////////////////////////////
/* const SkewedOne = document.querySelector('.SkewedOne');
        const SkewedTwo = document.querySelector('.SkewedTwo');
        window.addEventListener('scroll', function(){
            const value1 = -15 + window.scrollY/45;
            const value2 = 15 + window.scrollY/-45;
            SkewedOne.style.transform = "skewY(" + value1 + "deg)";
            SkewedTwo.style.transform = "skewY(" + value2 + "deg)";
        }) */