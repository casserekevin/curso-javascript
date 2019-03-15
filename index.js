document.write("Curso Javascript - Aula 18<br><br>")

let mochila = [["Corda", 1], ["Cura", 10], ["Lanterna", 1], ["Pilhas", 20]]

for(let l = 0; l < 4; l++){
	for(let c = 0; c < 2; c++){
		document.write(`${mochila[l][c]} `)
	}
	document.write("<br>")
}