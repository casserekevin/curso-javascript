document.write("Curso Javascript - Aula 14<br><br>")

// let array = new Array()
let mochila = []

mochila.push("Faca")
mochila.push("Corda")
mochila.push("Pederneira")
mochila.push("Chave")
mochila.push("Lanterna")
mochila.push("Pedra")

mochila.splice(1,1)
mochila.splice(2,1)

document.write(`${mochila[0]}<br>`)
document.write(`${mochila[1]}<br>`)
document.write(`${mochila[2]}<br>`)
document.write(`${mochila[3]}<br>`)
document.write(`${mochila[4]}<br>`)
document.write(`${mochila[5]}<br>`)