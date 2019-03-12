document.write("Curso Javascript - Aula 8<br>")

var pontos = 72
var energia = 30

if(((pontos >= 30 && pontos <= 40) || (pontos >= 70 && pontos <= 80)) && energia >= 40){
	document.write("Ganhou")
}
else{
	document.write("Perdeu")
}