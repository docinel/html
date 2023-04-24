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

document.getElementById('filtro-nome').addEventListener('keyup', (ev) => {
	const input = ev.target;
	input.value = input.value.toUpperCase();
});

 var filtro = document.getElementById('filtro-nome');
 var tabela = document.getElementById('lista');
  filtro.onkeyup = function () {
   var nomeFiltro = filtro.value;
   for (var i = 1; i < tabela.rows.length; i++) {
     var conteudoCelula =tabela.rows[i].cells[1].innerText;
     var corresponde = conteudoCelula.toUpperCase().indexOf(nomeFiltro) >= 0;
     tabela.rows[i].style.display = corresponde ? '' : 'none';
   }
 };

 function protegercodigo() {
    if (event.button==2||event.button==3){
        alert('Codigo protegido!');}
    }
    document.onmousedown=protegercodigo