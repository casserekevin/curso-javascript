document.write("Curso Javascript - Aula 19<br><br>")

let num
let cont

num = 0
while(num < 10){
	document.write(`${num}<br>`)
	num++
}
	
document.write("<hr>")

num = 10
while(num--){
	document.write(`${num}<br>`)
}	
	
document.write("<hr>")

num = true
cont = 0
while(num){
	document.write(`${cont}<br>`)
	cont++
	if(cont >= 10){
		num = false
	}
}